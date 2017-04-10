import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase'


@Component({
  selector: 'app-dettaglio-piatto',
  templateUrl: './dettaglio-piatto.component.html',
  styleUrls: ['./dettaglio-piatto.component.scss']
})
export class DettaglioPiattoComponent implements OnInit {

  piatto: FirebaseObjectObservable<any>;
  piatti: FirebaseListObservable<any>;
  downloadURL?: any;
  loading: boolean = true
  public idPiatto;
  public idRistorante;



  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { 

   let storage = firebase.storage();
   this.idPiatto = this.route.snapshot.params['id'];
   this.idRistorante = this.route.snapshot.params['id2'];
   console.log(this.idPiatto)
   console.log(this.idRistorante)

   this.piatto = this.af.database.object('/menu/'+this.idPiatto);

   
  
   this.piatto.subscribe( item => {
     var pathReference = storage.ref(item.path);
     console.log(item.path)
     this.downloadURL = pathReference.getDownloadURL()
   })

  }

  backClicked() {
        this._location.back();
  }
  ngOnInit() {
  }

  deletePiatto(){
  		this.piatto.remove();

    	this._location.back();
  }

  mofidicaPiatto(){
  	this.router.navigate(['/mofidicaPiatto', this.idPiatto, this.idRistorante ]);
  }

  offertaPiatto(){
    this.router.navigate(['/offertaPiatto', this.idPiatto, this.idRistorante ]);
  }

  onLoad() {
    this.loading = false;
  }

}
