import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import * as fs from 'fs';
import { Midi } from '@tonejs/midi'
import {inputById, MIDI_INPUT, MIDI_OUTPUT, outputByName} from '@ng-web-apis/midi';

class MidiFile 
{
  path: string;
  pathMidi: string;
  pathTab: string;
}

var test: MidiFile = new MidiFile();
var openFile = false;

class Pattern
{
  name: string;
  id: number;
  tuning: string[];

  notesStringG: String;
  notesStringD: String;
  notesStringA: String;
  notesStringE: String;

  pattern: string;

  patternCount: number;

  monophonic: boolean;

  constructor(id:number)
  {
    this.id = id;
  }
  buildPattern /*(stringE: string, stringA: string, stringD: string, stringG: string)*/() {

    this.pattern = this.notesStringG + "\r\n" + this.notesStringD + "\r\n" + this.notesStringA + "\r\n" + this.notesStringE;
    
  }

  
}


//import log from 'electron-log';
//log.info(`${app.name} ${app.getVersion()}`);

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});
//var test = new MidiFile();


function sendMiddleC( midiAccess, portID ) {
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var output = midiAccess.outputs.get(portID);
  output.send( noteOnMessage );  //omitting the timestamp means send immediately.
  output.send( [0x80, 60, 0x40], window.performance.now() + 1000.0 ); // Inlined array creation- note off, middle C,  
                                                                      // release velocity = 64, timestamp = now + 1000ms.
}


// Electron -> Angular
ipcMain.handle('getPirates', () => {
  /*fs.appendFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    //console.log('Saved!');
  });*/
  const result = fs.readFileSync(__dirname + '/assets/pirates.json');
  return JSON.parse(result.toString());
});

// Angular -> Electron
ipcMain.on('selectPirate', async (event: Electron.IpcMainEvent, name: string) => {
    await dialog.showMessageBox({ message: 'You selected: ' + name });
  //  console.log("jaaa");
    event.returnValue = true;
});


// Electron -> Angular
ipcMain.handle('readTab', async () => {

  var result: any;
  console.log("lalala" + openFile)

  console.log(test)
  if (openFile == true){
    result = fs.readFileSync(test.pathTab,'utf8');
    openFile = false;
    console.log("if")
  }
  else {
    let oFile = dialog.showOpenDialog({ 
      properties: ['openFile','multiSelections'], 
      title:"Hier könnte Ihre Werbung stehen!" , 
      defaultPath: "./src/assets/", 
      buttonLabel: "Convert",
      filters: [ { name: 'Tab', extensions: ['txt'] }]});
  
    let filePath:string[] = (await oFile).filePaths;
  
  
    result = fs.readFileSync(filePath[0],'utf8');
    console.log("else")
  }


  return result;
});





ipcMain.on('angToElec', async (event: Electron.IpcMainEvent, name: string) => {

      // create a new midi file
    var midi = new Midi()
    // add a track
    const track = midi.addTrack()
    track.addNote({
      midi : 70,
      time : 0,
      duration: 0.7
    })
    .addNote({
      name : 'D5',
      time : 0,
      duration: 0.8
    })
    .addCC({
      number : 64,
      value : 127,
      time : 0.2
    })
  
  // write the output
  fs.writeFileSync("output3.mid", new Buffer(midi.toArray()))

  //await dialog.showMessageBox({ message: 'You selected: ' + name });
  console.log("Midi File written 2!");
  event.returnValue = true;
});







ipcMain.on('midiRead', async (event: Electron.IpcMainEvent, name: string) => {

  // File Dialog
  let oFile = dialog.showOpenDialog({ 
    properties: ['openFile','multiSelections'], 
    title:"Hier könnte Ihre Werbung stehen!" , 
    defaultPath: "./src/assets/", 
    buttonLabel: "Convert",
    filters: [ { name: 'Midi', extensions: ['mid'] }]});
    
  // File path -> ist ein Array, auch wenn nur eine Datei selektiert ist
  let filePath:string[] = (await oFile).filePaths;
    
  // Pfad zu JSON Datei
  const rawdata = fs.readFileSync('./src/assets/converter.json','utf8');
  let converterList = JSON.parse(rawdata);
    
  /*
  const noteReplace = [   [60,70,"Test1"],
                          [64,74,"Test2"],
                          [67,77,"Test3"],
                          [36,6,"Kick"],
                          [38,12,"Snare"],
                          [46,26,"HiHatOpen"],
                          [49,45,"CrashLeft"],
                          [57,47,"CrashRight"],
                          [42,23,"HiHatClosed"],
                          [48,41,"TomLow"],
                          [50,38,"TomMiddle"],
                          [43,41,"TomFloor"]
                        ];*/


  // iterate selected files
  filePath.forEach(file => {
    
    // get file name
    let newName: string = file.replace(/^.*[\\\/]/, '');

    // get file path
    let path = file.replace(newName,"");

    // new file name
    newName = newName.replace(".mid","_mod.mid");
    
    let midiData = fs.readFileSync(file);
    let mFile = new Midi(midiData);
    let trackNotesNew = mFile.tracks[0].notes;

    // iterate midi notes
    trackNotesNew.forEach(note => {

      // iterate JSON midimap file
      converterList.SSD_2_GGD.forEach(midimap => {

        // check if midi notes are in midimap
        if (note.midi == midimap.original){
            note.midi = midimap.replace;
        }
      });
    });

    // write new midi file
    fs.writeFileSync(path + newName, new Buffer(mFile.toArray()));
    console.log(newName + ": file written")

     newName = "";

  });








  //////////////////////////////////

  // zeigt alle Presets an
  var outputArray = [];  
  for (let element in converterList) {  
    outputArray.push({  
        preset: element,   
    });  
  }  
  //console.log(outputArray)  

  ////////////////////////////////////


  //let midiData = fs.readFileSync(filePath[0]);
  //const midiData2 = fs.readFileSync("./src/assets/piano.mid");
  //const mFile = new Midi(midiData);




/*

  let trackNotes = mFile.tracks[0].notes;

  let a: number = 0;
  let b: number = 0;

  trackNotes.forEach(element => {

    noteReplace.forEach(element => {

      if (noteReplace[b][0] == trackNotes[a].midi) {

        var newNote :number = Number(noteReplace[b][1]);
        
        trackNotes[a].midi = newNote;
        
        //console.log(trackNotes[a])
      }
      b += 1;
    });
  a += 1;
  b = 0;
  });

  let newName: string = mFile.name.replace(".mid", "");

  fs.writeFileSync(newName + "_mod.mid", new Buffer(mFile.toArray()))
  */

  event.returnValue = true;
});






ipcMain.on('tabWrite', async (event: Electron.IpcMainEvent, name: string, tuning: string, sortPattern: boolean) => {
  console.log(sortPattern);

  let songName = name;

  

  // notes on strings
  let stringG: string = "";
  let stringD: string = "";
  let stringA: string = "";
  let stringE: string = "";

  // tuning of bass guitar
  var tuneG: string;
  var tuneD: string;
  var tuneA: string;
  var tuneE: string;

  // string for tab header
  var writeTuning: string;

  // 36 = C1

  // arrays for tunings
  const scaleStandard: number [][] = [[55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
                                      [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
                                      [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
                                      [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]];
  
  
  const scaleDropped: number [][] = [[55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
                                     [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
                                     [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
                                     [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]];

  // choosen scale
  let scale: number[][];

  // tuning from angular part (drop down menu)
  switch (tuning) {
    case "standard":
      scale = scaleStandard;
      tuneG = "G -";
      tuneD = "D -";
      tuneA = "A -";
      tuneE = "E -";
      writeTuning = "Standard E [ E, A, D, G ]"
      break;

    case "dropped":
      scale = scaleDropped;
      tuneG = "G -";
      tuneD = "D -";
      tuneA = "A -";
      tuneE = "D -";
      writeTuning = "Dropped D [ D, A, D, G ]";
      break;
  
    default:

      break;
  }

  const notesG: number [] = scale[0]
  const notesD: number [] = scale[1];
  const notesA: number [] = scale[2];
  const notesE: number [] = scale[3]
  
  const newLine: string = "\r\n";
  const underscore: string = "-----------------------------------";

  let tabComplete = "";

  let oFile = dialog.showOpenDialog({ 
    properties: ['openFile','multiSelections'], 
    title:"Hier könnte Ihre Werbung stehen!" , 
    defaultPath: "./src/assets/", 
    buttonLabel: "Convert",
    filters: [ { name: 'Midi', extensions: ['mid'] }]});
    
  // File path -> ist ein Array, auch wenn nur eine Datei selektiert ist
  let filePath:string[] = (await oFile).filePaths;

  // iterate selected files
  filePath.forEach(file => {

    
    // get file name
    let fileName: string = file.replace(/^.*[\\\/]/, '');

    // get file path
    let filePath = file.replace(fileName,"");

    // create Midi file
    let midiData = fs.readFileSync(file);
    let mFile = new Midi(midiData);

    /*
    var midiFile = new MidiFile();
    midiFile.path = filePath;
    midiFile.pathMidi = filePath + fileName;*/

    test.path = filePath;
    test.pathMidi = filePath + fileName;


    // midi file data
    let midiBpm = mFile.header.tempos[0].bpm;
    let midiTicks = mFile.header.tempos[0].ticks;
    let midiTime = mFile.header.tempos[0].time;

    /*
    console.log(midiBpm);
    console.log(midiTicks);
    console.log(midiTime);
    */

    let trackNotesNew = mFile.tracks[0].notes;

    // iterate midi notes
    trackNotesNew.forEach(note => {
/*    
      console.log("_____")
      console.log(note.bars);*/
      

      /*
      console.log("note duration: "+note.duration);
      console.log("note duration ticks: "+note.durationTicks);
      console.log("note ticks: "+note.ticks);
      console.log("note time: "+note.time);

      console.log("note bars "+note.bars);*/
      var filler: string = "";
      var fillerNote: string ="";

      if (Number.isInteger(note.bars) /*&& note.bars > 1 */ && Number.isInteger(note.bars/2)){
        filler = "|---";
        fillerNote = "|-";
      }
      else {
        filler = "--";
        fillerNote = "";
      }

      if (notesE.slice(0,5).includes(note.midi))
      {
        //console.log("found");
        stringG += filler;
        stringD += filler;
        stringA += filler;
        stringE += fillerNote + notesE.indexOf(note.midi)+"-";
        //console.log(stringE);
      }
      else if (notesA.slice(0,5).includes(note.midi))
      {
        //console.log("found");
        stringG += filler;
        stringD += filler;
        stringA += fillerNote + notesA.indexOf(note.midi)+"-";
        stringE += filler;
        //console.log(stringA);
      }
      else if (notesD.slice(0,5).includes(note.midi))
      {
        //console.log("found");
        stringG += filler;
        stringD += fillerNote + notesD.indexOf(note.midi)+"-";
        stringA += filler;
        stringE += filler;
        //console.log(stringD);
      }
      else if (notesG.slice(0,11).includes(note.midi))
      {
        //console.log("found");
        stringG += fillerNote + notesG.indexOf(note.midi)+"-";
        stringD += filler;
        stringA += filler;
        stringE += filler;
        //console.log(stringG);
      }
      else
      {
        console.log("note not on Bass fretboard");
      }
      
      });

      const heute = new Date();

      // write the stream
      // header
      var stream = fs.createWriteStream(filePath+fileName.replace(".mid","_TAB.txt"));

      //midiFile.pathTab = filePath+fileName.replace(".mid","_TAB.txt");
      test.pathTab = filePath+fileName.replace(".mid","_TAB.txt");


      //console.log(midiFile);
    
      stream.write("");
    
      stream.write(newLine);
      stream.write("Song: "+ songName + newLine);
      stream.write("Data: "+ filePath+fileName + newLine);
      stream.write("Tuning: "+ writeTuning + newLine);
      stream.write("BPM: "+ midiBpm.toFixed(2) + newLine);
      stream.write(heute.toLocaleString("de-DE") + newLine + newLine);
      stream.write(underscore + newLine + newLine);

      //console.log(stringE.indexOf("|"));

      //var slicePos: number = stringE.indexOf("|");

      // collecting all "|" chars
      let findeTakt: number [] = [];
      for (let i = 0; i < stringE.length; i++) {
        if (stringE[i] == "|"){
          findeTakt.push(i);
        }
      }

      
      var patternArray = new Array();

      /*
      for (var i = 0; i < stringE.length; i++)
      {
        patternArray[i] = new Pattern(i.toString());

      }*/

      

      // writing the tab
      let savePattern: string [][] = [];
      let oldValue: number = 0;
      for (let i = 0; i < findeTakt.length; i++) {
        
        if (findeTakt[i] > 0){
          patternArray[i] = new Pattern(i);
          patternArray[i].tuning = tuning;

          if (sortPattern == false)
          {
            stream.write(tuneG + stringG.slice(0,findeTakt[i] - oldValue) + newLine);
            stream.write(tuneD + stringD.slice(0,findeTakt[i] - oldValue) + newLine);
            stream.write(tuneA + stringA.slice(0,findeTakt[i] - oldValue) + newLine);
            stream.write(tuneE + stringE.slice(0,findeTakt[i] - oldValue) + newLine + newLine);
          }

          patternArray[i].notesStringG = (stringG.slice(0,findeTakt[i] - oldValue));
          patternArray[i].notesStringD = (stringD.slice(0,findeTakt[i] - oldValue));
          patternArray[i].notesStringA = (stringA.slice(0,findeTakt[i] - oldValue));
          patternArray[i].notesStringE = (stringE.slice(0,findeTakt[i] - oldValue));

          patternArray[i].buildPattern();
          
          savePattern.push([stringG.slice(0,findeTakt[i] - oldValue),stringD.slice(0,findeTakt[i] - oldValue),stringA.slice(0,findeTakt[i] - oldValue),stringE.slice(0,findeTakt[i] - oldValue)]);
          
          stringG = stringG.slice(findeTakt[i] - oldValue);
          stringD = stringD.slice(findeTakt[i] - oldValue);
          stringA = stringA.slice(findeTakt[i] - oldValue);
          stringE = stringE.slice(findeTakt[i] - oldValue);
          
          oldValue = findeTakt[i];
        }
      }
      
      let countPattern: number = 0;
      
      var patternArraySort = new Array();
      let schreiben: boolean = false;
      let counter: number = 0;

      let next: number = 0;
      // last pattern of tab, no comparison possible
      let endTab: boolean = false;
      
      for (let i = 1; i < patternArray.length; i++)
      {
        next = i+1;
        if (next >= patternArray.length){
          endTab = true;
        }

        if (endTab == false) {
          if (patternArray[i].pattern == patternArray[next].pattern){
            //console.log("hit!")
            
            counter += 1;
            //schreiben = false;
          }
          else {
            
            schreiben = true;
            
          }
        }
        
        if ( schreiben == true || endTab == true ){
          
          // new array with multiple pattern, not used
          patternArraySort[i] = new Pattern(i);
          patternArraySort[i].pattern = patternArray[i].pattern;
          patternArraySort[i].patternCount = counter;

          if (sortPattern == true){
            // write sorted stream
            stream.write(counter+1 + "x" + newLine);
            stream.write(tuneG + patternArray[i].notesStringG + newLine);
            stream.write(tuneD + patternArray[i].notesStringD + newLine);
            stream.write(tuneA + patternArray[i].notesStringA + newLine);
            stream.write(tuneE + patternArray[i].notesStringE + newLine + newLine);
          }
          
          counter = 0;
          schreiben = false;
          openFile = true;
          
        }
        
        
      }

      /*

      stream.write("----- OLD ------" + newLine + newLine);*/
      
      
      /*
      for (let i = 0; i < patternArraySort.length; i++){
        stream.write(patternArraySort[i].patternCount + "x" + newLine);
        stream.write(patternArraySort[i].pattern + newLine);
      }*/


      
      // comparing the tab to find multiple patterns
      /*
      for (let i = 0; i < savePattern.length; i++)
      {
        if (i+1 < savePattern.length){
          if (savePattern[i].toString() == savePattern[i+1].toString())
          {
            countPattern += 1;
          }
          else
          {
            stream.write(countPattern+1 + "x" + newLine)
  
            savePattern[i].forEach(element => {
              stream.write(element + newLine);
            });
            stream.write(newLine);
            countPattern = 0;
          }
        }
        else
        {
          
        }
      }*/


      /*
      console.log(stringG.slice(0,slicePos));
      console.log(stringD.slice(0,slicePos));
      console.log(stringA.slice(0,slicePos));
      console.log(stringE.slice(0,slicePos));


      stream.write(stringG.slice(0,slicePos) + newLine);
      stream.write(stringD.slice(0,slicePos) + newLine);
      stream.write(stringA.slice(0,slicePos) + newLine);
      stream.write(stringE.slice(0,slicePos) + newLine + newLine);

      console.log("slice pos ist: " + slicePos);

      stringG = stringG.slice(slicePos);
      stringD = stringD.slice(slicePos);
      stringA = stringA.slice(slicePos);
      stringE = stringE.slice(slicePos);

      stringG = stringG.slice(1);
      stringD = stringD.slice(1);
      stringA = stringA.slice(1);
      stringE = stringE.slice(1);

      stringG = "G " + stringG;
      stringD = "D " + stringD;
      stringA = "A " + stringA;
      if (tuning == "dropped"){
        stringE = "D " + stringE;
      }
      else {
        stringE = "E " + stringE;
      }


      stream.write(stringG.slice(0,slicePos) + newLine);
      stream.write(stringD.slice(0,slicePos) + newLine);
      stream.write(stringA.slice(0,slicePos) + newLine);
      stream.write(stringE.slice(0,slicePos) + newLine + newLine);

      console.log("slice pos ist: " + slicePos);

      stringG = stringG.slice(slicePos);
      stringD = stringD.slice(slicePos);
      stringA = stringA.slice(slicePos);
      stringE = stringE.slice(slicePos);

      stringG = stringG.slice(1);
      stringD = stringD.slice(1);
      stringA = stringA.slice(1);
      stringE = stringE.slice(1);

      stringG = "G " + stringG;
      stringD = "D " + stringD;
      stringA = "A " + stringA;
      if (tuning == "dropped"){
        stringE = "D " + stringE;
      }
      else {
        stringE = "E " + stringE;
      }



      stream.write(stringG.slice(0,slicePos) + newLine);
      stream.write(stringD.slice(0,slicePos) + newLine);
      stream.write(stringA.slice(0,slicePos) + newLine);
      stream.write(stringE.slice(0,slicePos) + newLine + newLine);

      console.log("slice pos ist: " + slicePos);

      stringG = stringG.slice(slicePos);
      stringD = stringD.slice(slicePos);
      stringA = stringA.slice(slicePos);
      stringE = stringE.slice(slicePos);

      stringG = stringG.slice(1);
      stringD = stringD.slice(1);
      stringA = stringA.slice(1);
      stringE = stringE.slice(1);

      stringG = "G " + stringG;
      stringD = "D " + stringD;
      stringA = "A " + stringA;
      if (tuning == "dropped"){
        stringE = "D " + stringE;
      }
      else {
        stringE = "E " + stringE;
      }
*/





/*
      do
      {
        slicePos = stringE.indexOf("|");

        //console.log(slicePos);

        stream.write(stringG.slice(0,stringG.indexOf("|")) + newLine);
        stream.write(stringD.slice(0,stringD.indexOf("|")) + newLine);
        stream.write(stringA.slice(0,stringA.indexOf("|")) + newLine);
        stream.write(stringE.slice(0,stringE.indexOf("|")) + newLine + newLine);

        //console.log(stringE.slice(0,slicePos))

        
        stringG = stringG.slice(slicePos);
        stringD = stringD.slice(slicePos);
        stringA = stringA.slice(slicePos);
        stringE = stringE.slice(slicePos);

        stringG = "G " + stringG;
        stringD = "D " + stringD;
        stringA = "A " + stringA;
        if (tuning == "dropped"){
          stringE = "D " + stringE;
        }
        else {
          stringE = "E " + stringE;
        }

        /*
        stream.write(stringG.slice(0,35) + newLine);
        stream.write(stringD.slice(0,35) + newLine);
        stream.write(stringA.slice(0,35) + newLine);
        stream.write(stringE.slice(0,35) + newLine + newLine);

        stringG = stringG.slice(35);
        stringD = stringD.slice(35);
        stringA = stringA.slice(35);
        stringE = stringE.slice(35);

        stringG = "G " + stringG;
        stringD = "D " + stringD;
        stringA = "A " + stringA;
        if (tuning == "dropped"){
          stringE = "D " + stringE;
        }
        else {
          stringE = "E " + stringE;
        }*//*

        
      }

      //while (stringE.length > 35 && stringA.length > 35 && stringD.length > 35 && stringG.length > 35)
      while (stringE.length > 35 && stringA.length > 35 && stringD.length > 35 && stringG.length > 35)*/



/*
      stream.write(stringG + newLine);
      stream.write(stringD + newLine);
      stream.write(stringA + newLine);
      stream.write(stringE + newLine);*/
    
      stream.end();
    
      console.log("file written!");     

    });

    // write new midi file
    //fs.writeFileSync(path + newName, new Buffer(mFile.toArray()));
    //console.log(newName + ": file written")

     //newName = "";


  //tabComplete = tabComplete.concat(stringHeader,stringG);

  event.returnValue = true;
});
















/* Ab hier nur Schrott */



ipcMain.on('einTest', async (event: Electron.IpcMainEvent, name: string) => {
  await dialog.showMessageBox({message: name});
  alert("nööö");
  event.returnValue = true;
});




function nureintest(){
  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

ipcMain.handle('getIrgendwas', () => {
  return "fuck";
});



ipcMain.handle('electronMessage', () => {
  fs.appendFile('mynewfile4.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  console.log("Hier!!!");
  const result = fs.readFileSync(__dirname + '/assets/pirates.json');
  return JSON.parse(result.toString());
});


ipcMain.handle('electronMessage2', () => {
  fs.appendFile('mynewfile5.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  console.log("Hier!!!");
  const result = fs.readFileSync(__dirname + '/assets/pirates.json');
  return "fuck";
});


ipcMain.on('hallo', async (event: Electron.IpcMainEvent, name: string) => {
  fs.writeFile('mynewfile3.txt', name, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
alert("aha");
event.returnValue = true;
});



