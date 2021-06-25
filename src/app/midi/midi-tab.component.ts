import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PirateService } from '../pirate.service';
import { PirateLocalService } from '../pirate-local.service';

@Component({
  selector: 'app-midi-tab',
  template: `

  <div class="row">
    <div class="col-sm-3"> 
      <input type="text" #i value="Songname">
    </div>
    <div class="col-sm-3">  
      <form>
        <select name="tuning" class="custom-select-sm" #tun>
          <option value="standard" >E-Standard</option>
          <option value="dropped">D-Dropped</option>
        </select>
      </form>
    </div>
    <div class="col-sm-3">  
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" #sort checked (change)="function1($event)">
        <label class="
        form-check-label" for="flexCheckChecked">
           Sort pattern
        </label>
      </div>
    </div>
  </div>

  <div class="form-group">
  <label for="comment"></label>
  <pre>
    <textarea class="form-control" rows="17" cols="70" id="comment" #ausgabe></textarea>
  </pre>
  </div>  

  <section>
  <div class="midis">
    <div>
      <button type="button" class="btn btn-outline-secondary" (click)="tabWrite()">Create Bass TAB</button>
    </div>
    <div>
      <button type="button" class="btn btn-outline-secondary" (click)="readTab()">Open file in editor</button>
    </div>
 </div>
</section>




  `,
  styles: [
    'div { padding: 5px; align-items: center; display: flex; justify-content: center;}',
    'textarea { background-color: darkgray; background-image: linear-gradient(hsl(190,10%,98%), hsl(190,10%,94%)); padding: 1ex; font-size: 0.75em; box-sizing: border-box; color: black}'
  ]
})
export class MidiTabComponent implements OnInit {
  tabContent: string;
  sortPattern = true;

  @ViewChild ("i") input; 
  @ViewChild ("tun") tuner; 
  @ViewChild ("ausgabe") ausgabe; 
  @ViewChild('sort') sort: ElementRef;

  constructor(private pirateService: PirateService) { }

  ngOnInit(): void {
  }


  tabWrite(name: string ="tab Write", tuning: string = "dropped", sortPattern: boolean = this.sortPattern) {
    console.log(sortPattern);
    
    //console.log(this.supported);
    this.pirateService.tabWrite(this.input.nativeElement.value,this.tuner.nativeElement.value, sortPattern);
    //this.readTab();
  }

  public async readTab() {
    this.tabContent = await this.pirateService.readTab();
    this.ausgabe.nativeElement.value = this.tabContent;
    this.sort.nativeElement = true;
  }
}
