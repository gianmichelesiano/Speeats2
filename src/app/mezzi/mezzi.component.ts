import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-mezzi',
  templateUrl: './mezzi.component.html',
  styleUrls: ['./mezzi.component.scss']
})
export class MezziComponent implements OnInit {
	
  lat: number = 47.40191;
  lng: number = 8.44284;

  listaMezziOccupati: Observable<any[]>;


  mezzi: FirebaseListObservable<any>;
  mezziOccupati: FirebaseListObservable<any>;
  constructor(public af: AngularFire,  private router: Router ) { 
    
  this.mezzi = af.database.list('/mezzi')
         

  this.mezziOccupati = af.database.list('/mezzi', 
         { query: { orderByChild: 'disponibile', equalTo: false}}) 

  this.listaMezziOccupati = this.mezziOccupati
        .map(posts => {
            posts.map(p => {
                p.listaPosizioni = af.database.list('/tracciamento', 
                           { query: { orderByChild: 'idGuidatore', equalTo: p.idUser, limitToLast:1}})
                           .map(arr => arr[0])
               
            });
            console.log("posts")
            console.log(posts)
            return posts;

   });

   this.listaMezziOccupati.subscribe(res => {
     console.log(res)

   })

  }

  ngOnInit() {
  }

  disponibile(id, disponibile){
     disponibile = !disponibile
     let mezzo = this.af.database.object('/mezzi/'+id)
     mezzo.update({ disponibile: disponibile})
  }

  getPositionLat(){
    let baseLat = 47.40191
    let randomNumberLat = (Math.random()-0.5)/25;
    return baseLat+randomNumberLat
  }

  getPositionLng(){
    let baseLng =  8.44284
    let randomNumberLng = (Math.random()-0.5)/25;
    return baseLng+randomNumberLng
  }

   aggiornaPosizione(id){
     let mezzo = this.af.database.object('/mezzi/'+id)
     mezzo.update({ lat: this.getPositionLat(), lng:this.getPositionLng()})
  }

  modificaMezzo(id){
     this.router.navigate(['/modificaMezzo', id]);
  }

  nuovoMezzo(){
     this.router.navigate(['/nuovoMezzo']);
  }

  consegneMezzo(id){
    this.router.navigate(['/consegneMezzo', id]);
  }

}
