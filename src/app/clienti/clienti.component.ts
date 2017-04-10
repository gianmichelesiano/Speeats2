import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})
export class ClientiComponent implements OnInit {

  clienti: FirebaseListObservable<any>;
  constructor(public af: AngularFire, private router: Router) {
  	
  	this.clienti  = af.database.list('/clienti')

  }


  ngOnInit() {
  }

  dettaglioCliente(idCliente){
  	console.log(idCliente)
  	this.router.navigate(['/dettaglioCliente', idCliente]);
  }

}
