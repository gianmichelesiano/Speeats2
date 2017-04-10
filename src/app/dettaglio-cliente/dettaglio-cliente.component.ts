import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {

  id:string
  cliente: FirebaseObjectObservable<any>;
  constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire, private _location: Location) { 

     this.id = this.route.snapshot.params['id'];
     console.log('dett')
     console.log(this.id)

     this.cliente = this.af.database.object('/clienti/'+this.id+'/datiPersonali');

  }

  ngOnInit() {
  }

  backClicked() {
        this._location.back();
  }

}
