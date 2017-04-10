import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offerte-ristorante',
  templateUrl: './offerte-ristorante.component.html',
  styleUrls: ['./offerte-ristorante.component.scss']
})
export class OfferteRistoranteComponent implements OnInit {

  public idRistorante: string;
  piatto: FirebaseObjectObservable<any>;
  offerteList: FirebaseListObservable<any>;
  offertaPiatto: FirebaseListObservable<any>;

  offerteListFilter = [];

  constructor(public af: AngularFire, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
	  	this.idRistorante = this.route.snapshot.params['id'];
	  	this.offerteList = this.af.database.list('/menu/', { 
          preserveSnapshot: true,
	        query: { orderByChild: 'idRistorante', equalTo: this.idRistorante,}
	    })

      this.offerteList
        .subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            if (snapshot.val().inOfferta == true){
              this.offerteListFilter.push(snapshot.val())
            }
          });
          console.log("offerteListFilter")
          console.log(this.offerteListFilter)
       })

  }

  cancellaOfferta(key: string) {  
    this.piatto = this.af.database.object('/menu/'+this.idRistorante+'/'+key);  
    this.piatto.update({inOfferta:false});

    this.offertaPiatto = this.af.database.list('/offerte/'+key)
    this.offertaPiatto.remove()
  }

  tornaRistorante(){
    //console.log('macmsc')
    this.router.navigate(['/dettaglioRistorante', this.idRistorante]);
    
  }


}
