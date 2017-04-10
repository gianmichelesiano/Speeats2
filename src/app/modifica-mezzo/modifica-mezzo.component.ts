import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-modifica-mezzo',
  templateUrl: './modifica-mezzo.component.html',
  styleUrls: ['./modifica-mezzo.component.scss']
})
export class ModificaMezzoComponent implements OnInit {


  public idMezzo
  mezzo: FirebaseObjectObservable<any>;

  constructor(public af: AngularFire, private router: Router, private route: ActivatedRoute) {

	this.idMezzo = this.route.snapshot.params['id'];
	console.log(this.idMezzo)
	this.mezzo = this.af.database.object('/mezzi/'+this.idMezzo);

  }

  ngOnInit() {
  }

  salvaMezzo(key: string, nomeMezzo: string, tipologia: string , caricoMax: number, daConsegnare) {
    console.log(key,nomeMezzo,tipologia,caricoMax)
    this.mezzo.update({ nome: nomeMezzo, tipologia:tipologia,  caricoMax: caricoMax ,  daConsegnare: daConsegnare});
    this.router.navigate(['/mezzi']);
  }

    eliminaMezzo(){
    this.mezzo.remove()
    this.router.navigate(['/mezzi']);
  }

}
