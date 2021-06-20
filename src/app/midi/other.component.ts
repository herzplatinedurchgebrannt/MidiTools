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

  <div *ngFor="let instrument of buttonArray; let u = index"> 
  <div>
    <button 
      *ngFor="let step of instrument; let i = index" [style.background-color]="buttonArray[u][i].color"
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
            '.kick { }',
            '.green {background-color: green;}',
            '.red { background-color: red; }'
  ]
})
export class OtherComponent implements OnInit {

  private instruments = ["kick","snare","hihat","crash","tom_lo","tom_hi"];
  private buttonArray = new Array();
  private sequencerArray = new Array();

  buttonValue: string;

  toggle5 = true;
  status = 'Enable'; 
  
  constructor(private pirateService: PirateService) { 
    this.addList(this.instruments);
  }

  // build button + sequencer arrays
  addList(instruments: string [])
  {
    for (let j = 0; j < instruments.length; j++ )
    {
      var buttonSubArray = new Array();
      var sequencerSubArray = new Array();
  
      for (let i = 0; i < 16; i++)
      {
        buttonSubArray[i] = new Object();
        buttonSubArray[i].id = i;
        buttonSubArray[i].class = instruments[j];
        buttonSubArray[i].click = this.toggle(i); 
        buttonSubArray[i].stepActive = false;
        buttonSubArray[i].color = "blue";

        // 0 means no volume == false, sequencerArray saves dynamic velocity
        sequencerSubArray.push(0);
      }
      this.buttonArray[j] = buttonSubArray;
      this.sequencerArray[j] = sequencerSubArray;
    }
    console.log(this.sequencerArray);
  }
  
  setStep(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    
    //console.log(button.id);
    //console.log(button.className);

    let row: number;
    row = this.instruments.indexOf(button.className)

    if (this.buttonArray[row][button.id].stepActive == true)
    {
      this.buttonArray[row][button.id].stepActive = false;
      this.buttonArray[row][button.id].color = "green";
      this.sequencerArray[row][button.id] = 0;
    }
    else 
    {
      this.buttonArray[row][button.id].stepActive = true;
      this.buttonArray[row][button.id].color = "black";
      this.sequencerArray[row][button.id] = 127;
    }

    console.log(this.sequencerArray);

    /*
    console.log("-----")
    console.log(this.sequencerArray[row][0])
    */


    this.toggle5 = !this.toggle5;
    this.status = this.toggle5 ? 'Enable' : 'Disable';
 }

  toggle(button) {
    this.buttonValue = button.id;
    console.log(this.buttonValue);
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
