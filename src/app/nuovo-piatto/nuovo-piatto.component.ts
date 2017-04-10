import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuovo-piatto',
  templateUrl: './nuovo-piatto.component.html',
  styleUrls: ['./nuovo-piatto.component.scss']
})
export class NuovoPiattoComponent {

  @Input() folder: string= '';
  image: string;
  path: string = '';
  finito: boolean = false

  public tipologiaPiatto 
  public idRistorante: string;
  menu: FirebaseListObservable<any>;

   public piattoForm = this.fb.group({
    nomePiatto: ["", Validators.required],
    tipologiaPiatto: ["", Validators.required],
    ricetta: ["", Validators.required],
    prezzo: ["0", Validators.required],
  });
  constructor(public fb: FormBuilder, public af: AngularFire,  private router: Router, private route: ActivatedRoute) { 
  		    this.idRistorante = this.route.snapshot.params['id'];
          //this.menu = af.database.list('/menu/'+this.idRistorante);

          this.menu = af.database.list('/menu');

  		    this.tipologiaPiatto = [
                          {code:'Antipasto', name:"Antipasto"}, 
                          {code:'Pizza', name:"Pizza"}, 
                          {code:'Pasta', name:"Pasta"}, 
                          {code:'Carne', name:"Carne"}, 
                          {code:'Insalate', name:"Insalate"}, 
                          {code:'Specialità', name:"Specialità"}, 
                          {code:'Panino', name:"Panino"}, 
                          {code:'Snack', name:"Snack"}, 
                          {code:'Bevande', name:"Bevande"}, 
                          {code:'Dessert', name:"Dessert"}, 
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
      this.folder = 'piatti/'+String(this.getRandomIntInclusive(1, 100000))

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

  salvaPiatto(event) {
    let temp1 = this.piattoForm.value
    console.log()
    temp1["tipologiaPiatto"] = this.piattoForm.value.tipologiaPiatto.toString();
    console.log("path")
    console.log(this.path)

    if (this.path == ''){
      this.path = '/piatti/38272/noImage.jpg'
    }
    temp1["path"] = this.path
    temp1["inOfferta"] = false
    temp1["prezzoOfferta"] = ''
    temp1["idRistorante"] = this.idRistorante
    this.menu.push(temp1)
    this.router.navigate(['/menuRistorante', this.idRistorante]);
  }


}
