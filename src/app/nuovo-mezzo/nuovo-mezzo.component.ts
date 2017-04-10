import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-nuovo-mezzo',
  templateUrl: './nuovo-mezzo.component.html',
  styleUrls: ['./nuovo-mezzo.component.scss']
})


export class NuovoMezzoComponent implements OnInit {
  

  public mezzoForm = this.fb.group({
    nome: ["", Validators.required],
    tipologia: ["", Validators.required],
    caricoMax: ["", Validators.required],
    daConsegnare: ["", Validators.required],
  });

  mezzi: FirebaseListObservable<any>;

  constructor(public fb: FormBuilder , public af: AngularFire,  private router: Router, private route: ActivatedRoute) { 
     this.mezzi = af.database.list('mezzi/');
  }

  ngOnInit() {
  }

  salvaMezzo(event){
 
  	let temp1 = this.mezzoForm.value
  	this.mezzi.push(temp1)
  	this.router.navigate(['/mezzi']);

  }



}
