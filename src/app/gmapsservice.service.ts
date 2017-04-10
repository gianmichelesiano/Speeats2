import { Injectable, NgZone } from '@angular/core';

import {Http, Response, Jsonp} from "@angular/http";  
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';




@Injectable()
export class GeocodingService{ 
    http:any
    constructor(http: Http, private _jsonp: Jsonp) {
        this.http = http
    }

  getCoordinate(indirizzo){
    indirizzo = 'via roma 45 Sarno(SA) Italia '
    console.log(indirizzo)
    let urlStrinf = 'https://maps.googleapis.com/maps/api/geocode/json?address='+indirizzo+'&key=AIzaSyDwnc0CvQPm4ypfXwxIFRTN1bcP1SYhn2w'
    return this.http.get(urlStrinf).map(res => res.json())
  }

  getDirectionWaypoints(origine,destinazione,waypoints){
    //let urlTragitto = 'https://maps.googleapis.com/maps/api/directions/json?origin='+origine+'&destination='+destinazione+'&waypoints=optimize:true'+waypoints+'&key=AIzaSyDwnc0CvQPm4ypfXwxIFRTN1bcP1SYhn2w'
    let urlTragitto = 'https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyDwnc0CvQPm4ypfXwxIFRTN1bcP1SYhn2w'
    console.log("urlTragitto")
    console.log(urlTragitto)
    return this.http.get(urlTragitto).map(res => res.json())

    }


}