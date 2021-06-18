import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PirateService } from '../pirate.service';
import { PirateLocalService } from '../pirate-local.service';

@Component({
  selector: 'app-midi-converter',
  template: `
  <section>
  <div class="midis">
    <div>
      <button type="button" class="btn btn-outline-secondary" (click)="midiRead()">Convert Drums</button>
    </div>
  </div>
  </section>
  `,
  styles: [
    'div { padding: 5px; align-items: center; display: flex; justify-content: center;}'
    
  ]
})
export class MidiConverterComponent implements OnInit {

  constructor(private pirateService: PirateService) { }

  ngOnInit(): void {
  }

  midiRead(name: string ="Midi Read") {

    //console.log(this.supported);
    console.log("hallo");
    this.pirateService.midiRead(name);


  }

}
