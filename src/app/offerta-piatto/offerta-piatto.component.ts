import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';
import { DatepickerModule as yourModelDate } from 'angular2-material-datepicker'

@Component({
  selector: 'app-offerta-piatto',
  templateUrl: './offerta-piatto.component.html',
  styleUrls: ['./offerta-piatto.component.scss']
})
export class OffertaPiattoComponent implements OnInit {

  public idPiatto
  public idRistorante
  piatto: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { }

  ngOnInit() {

  	  	this.idPiatto = this.route.snapshot.params['id'];
   		  this.idRistorante = this.route.snapshot.params['id2'];
        this.piatto = this.af.database.object('/menu/'+this.idPiatto);
  }
 
  inserisciOfferta(prezzoOfferta, dataScadenza){
  	console.log(prezzoOfferta)
  	console.log(dataScadenza)
    this.piatto.update({prezzoOfferta:prezzoOfferta, dataScadenza:dataScadenza, inOfferta:true})
    this.router.navigate(['/menuRistorante', this.idRistorante]);
  }

  tornaAlPiatto(){
    //console.log('macmsc')
    this.router.navigate(['/menuRistorante', this.idRistorante]);
    
  }

}
