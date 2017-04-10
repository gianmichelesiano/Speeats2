import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker'

import { AppComponent, Home, appRoutes } from './app.component'; 
import { MdlModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { ThemeDemo } from './theme/theme.component';
import { BadgeDemo } from './badge/badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RistorantiComponent } from './ristoranti/ristoranti.component';
import { NuovoRistoranteComponent } from './nuovo-ristorante/nuovo-ristorante.component';
import { DettaglioRistoranteComponent } from './dettaglio-ristorante/dettaglio-ristorante.component';
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
import { LogisticaComponent } from './logistica/logistica.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';

import { PrismDirective } from './prism/prism.component';
import { Http} from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader  } from 'ng2-translate/ng2-translate';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {
  MdlDialogService,
  MdlDialogReference
} from '../../lib/components/dialog/index';
import { LogoutComponent } from './logout/logout.component';
import { DatiPersonaliComponent } from './dati-personali/dati-personali.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { ConsegneComponent } from './consegne/consegne.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';
import { MezziComponent } from './mezzi/mezzi.component';
import { NuovoMezzoComponent } from './nuovo-mezzo/nuovo-mezzo.component';
import { ModificaMezzoComponent } from './modifica-mezzo/modifica-mezzo.component';
import { DettaglioOrdineComponent } from './dettaglio-ordine/dettaglio-ordine.component';
import { OrdiniRistoranteComponent } from './ordini-ristorante/ordini-ristorante.component';
import { OrdineCompletoComponent } from './ordine-completo/ordine-completo.component';
import { ConsegneMezzoComponent } from './consegne-mezzo/consegne-mezzo.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

export const firebaseConfig = {
  apiKey: 'AIzaSyAD1ZodtGDUmPIZUI7e_leAERDjh80jNKc',
  authDomain: 'speeats.firebaseapp.com',
  databaseURL: 'https://speeats.firebaseio.com',
  storageBucket: 'speeats.appspot.com',
  messagingSenderId: '955979856036'
};

@NgModule({
  declarations: [
    AppComponent,
    Home,
    ThemeDemo,
    BadgeDemo,
    RistorantiComponent,
    NuovoRistoranteComponent,
    DettaglioRistoranteComponent,
    ModificaRistoranteComponent,
    MenuRistoranteComponent,
    ComandeRistoranteComponent,
    OfferteRistoranteComponent,
    NuovoPiattoComponent,
    DettaglioPiattoComponent,
    ModificaPiattoComponent,
    OffertaPiattoComponent,
    OfferteComponent,
    ClientiComponent,
    LogisticaComponent,
    ImpostazioniComponent,
    PrismDirective,
    LoginComponent,
    LogoutComponent,
    DatiPersonaliComponent,
    OrdiniComponent,
    ConsegneComponent,
    DettaglioClienteComponent,
    MezziComponent,
    NuovoMezzoComponent,
    ModificaMezzoComponent,
    DettaglioOrdineComponent,
    OrdiniRistoranteComponent,
    OrdineCompletoComponent,
    ConsegneMezzoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    MdlSelectModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DatepickerModule,
    MdlSelectModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAD1ZodtGDUmPIZUI7e_leAERDjh80jNKc'
    }),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

