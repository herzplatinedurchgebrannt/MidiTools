import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PirateService } from '../pirate.service';
import { PirateLocalService } from '../pirate-local.service';

@Component({
  selector: 'app-other',
  template: `

  <div class="container p-3 my-3 bg-dark text-white">
    <h1>LX MIDI TOOLS</h1>
    <p>Bass TAB Creator. Midi Drum Converter.</p>
  </div>

  <hr>

  <div class="row">
    <div class="col-sm-3"> 
      <button type="button" class="btn btn-outline-secondary" (click)="angToElec()">MIDI Write</button>
    </div>
  </div>
  
  <hr>



  <!--
  <mat-button-toggle-group>
    <mat-button-toggle *ngFor="let tool of testList">
      <button #tool (click)="toggle(tool)" class="testclass" id="tool"> Kick </button>
    </mat-button-toggle>
  </mat-button-toggle-group>

  <hr>

  <mat-button-toggle-group>
  <mat-button-toggle *ngFor="let tool of testList">
      <button (click)="toggle3($event)" class="snare" id="{{tool}}"></button>
  </mat-button-toggle>
  </mat-button-toggle-group>

  <button (click)="toggle3($event)" class="kick" id="btn1"></button>
  
  -->
  
  <hr>  
  <!--
  <div>
  <button 
  *ngFor="let element of kickArray; let i = index"
  (click) = "toggle3($event)" class = "{{ element.class }}"
  id="{{ element.id }}"
  
  > 
  Kick
{{ element.id }} - (Index: {{ i }})
  
  </button>
  </div>
  -->
  



<!-- Hier spielt die Musik! -->

  <div *ngFor="let instrument of sequencerArray; let u = index"> 
  <div>
    <button 
      *ngFor="let step of instrument[0]; let i = index"
      (click) = "setStep($event)" class = "{{ step.class }}" 
      id="{{ step.id }}"> 
 
      {{ step.id +1 }}
      <!--{{ step.id }} - (Index: {{ i }})-->
    </button>
  </div>
  </div>






  
<!--
  <div>
    <button 
      *ngFor="let bu of sequencerArray[1][0]; let e = index"
      (click) = "toggle3($event)" class = "{{ bu.class }}"
      id="{{ bu.id }}"
      >
      Kick
      {{ bu.id }} - (Index: {{ e }})
    </button>
  </div>
  
  <button #btn1 (click)="toggle(btn1)" class="someclass" id="btn1">Button 1</button>
  <button #btn2 (click)="toggle(btn2)" class="someclass" id="btn2">Button 2</button>
  -->
  `,
  styles: [ '.button { background-color: #4CAF50; /* Green */border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; ont-size: 16px;}',
            '.kick { }'
  ]
})
export class OtherComponent implements OnInit {

  private instruments = ["kick","snare","hihat","crash","tom_lo","tom_hi"];
  private sequencerArray = new Array();
  buttonValue: string;
  
  
  constructor(private pirateService: PirateService) { 
    this.addList(this.instruments);
  }

  
  setStep(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    console.log(button.id);
    console.log(button.className);
    if (parseInt(button.id) == 4){
      alert("4!")
    }
 }

  toggle(button) {
    this.buttonValue = button.id;
    console.log(this.buttonValue);
  }

  addList(instruments: string [])
  {
    instruments.forEach(element => {
      var innerArray = new Array();

      for (let i = 0; i < 16; i++){

        innerArray[i] = new Object();
        innerArray[i].id = i;
        innerArray[i].class = element;
        innerArray[i].click = this.toggle(i); 
      }
      this.sequencerArray.push([innerArray]);
    });

    console.log("---------")
    console.log(this.sequencerArray[0])
    console.log(this.sequencerArray[1])
    console.log(this.sequencerArray[0][0])
  }

  /*
  toggle2(event: Event): void {
    let elementId: string = (event.target as Element).id;
    
}

  getButtonId(event: Event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
  }*/





  ngOnInit(): void {
  }


}
