import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import {Location} from '@angular/common';


@Component({
  selector: 'app-modifica-ristorante',
  templateUrl: './modifica-ristorante.component.html',
  styleUrls: ['./modifica-ristorante.component.scss']
  
})
export class ModificaRistoranteComponent implements OnInit {

  ristorante: FirebaseObjectObservable<any>;
  public id;
  constructor( private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { 
   
   		this.id = this.route.snapshot.params['id'];
   		this.ristorante = this.af.database.object('/ristoranti/'+this.id);
  }

  ngOnInit() {
  }

   updateItem(key: string, 
    nome: string, 
    tipologia: string, 
    indirizzo: string, 
    giorniApertura: string, 
    maxTempoConsegna: string, 
    costoConsegna: string, 
    ordineMin: string
    ) { 

   	//console.log(key, nome, tipologia, indirizzo, giorniApertura, maxTempoConsegna, costoConsegna,ordineMin)

    this.ristorante.update({ 
                              nome: nome, 
                              tipologia: tipologia, 
                              indirizzo: indirizzo, 
                              giorniApertura: giorniApertura,
                              maxTempoConsegna: maxTempoConsegna,
                              costoConsegna: costoConsegna,
                              ordineMin: ordineMin ,
                           })
    this.router.navigate(['/dettaglioRistorante', this.id]);

  }



}
