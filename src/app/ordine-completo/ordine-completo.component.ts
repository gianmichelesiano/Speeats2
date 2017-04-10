import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import {Http} from "@angular/http";  
import {Location} from '@angular/common';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ordine-completo',
  templateUrl: './ordine-completo.component.html',
  styleUrls: ['./ordine-completo.component.scss']
})
export class OrdineCompletoComponent implements OnInit {

  idOrdine:any
  
  ordineCompleto: Observable<any[]>;;
  constructor(public af: AngularFire, private router: Router, private route: ActivatedRoute, private _location: Location) {

  	this.idOrdine = this.route.snapshot.params['id'];
  	console.log(this.idOrdine)

	 this.ordineCompleto = af.database.list('/ordiniRistoranti', { query: { orderByChild: 'idOrdine', equalTo: this.idOrdine}})
	     .map(ordini => {
	          ordini.map(ordine => {
	              ordine.ristorante = this.af.database.object('/ristoranti/'+ordine.idRistorante);
	              
	          });
          return ordini;
          });
     this.ordineCompleto.subscribe(res => console.log(res))

  }

  ngOnInit() {
  }

  tornaOrdini(){
     this._location.back();
  }

}
