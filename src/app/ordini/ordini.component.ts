import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.scss']
})
export class OrdiniComponent implements OnInit {

  ordini: FirebaseListObservable<any>;
  constructor(public af: AngularFire,  private router: Router) { 

  	this.ordini = af.database.list('ordini/');
  	console.log(this.ordini)

  }

  ngOnInit() {
  	
  }

  dettaglioCliente(idCliente){
    this.router.navigate(['/dettaglioCliente', idCliente]);
  }

  dettaglioOrdine(idOrdine){
  	console.log(idOrdine)
    this.router.navigate(['/dettaglioOrdine', idOrdine]);
    
  }
}
