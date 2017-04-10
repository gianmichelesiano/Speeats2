import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-modifica-piatto',
  templateUrl: './modifica-piatto.component.html',
  styleUrls: ['./modifica-piatto.component.scss']
})
export class ModificaPiattoComponent implements OnInit {

  public idPiatto
  public idRistorante
  piatto: FirebaseObjectObservable<any>;
  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { }

  ngOnInit() {

  	    this.idPiatto = this.route.snapshot.params['id'];
   		  this.idRistorante = this.route.snapshot.params['id2'];
        this.piatto = this.af.database.object('/menu/'+this.idPiatto);

  }

  updateItem( nomePiatto: string, tipologiaPiatto: string , ricetta: string, prezzo: string) {
    this.piatto.update({ nomePiatto: nomePiatto, tipologiaPiatto:tipologiaPiatto,  ricetta: ricetta, prezzo: prezzo});
    this.router.navigate(['/menuRistorante', this.idRistorante]);
  }



}


