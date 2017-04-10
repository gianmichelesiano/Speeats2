import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import {Location} from '@angular/common';

@Component({
  selector: 'app-consegne',
  templateUrl: './consegne.component.html',
  styleUrls: ['./consegne.component.scss']
})
export class ConsegneComponent implements OnInit {

  consegne: Observable<any[]>;;
  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire) { 

  	 //let query = { orderByChild: 'idOrdine', equalTo: this.idOrdine}
  	 let query = {}


	 this.consegne = af.database.list('/consegna', { query: query})
	     .map(consegne => {
	          consegne.map(consegna => {
	              consegna.cliente = this.af.database.object('/clienti/'+consegna.idCliente+'/datiPersonali');
	              consegna.mezzo = this.af.database.object('/mezzi/'+consegna.idMezzo);
	              consegna.ordine = this.af.database.object('/ordini/'+consegna.$key);
	              consegna.ordineRistoranti = this.af.database.list('/consegna', { query: { orderByChild: 'idOrdine', equalTo: consegna.$key}})

	          });
          return consegne;
          });
     this.consegne.subscribe(res => console.log(res))

  }

  ngOnInit() {
  }

  dettaglioOrdine(idOrdine){
    this.router.navigate(['/dettaglioOrdine', idOrdine]);
  }

  dettaglioCliente(idCliente){
  	this.router.navigate(['/dettaglioCliente', idCliente]);
  }

}
