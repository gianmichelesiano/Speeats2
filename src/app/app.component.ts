import { Component } from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlLayoutComponent } from '../../lib/components';
import { AbstractDemoComponent } from './abstract-demo.component';
import { hostConfig } from './animations/flyInOutTrigger-animation';
import { flyInOutTrigger } from './animations/flyInOutTrigger-animation';

import { RistorantiComponent } from './ristoranti/ristoranti.component';
import { DettaglioRistoranteComponent } from './dettaglio-ristorante/dettaglio-ristorante.component';
import { ThemeDemo } from './theme/theme.component';
import { BadgeDemo } from './badge/badge.component';  
import { Title } from '@angular/platform-browser';
import { NuovoRistoranteComponent } from './nuovo-ristorante/nuovo-ristorante.component';
import { ModificaRistoranteComponent } from './modifica-ristorante/modifica-ristorante.component';
import { MenuRistoranteComponent } from './menu-ristorante/menu-ristorante.component';
import { ComandeRistoranteComponent } from './comande-ristorante/comande-ristorante.component';
import { OfferteRistoranteComponent } from './offerte-ristorante/offerte-ristorante.component';
import { NuovoPiattoComponent } from './nuovo-piatto/nuovo-piatto.component';
import { DettaglioPiattoComponent } from './dettaglio-piatto/dettaglio-piatto.component';
import { ModificaPiattoComponent } from './modifica-piatto/modifica-piatto.component';
import { OffertaPiattoComponent } from './offerta-piatto/offerta-piatto.component';
import { OfferteComponent } from './offerte/offerte.component';
import { ClientiComponent } from './clienti/clienti.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { ConsegneComponent } from './consegne/consegne.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';
import { MezziComponent } from './mezzi/mezzi.component';
import { NuovoMezzoComponent } from './nuovo-mezzo/nuovo-mezzo.component';
import { ModificaMezzoComponent } from './modifica-mezzo/modifica-mezzo.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DatiPersonaliComponent } from './dati-personali/dati-personali.component';
import { DettaglioOrdineComponent } from './dettaglio-ordine/dettaglio-ordine.component';
import { OrdiniRistoranteComponent } from './ordini-ristorante/ordini-ristorante.component';
import { OrdineCompletoComponent } from './ordine-completo/ordine-completo.component';
import { ConsegneMezzoComponent } from './consegne-mezzo/consegne-mezzo.component';




import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import {
  ActivatedRoute,
  Router, Routes
} from '@angular/router';


@Component({
  selector: 'home',
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
  templateUrl: 'home.html'
})

export class Home extends AbstractDemoComponent {
  public varivile


  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  //public barChartColors: any[] = [{ backgroundColor: ["#009688", "#FFCC80"] }]
  public barChartColors:Array<any> = [
    { // teil
      backgroundColor: 'rgba(0,150,136, 1)',
      borderColor: 'rgba(0,150,136, 1)',
      pointBackgroundColor: 'rgba(0,150,136, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,150,136, 1)'
    },
    { // aranvione 
      backgroundColor: 'rgba(255,204,128, 1)',
      borderColor: 'rgba(255,204,128, 1)',
      pointBackgroundColor: 'rgba(255,204,128, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,204,128, 1)'
    },
  ];
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Ordini'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Consegne'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public doughnutChartLabels:string[] = ['Da consegnare', 'Consegnati', 'Ordinati'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: any[] = [{ backgroundColor: ["#009688", "#FFCC80", "#F5F5F5"] }]

  //public doughnutChartColors

  public pieChartLabels:string[] = ['In offerta', 'Prezzo normale'];
  public pieChartData:number[] = [300, 500];
  public pieChartType:string = 'pie';
  public pieChartColors: any[] = [{ backgroundColor: ["#009688", "#FFCC80"] }]

  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio'];


  
  public lineChartType:string = 'line';
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(255, 109, 0, 0.3)',
      borderColor: 'rgba(255, 109, 0, 1)',
      pointBackgroundColor: 'rgba(255, 109, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 109, 0, 1)'
    },
    { // tail 
      backgroundColor: 'rgba(0, 150, 136, 0.2)',
      borderColor: 'rgba(0, 150, 136, 1)',
      pointBackgroundColor: 'rgba(0, 150, 136, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 150, 136, 1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];


  

  numRistoranti = 0
  numClienti = 0
  numOrdini = 0
  numConsegne = 0

  
  constructor(router: Router, route: ActivatedRoute, titleService: Title, public af: AngularFire) {
    super(router, route, titleService);
    
    

    this.af.auth.subscribe( (auth) => {
      if(auth == null) {
          console.log("Not Logged in.");
          router.navigate(['/login']);
        }
        else {
           this.varivile= 33
        }
    })

    //numero ristoranti
    let ristoranti  = af.database.list('/ristoranti', { preserveSnapshot: true });
    ristoranti.subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            this.numRistoranti ++
          });
    })

    //numero clienti
    let clienti  = af.database.list('/clienti', { preserveSnapshot: true });
    clienti.subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            this.numClienti ++
          });
    })

    //numero ordini
    let ordini  = af.database.list('/ordini', { preserveSnapshot: true });
    ordini.subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            this.numOrdini ++
          });
    })

    //numero ordini
    let consegne  = af.database.list('/consegne', { preserveSnapshot: true });
    consegne.subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            this.numConsegne ++
          });
    })

  } // end costruttore

} // end home



export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'theme', component: ThemeDemo, data: {title: 'Themes'} },
  { path: 'badge', component: BadgeDemo, data: {title: 'Badges'} },
  { path: 'ristoranti', component: RistorantiComponent, data: {title: 'Ristoranti'} },
  { path: 'offerte', component: OfferteComponent, data: {title: 'Offerte'} },
  { path: 'clienti', component: ClientiComponent, data: {title: 'Clienti'} },
  { path: 'ordini', component: OrdiniComponent, data: {title: 'Ordini'} },
  { path: 'consegne', component: ConsegneComponent, data: {title: 'Consegne'} },
  { path: 'impostazioni', component: ImpostazioniComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dati-personali', component: DatiPersonaliComponent},
  { path: 'mezzi', component: MezziComponent},
  { path: 'nuovoMezzo', component: NuovoMezzoComponent},
  { path: 'modificaMezzo/:id', component: ModificaMezzoComponent },
  { path: 'nuovoRistorante', component: NuovoRistoranteComponent},
  { path: 'dettaglioRistorante/:id', component: DettaglioRistoranteComponent },
  { path: 'mofidicaRistorante/:id', component: ModificaRistoranteComponent },
  { path: 'menuRistorante/:id', component: MenuRistoranteComponent },
  { path: 'ordiniRistorante/:id', component: OrdiniRistoranteComponent },
  { path: 'offerteRistorante/:id', component: OfferteRistoranteComponent },
  { path: 'nuovoPiatto/:id', component: NuovoPiattoComponent },
  { path: 'dettaglioPiatto/:id/:id2', component: DettaglioPiattoComponent },
  { path: 'mofidicaPiatto/:id/:id2', component: ModificaPiattoComponent },
  { path: 'offertaPiatto/:id/:id2', component: OffertaPiattoComponent },
  { path: 'dettaglioCliente/:id', component: DettaglioClienteComponent },
  { path: 'dettaglioOrdine/:id', component: DettaglioOrdineComponent },
  { path: 'ordineCompleto/:id', component: OrdineCompletoComponent },
  { path: 'consegneMezzo/:id', component: ConsegneMezzoComponent },
  
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public title = 'Speeat2';
  public nome  = "Nessun utente"
  public avatar = "assets/avatar/n.png" 
  datiPersonali: FirebaseObjectObservable<any>;

  constructor(router: Router, route: ActivatedRoute, titleService: Title, public af: AngularFire) {
    this.af.auth.subscribe( (auth) => {
      if(auth == null) {
          console.log("Not Logged in.");

        }
        else {

          console.log("loggato");
          this.datiPersonali = this.af.database.object('/datiPersonali/'+auth.uid);
          this.datiPersonali.subscribe( utente => {
            this.nome = utente.nome + ' '+ utente.cognome
            this.avatar = "assets/avatar/"+utente.sesso+".png"
          })

        }
    })
  }

  public componentSelected(mainLayout: MdlLayoutComponent) {
    mainLayout.closeDrawerOnSmallScreens();
  }
}
