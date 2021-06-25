import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PirateService } from '../pirate.service';
import { PirateLocalService } from '../pirate-local.service';
import { Howl } from 'howler';


@Component({
  selector: 'app-other',
  template: `

<div class="container p-3 my-3 bg-dark text-white">
  <h1>LX MIDI TOOLS</h1>
  <p>Bass TAB Creator. Midi Drum Converter. Drum Sequencer</p>
</div>

<hr>

<div class="container shadow min-vh-50 py-2">
  <div class="row">
    <div class="col"> 
      <button type="button" class="btn btn-outline-secondary" (click)="startSequencer()">Play</button>
      <button type="button" class="btn btn-outline-secondary" (click)="stopStuff()">Stop</button>
    </div>
</div>

<div class="row">
    <div class="col">  
      <label for="inputsm"></label>
      <input class="form-control" id="inputdefault" type="number" min="50" max="500" #tem value="500">
    </div>
    <div class="col">  
    <form>
      <select name="drumkit" class="custom-select-sm" #kit>
        <option value="rock">Rock Drumkit</option>
        <option value="electro">Electronic</option>
      </select>
    </form>
  </div>
  </div>
</div>

<hr>

<div class="container">
  <div *ngFor="let instrument of buttonArray; let u = index"> 
  <div>
    <label class="note"> {{ instrumentsMidi[u] }} C3</label>
    <button 
      *ngFor="let step of instrument; let i = index" [style.background-color]="buttonArray[u][i].color"
      (click) = "setStep($event)" class = "{{ step.class }}" 
      id="{{ step.id }}"> 
      {{ step.id +1 }}
      <!--{{ step.id }} - (Index: {{ i }})-->
    </button>
    <label class="note"> {{ instruments[u] }}</label>
  </div>
  </div>
</div>


<div class="container shadow min-vh-50 py-2">
  <div class="row">
      <div class="col">
          <button class="btn btn-outline-secondary" (click)="clearPattern()">
              Clear
          </button>
          <button class="btn btn-outline-secondary" (click)="loadPattern()">
              Load
          </button>
          <button class="btn btn-outline-secondary" (click)="changeTempo()">
              Save
          </button>
          <button type="button" class="btn btn-outline-secondary" (click)="stopStuff()">Export</button>
      </div>
  </div>
</div>


  `,
  styles: [ '.button { background-color: #4CAF50; /* Green */border: none; color: red; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; ont-size: 16px;}',
            '.kick { }',
            '.green {background-color: green;}',
            '.red { background-color: red; }',
            'label.note { background-color: grey; width: 50px; margin-right: 0.2em; text-align: center; font-size: small; color:white; margin-left: 0.2em}',
            'button.btn btn-outline-secondary {margin-right: 0.2em; }'

  ]
})

export class OtherComponent implements OnInit {

  @ViewChild ("tem") tempo; 
  @ViewChild ("i") input; 

  private instruments = ["kick","snare","hihat","crash","tom_lo","tom_hi"];
  private instrumentsMidi = [60, 62, 66, 68, 72, 71];
  private buttonArray = new Array();
  private sequencerArray = new Array();

  private pattern1 = [[127,0,0,0,127,0,0,0,127,0,0,0,127,0,0,0],
                      [0,0,127,0,0,0,127,0,0,0,127,0,0,0,127,0],
                      [0,0,127,0,127,0,127,0,127,0,127,0,127,0,127,0],
                      [127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

  private pattern0 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];


  loadPattern(){
    this.sequencerArray = this.pattern1;
  }

  clearPattern(){
    //this.addList(this.instruments);
    this.sequencerArray = this.pattern0;
  }

  counter: number = 0;
  interval: number;
  isPlaying: boolean = false;

  soundKick = new Howl({ src: ['assets/drums/kick.wav']});  
  soundSnare = new Howl({ src: ['assets/drums/snare.wav'], volume: 0.7});
  soundHatCl = new Howl({ src: ['assets/drums/hihat_cl.wav'], volume: 0.2});
  soundHatHaOp = new Howl({ src: ['assets/drums/hihat_ho.wav'], volume: 0.2});
  soundTomLo = new Howl({ src: ['assets/drums/tom_lo.wav'], volume: 0.3});
  soundTomHi = new Howl({ src: ['assets/drums/tom_hi.wav'], volume: 0.3});
  soundCrashLe = new Howl({ src: ['assets/drums/crash_le.wav'], volume: 0.5});
  soundCrashRi = new Howl({ src: ['assets/drums/crash_ri.wav'], volume: 0.5});

  buttonValue: string;

  toggle5 = true;
  status = 'Enable'; 
  
  constructor ( private pirateService: PirateService ) 
  { 
    this.addList(this.instruments);
    this.interval = 200;
  }

  changeTempo(){
    this.interval = this.tempo.nativeElement.value;
    console.log(this.interval);
  }

  // build button + sequencer arrays
  addList(instruments: string [])
  {
    for (let j = 0; j < instruments.length; j++)
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
        buttonSubArray[i].color = "white";

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
      this.sequencerArray[row][button.id] = 0;
      this.buttonArray[row][button.id].stepActive = false;
      this.buttonArray[row][button.id].color = "white";
    }
    else 
    {
      this.sequencerArray[row][button.id] = 127;
      this.buttonArray[row][button.id].stepActive = true;
      this.buttonArray[row][button.id].color = "grey";
    }



    this.toggle5 = !this.toggle5;
    this.status = this.toggle5 ? 'Enable' : 'Disable';


    // delete next line!!
    //this.sequencerArray = this.pattern1;

    //console.log(this.sequencerArray);

 }

  stopStuff(){
    clearInterval(this.timer);
    //console.log(this.tempo.nativeElement.value);
  }


  timer: any;

  startSequencer()
  {
    //console.log("1 "+this.isPlaying);
    this.isPlaying = true;
    this.counter = 0;


    

    this.timer = setInterval(() => {
        if (this.isPlaying == true)
          {

            for (let i = 0; i < this.sequencerArray.length; i++){
              //console.log(i)

              if (this.counter == 0)
              {
                if (this.sequencerArray[i][this.sequencerArray.length-1] == 127)
                {
                  this.buttonArray[i][this.sequencerArray[i].length-1].color = "grey";
                }
                else
                {
                  this.buttonArray[i][this.sequencerArray[i].length-1].color = "white";
                }
              }
              else if (this.counter != 0)
              {
                if (this.sequencerArray[i][this.counter-1] == 127)
                {
                  this.buttonArray[i][this.counter-1].color = "grey";
                }
                else
                {
                  this.buttonArray[i][this.counter-1].color = "white";
                }
              }
  
              if (this.sequencerArray[i][this.counter] == 127)
              {
                this.buttonArray[i][this.counter].color = "red";
                switch (i) {
                  case 0:
                    this.soundKick.play();
                    break;
                  case 1:
                    this.soundSnare.play();
                    break;        
                  case 2:
                    this.soundHatCl.play();
                  break;
                  case 3:
                    this.soundHatHaOp.play();
                  break;
                  case 4:
                    this.soundTomLo.play();
                  break;
                  case 5:
                    this.soundTomHi.play();
                  break;
                  case 6:
                    this.soundCrashLe.play();
                  break;
                
                  default:
                    break;
                }
              }
              else
              {
                this.buttonArray[i][this.counter].color = "blue";
              }

            }

            console.log(this.pattern1);
            this.counter += 1;

            if (this.counter >= this.sequencerArray[0].length){
              this.counter = 0;
            }
        }
      }, 
    this.interval
    );
  }

  playAudio(){
    //console.log("Playing Sound");
    let audio = new Audio();
    //Can externalize the variables
    audio.src = "./../../src/assets/kick.wav";
    audio.load();
    audio.play();
  }

  toggle(button) {
    this.buttonValue = button.id;
   // console.log(this.buttonValue);
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
