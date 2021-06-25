import { ElementRef, ViewChild } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { PirateLocalService } from './pirate-local.service';
import { PirateService } from './pirate.service';
//import {MIDI_SUPPORT} from '@ng-web-apis/midi';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LX MIDI TOOLS';
  pirates: string[];
  eMessage: string[];
  eMessage2: string;
  irgendwas: string = "hallo";
  sum: number = 0;

 

  sortPattern = true;



  constructor(/*@Inject(MIDI_SUPPORT) readonly supported: boolean,*/ private pirateService: PirateService, private puService: PirateService, calc:PirateService) {

    this.sum = calc.add(1,2,3,4);
    this.function1;

  }



  function1(event: Event){/*
    console.log(event.target.checked);
    if ( event.target.checked == true){
      this.sortPattern = true;
    }
    else {
      this.sortPattern = false;
    }*/
    
  }


  ngOnInit() {
    this.getPirates();
    //this.readTab();

    
  }

  selectPirate(name: string) {
    this.pirateService.selectPirate(name);
  }

  angToElec(name: string ="String A2E") {
    this.pirateService.angToElec(name);
  }



  private async getPirates() {
    this.pirates = await this.pirateService.getPirates();
    console.log(this.pirates);
  
  }
  

  
  
  
  
  
  
  
  /* Ab hier nur Schrott */


  hallo(){
    //this.puService.einTest(name);
    alert("jooooo");

    this.electronMessage2("OK!");
  }
  
  private async electronMessage(){
    this.eMessage = await this.pirateService.electronMessage();
  }

  private async electronMessage2(message: string){
    await this.pirateService.electronMessage2(message);
  }

  alertMessage(){
    alert("funzt");
  }


}
