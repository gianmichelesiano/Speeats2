import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase'


@Component({
  selector: 'app-dettaglio-ristorante',
  templateUrl: './dettaglio-ristorante.component.html',
  styleUrls: ['./dettaglio-ristorante.component.scss']
})
export class DettaglioRistoranteComponent implements OnInit {



  ristorante: FirebaseObjectObservable<any>;
  ristoranti: FirebaseListObservable<any>;
  downloadURL?: any;
  loading: boolean = true
  public id;

  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { 

  }

  ngOnInit() {

   let storage = firebase.storage();
   this.id = this.route.snapshot.params['id'];
  
   this.ristorante = this.af.database.object('/ristoranti/'+this.id);
   this.ristoranti = this.af.database.list('/ristoranti');

   this.ristorante.subscribe( item => {
     var pathReference = storage.ref(item.path);
     //console.log(item.path)
     this.downloadURL = pathReference.getDownloadURL()
   })
  }

  backClicked() {
        this._location.back();
  }

  deleteRistorante() {  

    this.ristoranti.remove(this.id);

    this._location.back();
  }

  mofidicaRistorante() {
    this.router.navigate(['/mofidicaRistorante', this.id]);
  }

  vaiMenu(){
  	this.router.navigate(['/menuRistorante', this.id]);
  }

  vediOrdini(){
    this.router.navigate(['/ordiniRistorante', this.id]);
  }

  vediOfferte(){
    this.router.navigate(['/offerteRistorante', this.id]);
  }

  onLoad() {
    this.loading = false;
  }


}
