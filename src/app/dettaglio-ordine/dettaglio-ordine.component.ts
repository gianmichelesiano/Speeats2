import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dettaglio-ordine',
  templateUrl: './dettaglio-ordine.component.html',
  styleUrls: ['./dettaglio-ordine.component.scss']
})
export class DettaglioOrdineComponent implements OnInit {

  idOrdine: any;
  listaOrdine: FirebaseListObservable<any>;

  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { 


    this.idOrdine = this.route.snapshot.params['id'];
    console.log(this.idOrdine)

    
    this.listaOrdine = af.database.list('/ordiniRistoranti', {
                            query: {
                                orderByChild: 'idOrdine',
                                equalTo: this.idOrdine
                              }
                            });

  }

  ngOnInit() {
  }

  tornaOrdini(){
   this._location.back();
  	//this.router.navigate(['/ordini']);
  }

  cambiaRitirato(itemId, ritirato, idOrdine){
        let totale = 1
        console.log(itemId, ritirato, idOrdine)
        ritirato = !ritirato
        let updateOrdineRistorante = this.af.database.object('ordiniRistoranti/'+itemId);
        updateOrdineRistorante.update({ ritirato: ritirato }).then(() =>{
          let ordiniRistorantiTotale = this.af.database.list('/ordiniRistoranti', { query: { orderByChild: 'idOrdine', equalTo: idOrdine}});
          ordiniRistorantiTotale.subscribe(snapshots => {
                  snapshots.forEach(snapshot => {
                       let itemInterno = 0
                       if (snapshot.ritirato==1){
                                itemInterno = 1
                       }
                       totale = totale*itemInterno
                  }) // fine foreach
                  console.log(totale)
                  let updateOrdine = this.af.database.object('ordini/'+idOrdine)
                  if (totale == 1){
                      updateOrdine.update({stato:2})

                  } else {
                      updateOrdine.update({stato:1})
                  }
          })//fine susc
        })// fine update   
  } // fine funzione

}

