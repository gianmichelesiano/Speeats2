import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import {Http} from "@angular/http";  
 import {Location} from '@angular/common';





@Component({
  selector: 'app-ordini-ristorante',
  templateUrl: './ordini-ristorante.component.html',
  styleUrls: ['./ordini-ristorante.component.scss']
})
export class OrdiniRistoranteComponent implements OnInit {

  idRistorante:any
  ordini: FirebaseListObservable<any>;
  ordiniRistoranti: FirebaseListObservable<any>;
  ordiniRistorantiTotale: FirebaseListObservable<any>;
  
  listaOrdiniRistorante = []

  constructor( public http:Http, public af: AngularFire, private router: Router, private route: ActivatedRoute, private _location: Location) { 


     this.idRistorante = this.route.snapshot.params['id'];
     console.log(this.idRistorante)


     this.ordiniRistoranti = af.database.list('/ordiniRistoranti', {
                        query: {
                            orderByChild: 'idRistorante',
                            equalTo: this.idRistorante
                          }
                        });      
        
  }

  ngOnInit() {


  }

  dettaglioCliente(idCliente){
    this.router.navigate(['/dettaglioCliente', idCliente]);
  }

  ordineCompleto(idOrdine){
     console.log("ordine completo")

     this.router.navigate(['/ordineCompleto', idOrdine]);

  }

  cambiaPronto(itemId, pronto, idOrdine){
        let totale = 1
        pronto = !pronto
        let updateOrdineRistorante = this.af.database.object('ordiniRistoranti/'+itemId);
        updateOrdineRistorante.update({ pronto: pronto }).then(() =>{
        this.ordiniRistorantiTotale = this.af.database.list('/ordiniRistoranti', { query: { orderByChild: 'idOrdine', equalTo: idOrdine}});
        this.ordiniRistorantiTotale.subscribe(snapshots => {
             snapshots.forEach(snapshot => {
                       //console.log(snapshot)
                       //console.log(snapshot.pronto)
                       let itemInterno = 0
                       if (snapshot.pronto==1){
                                itemInterno = 1
                       }
                       totale = totale*itemInterno

              }) // fine foreach
             console.log("totale")
             console.log(totale)
             let updateOrdine = this.af.database.object('ordini/'+idOrdine)
             updateOrdine.update({stato:totale}).then( () => {
                   if (totale == 1){
                     this.associaMezzo(idOrdine)
                     console.log("associaMezzo")
                     let totalePrecedente = 1
                   } 
             })
        }) //fine susc
        })// fine update        
  } // fine funzione


  associaMezzo(ordineID){
    console.log("associaMezzosss")

    let strigaWeb2Py = 'https://bryoblu.pythonanywhere.com/speeats/default/associaMezzo.json/?idOrdine='+ordineID
    console.log(strigaWeb2Py)
    this.http.get(strigaWeb2Py).map(res => res.json()).subscribe( valore => {
        console.log(valore)

    })
  } // associaMezzi

  dissociaMezzo(ordineID){
    console.log("dissociaMezzosss")

    let strigaWeb2Py = 'https://bryoblu.pythonanywhere.com/speeats/default/dissociaMezzo.json/?idOrdine='+ordineID
    console.log(strigaWeb2Py)
    this.http.get(strigaWeb2Py).map(res => res.json()).subscribe( valore => {console.log(valore)})
  } // associaMezzi

  provaJson(){
    console.log('provola json')
    let strigaWeb2Py = 'https://bandigara.pythonanywhere.com/speeats/default/test.json'
    console.log(strigaWeb2Py)
    this.http.get(strigaWeb2Py).map(res => res.json()).subscribe( valore => {console.log(valore)})
  }

  tornaOrdini(){
     this._location.back();
  }




} // fine tutto



