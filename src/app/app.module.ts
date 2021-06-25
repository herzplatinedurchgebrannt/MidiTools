import { routing } from './app.routing';
import { HomeComponent } from './home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElectronService, NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PirateService } from './pirate.service';
import { PirateLocalService } from './pirate-local.service';
import { HeaderComponent } from './header.component';
import { MidiTabComponent } from './midi/midi-tab.component';
import { MidiComponent } from './midi/midi.component';
import { OtherComponent } from './midi/other.component';

const pirateFactory = (http: HttpClient, electron: ElectronService) => {
  //return !environment.desktop ? new PirateService(http) : new PirateLocalService(electron);
  return new PirateLocalService(electron);
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MidiTabComponent,
    MidiComponent,
    HomeComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxElectronModule,
    routing
  ],
  providers: [
    { provide: PirateService, useFactory: pirateFactory, deps: [HttpClient, ElectronService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
