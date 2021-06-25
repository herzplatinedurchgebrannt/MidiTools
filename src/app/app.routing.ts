import { OtherComponent } from './midi/other.component';
import { MidiTabComponent } from './midi/midi-tab.component';
import { MidiConverterComponent } from './midi/midi-converter.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";

const APP_ROUTES: Routes = [
{ path: "", component: MidiTabComponent },
{ path: "converter", component: MidiConverterComponent },
{ path: "tab", component: MidiTabComponent },
{ path: "other", component: OtherComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);