import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-consegne-mezzo',
  templateUrl: './consegne-mezzo.component.html',
  styleUrls: ['./consegne-mezzo.component.scss']
})
export class ConsegneMezzoComponent {

  idMezzo: any;
  listaConsegne: FirebaseListObservable<any>;

  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { 


    this.idMezzo = this.route.snapshot.params['id'];
    console.log(this.idMezzo)

    
    this.listaConsegne = af.database.list('/consegna', {
                            query: {
                                orderByChild: 'idMezzo',
                                equalTo: this.idMezzo
                              }
                            });

  }

  tornaMezzi(){
   this._location.back();
  	//this.router.navigate(['/ordini']);
  }

  dettaglioCliente(idCliente){
      this.router.navigate(['/dettaglioCliente', idCliente]);
  }

  dettaglioOrdine(idOrdine){
     this.router.navigate(['/dettaglioOrdine', idOrdine]);
  }

}
