import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import {Http, Response, Jsonp} from "@angular/http";  


interface Image {
    path: string;
    filename: string;
    downloadURL?: string;
    $key?: string;
}

@Component({
  selector: 'app-nuovo-ristorante',
  templateUrl: './nuovo-ristorante.component.html',
  styleUrls: ['./nuovo-ristorante.component.scss']
})
export class NuovoRistoranteComponent  {
  
  @Input() folder: string= 'ImmaginiRistoranti';
  
  fileList : FirebaseListObservable<Image[]>;
  imageList : Observable<Image[]>;
  image: string;
  path: string = '';
  finito: boolean = false

  ristoranti: FirebaseListObservable<any>;
  public ristoranteForm = this.fb.group({
    nome: ["", Validators.required],
    tipologia: ["", Validators.required],
    indirizzo: ["", Validators.required],
    giorniApertura: ["", Validators.required],
    maxTempoConsegna: ["", Validators.required],
    costoConsegna: ["", Validators.required],
    ordineMin: ["", Validators.required],

  });

  public countries 
  public giorni 
  http:any
  constructor(http: Http, public fb: FormBuilder, public af: AngularFire,  private router: Router) {
    this.http = http
    this.ristoranti = af.database.list('/ristoranti');
    this.countries = [
                          {code:'Italiano', name:"Italiano"}, 
                          {code:'Svizzero', name:"Svizzero"}, 
                          {code:'Cinese', name:"Cinese"}, 
                          {code:'Indiano', name:"Indiano"}, 
                          {code:'Tailandese', name:"Tailandese"}, 
                          {code:'Pub', name:"Pub"}, 
                          {code:'TakeAway', name:"Take Away"}, 
                      ]

   this.giorni = [
                      {code:'LU', name:"Lunedì"}, 
                      {code:'MA', name:"Martedì"}, 
                      {code:'ME', name:"Mercoledì"}, 
                      {code:'GI', name:"Giovedì"}, 
                      {code:'VE', name:"Venerdì"}, 
                      {code:'SA', name:"Sabato"}, 
                      {code:'DO', name:"Domenica"}, 
                  ]

              
  }


  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  upload() {
      this.finito = true;
      // Create a root reference
      let storageRef = firebase.storage().ref();
      let success = false;
      this.folder = 'ristoranti/'+String(this.getRandomIntInclusive(1, 100000))

      // This currently only grabs item 0, TODO refactor it to grab them all
      for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
          console.log(selectedFile);
          // Make local copies of services because "this" will be clobbered
          let router = this.router;
          let af = this.af;
          let folder = this.folder;
          this.path = `/${this.folder}/${selectedFile.name}`;
          var iRef = storageRef.child(this.path);
          iRef.put(selectedFile).then((snapshot) => {
              console.log('Uploaded a blob or file! Now storing the reference at',`/${this.folder}/images/`);
              //console.log()
              //af.database.list(`/${folder}/images/`).push({ path: path, filename: selectedFile.name })
              console.log("finito")
              this.finito = false;

          });
      }   
   }

   salvaRistorante(event) {

    let temp1 = this.ristoranteForm.value
    temp1["tipologia"] = this.ristoranteForm.value.tipologia.toString();
    temp1["giorniApertura"] = this.ristoranteForm.value.giorniApertura.toString();
    temp1["indirizzo"] = this.ristoranteForm.value.indirizzo.toString();
    if (this.path == ''){
      this.path = '/piatti/38272/noImage.jpg'
    }
    temp1["path"] = this.path

    this.getCoordinate(temp1["indirizzo"]).subscribe(result => {
          let latitude = result.results[0].geometry.location.lat;
          let longitude = result.results[0].geometry.location.lng;
          //console.log(latitude)
          //console.log(longitude)
          temp1["lat"]  = latitude
          temp1["lon"]  = longitude
          this.ristoranti.push(temp1)
          this.router.navigate(['/ristoranti']);
          
    })

  }

  getCoordinate(indirizzo){
    //indirizzo = 'via roma 45 Sarno(SA) Italia '
    //console.log(indirizzo)
    let urlStrinf = 'https://maps.googleapis.com/maps/api/geocode/json?address='+indirizzo+'&key=AIzaSyDwnc0CvQPm4ypfXwxIFRTN1bcP1SYhn2w'
    return this.http.get(urlStrinf).map(res => res.json())
  }


  
}
