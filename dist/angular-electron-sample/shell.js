/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/electron/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/@tonejs/midi/dist/BinarySearch.js":
/*!******************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/BinarySearch.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Return the index of the element at or before the given property
 * @hidden
 */
function search(array, value, prop) {
    if (prop === void 0) { prop = "ticks"; }
    var beginning = 0;
    var len = array.length;
    var end = len;
    if (len > 0 && array[len - 1][prop] <= value) {
        return len - 1;
    }
    while (beginning < end) {
        // calculate the midpoint for roughly equal partition
        var midPoint = Math.floor(beginning + (end - beginning) / 2);
        var event_1 = array[midPoint];
        var nextEvent = array[midPoint + 1];
        if (event_1[prop] === value) {
            // choose the last one that has the same value
            for (var i = midPoint; i < array.length; i++) {
                var testEvent = array[i];
                if (testEvent[prop] === value) {
                    midPoint = i;
                }
            }
            return midPoint;
        }
        else if (event_1[prop] < value && nextEvent[prop] > value) {
            return midPoint;
        }
        else if (event_1[prop] > value) {
            // search lower
            end = midPoint;
        }
        else if (event_1[prop] < value) {
            // search upper
            beginning = midPoint + 1;
        }
    }
    return -1;
}
exports.search = search;
/**
 * Does a binary search to insert the note
 * in the correct spot in the array
 * @hidden
 */
function insert(array, event, prop) {
    if (prop === void 0) { prop = "ticks"; }
    if (array.length) {
        var index = search(array, event[prop], prop);
        array.splice(index + 1, 0, event);
    }
    else {
        array.push(event);
    }
}
exports.insert = insert;
//# sourceMappingURL=BinarySearch.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/ControlChange.js":
/*!*******************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/ControlChange.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A map of values to control change names
 * @hidden
 */
exports.controlChangeNames = {
    1: "modulationWheel",
    2: "breath",
    4: "footController",
    5: "portamentoTime",
    7: "volume",
    8: "balance",
    10: "pan",
    64: "sustain",
    65: "portamentoTime",
    66: "sostenuto",
    67: "softPedal",
    68: "legatoFootswitch",
    84: "portamentoControl",
};
/**
 * swap the keys and values
 * @hidden
 */
exports.controlChangeIds = Object.keys(exports.controlChangeNames).reduce(function (obj, key) {
    obj[exports.controlChangeNames[key]] = key;
    return obj;
}, {});
var privateHeaderMap = new WeakMap();
var privateCCNumberMap = new WeakMap();
/**
 * Represents a control change event
 */
var ControlChange = /** @class */ (function () {
    /**
     * @param event
     * @param header
     */
    function ControlChange(event, header) {
        privateHeaderMap.set(this, header);
        privateCCNumberMap.set(this, event.controllerType);
        this.ticks = event.absoluteTime;
        this.value = event.value;
    }
    Object.defineProperty(ControlChange.prototype, "number", {
        /**
         * The controller number
         */
        get: function () {
            return privateCCNumberMap.get(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlChange.prototype, "name", {
        /**
         * return the common name of the control number if it exists
         */
        get: function () {
            if (exports.controlChangeNames[this.number]) {
                return exports.controlChangeNames[this.number];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlChange.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: true,
        configurable: true
    });
    ControlChange.prototype.toJSON = function () {
        return {
            number: this.number,
            ticks: this.ticks,
            time: this.time,
            value: this.value,
        };
    };
    return ControlChange;
}());
exports.ControlChange = ControlChange;
//# sourceMappingURL=ControlChange.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/ControlChanges.js":
/*!********************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/ControlChanges.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControlChange_1 = __webpack_require__(/*! ./ControlChange */ "../../../node_modules/@tonejs/midi/dist/ControlChange.js");
/**
 * Automatically creates an alias for named control values using Proxies
 * @hidden
 */
function createControlChanges() {
    return new Proxy({}, {
        // tslint:disable-next-line: typedef
        get: function (target, handler) {
            if (target[handler]) {
                return target[handler];
            }
            else if (ControlChange_1.controlChangeIds.hasOwnProperty(handler)) {
                return target[ControlChange_1.controlChangeIds[handler]];
            }
        },
        // tslint:disable-next-line: typedef
        set: function (target, handler, value) {
            if (ControlChange_1.controlChangeIds.hasOwnProperty(handler)) {
                target[ControlChange_1.controlChangeIds[handler]] = value;
            }
            else {
                target[handler] = value;
            }
            return true;
        },
    });
}
exports.createControlChanges = createControlChanges;
//# sourceMappingURL=ControlChanges.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/Encode.js":
/*!************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/Encode.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var midi_file_1 = __webpack_require__(/*! midi-file */ "../../../node_modules/midi-file/index.js");
var Header_1 = __webpack_require__(/*! ./Header */ "../../../node_modules/@tonejs/midi/dist/Header.js");
var array_flatten_1 = __importDefault(__webpack_require__(/*! array-flatten */ "../../../node_modules/array-flatten/array-flatten.js"));
function encodeNote(note, channel) {
    return [{
            absoluteTime: note.ticks,
            channel: channel,
            deltaTime: 0,
            noteNumber: note.midi,
            type: "noteOn",
            velocity: Math.floor(note.velocity * 127),
        },
        {
            absoluteTime: note.ticks + note.durationTicks,
            channel: channel,
            deltaTime: 0,
            noteNumber: note.midi,
            type: "noteOff",
            velocity: Math.floor(note.noteOffVelocity * 127),
        }];
}
function encodeNotes(track) {
    return array_flatten_1.default(track.notes.map(function (note) { return encodeNote(note, track.channel); }));
}
function encodeControlChange(cc, channel) {
    return {
        absoluteTime: cc.ticks,
        channel: channel,
        controllerType: cc.number,
        deltaTime: 0,
        type: "controller",
        value: Math.floor(cc.value * 127),
    };
}
function encodeControlChanges(track) {
    var controlChanges = [];
    for (var i = 0; i < 127; i++) {
        if (track.controlChanges.hasOwnProperty(i)) {
            track.controlChanges[i].forEach(function (cc) {
                controlChanges.push(encodeControlChange(cc, track.channel));
            });
        }
    }
    return controlChanges;
}
function encodePitchBend(pb, channel) {
    return {
        absoluteTime: pb.ticks,
        channel: channel,
        deltaTime: 0,
        type: "pitchBend",
        value: pb.value,
    };
}
function encodePitchBends(track) {
    var pitchBends = [];
    track.pitchBends.forEach(function (pb) {
        pitchBends.push(encodePitchBend(pb, track.channel));
    });
    return pitchBends;
}
function encodeInstrument(track) {
    return {
        absoluteTime: 0,
        channel: track.channel,
        deltaTime: 0,
        programNumber: track.instrument.number,
        type: "programChange",
    };
}
function encodeTrackName(name) {
    return {
        absoluteTime: 0,
        deltaTime: 0,
        meta: true,
        text: name,
        type: "trackName",
    };
}
function encodeTempo(tempo) {
    return {
        absoluteTime: tempo.ticks,
        deltaTime: 0,
        meta: true,
        microsecondsPerBeat: Math.floor(60000000 / tempo.bpm),
        type: "setTempo",
    };
}
function encodeTimeSignature(timeSig) {
    return {
        absoluteTime: timeSig.ticks,
        deltaTime: 0,
        denominator: timeSig.timeSignature[1],
        meta: true,
        metronome: 24,
        numerator: timeSig.timeSignature[0],
        thirtyseconds: 8,
        type: "timeSignature",
    };
}
// function encodeMeta(event: )
function encodeKeySignature(keySig) {
    var keyIndex = Header_1.keySignatureKeys.indexOf(keySig.key);
    return {
        absoluteTime: keySig.ticks,
        deltaTime: 0,
        key: keyIndex + 7,
        meta: true,
        scale: keySig.scale === "major" ? 0 : 1,
        type: "keySignature",
    };
}
function encodeText(textEvent) {
    return {
        absoluteTime: textEvent.ticks,
        deltaTime: 0,
        meta: true,
        text: textEvent.text,
        type: textEvent.type,
    };
}
/**
 * Convert the midi object to an array
 */
function encode(midi) {
    var midiData = {
        header: {
            format: 1,
            numTracks: midi.tracks.length + 1,
            ticksPerBeat: midi.header.ppq,
        },
        tracks: __spreadArrays([
            __spreadArrays([
                // the name data
                {
                    absoluteTime: 0,
                    deltaTime: 0,
                    meta: true,
                    text: midi.header.name,
                    type: "trackName",
                }
            ], midi.header.keySignatures.map(function (keySig) { return encodeKeySignature(keySig); }), midi.header.meta.map(function (e) { return encodeText(e); }), midi.header.tempos.map(function (tempo) { return encodeTempo(tempo); }), midi.header.timeSignatures.map(function (timeSig) { return encodeTimeSignature(timeSig); }))
        ], midi.tracks.map(function (track) {
            return __spreadArrays([
                // add the name
                encodeTrackName(track.name),
                // the instrument
                encodeInstrument(track)
            ], encodeNotes(track), encodeControlChanges(track), encodePitchBends(track));
        })),
    };
    // sort and set deltaTime of all of the tracks
    midiData.tracks = midiData.tracks.map(function (track) {
        track = track.sort(function (a, b) { return a.absoluteTime - b.absoluteTime; });
        var lastTime = 0;
        track.forEach(function (note) {
            note.deltaTime = note.absoluteTime - lastTime;
            lastTime = note.absoluteTime;
            delete note.absoluteTime;
        });
        // end of track
        track.push({
            deltaTime: 0,
            meta: true,
            type: "endOfTrack",
        });
        return track;
    });
    // return midiData
    return new Uint8Array(midi_file_1.writeMidi(midiData));
}
exports.encode = encode;
//# sourceMappingURL=Encode.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/Header.js":
/*!************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/Header.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearch_1 = __webpack_require__(/*! ./BinarySearch */ "../../../node_modules/@tonejs/midi/dist/BinarySearch.js");
var privatePPQMap = new WeakMap();
/**
 * @hidden
 */
exports.keySignatureKeys = [
    "Cb",
    "Gb",
    "Db",
    "Ab",
    "Eb",
    "Bb",
    "F",
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "C#",
];
/** The parsed midi file header */
var Header = /** @class */ (function () {
    function Header(midiData) {
        // look through all the tracks for tempo changes
        var _this = this;
        /**
         * The array of all the tempo events
         */
        this.tempos = [];
        /**
         * The time signatures
         */
        this.timeSignatures = [];
        /**
         * The time signatures
         */
        this.keySignatures = [];
        /**
         * Additional meta events
         */
        this.meta = [];
        /**
         * The name of the midi file
         */
        this.name = "";
        privatePPQMap.set(this, 480);
        if (midiData) {
            privatePPQMap.set(this, midiData.header.ticksPerBeat);
            // check time signature and tempo events from all of the tracks
            midiData.tracks.forEach(function (track) {
                return track.forEach(function (event) {
                    if (event.meta) {
                        if (event.type === "timeSignature") {
                            _this.timeSignatures.push({
                                ticks: event.absoluteTime,
                                timeSignature: [
                                    event.numerator,
                                    event.denominator,
                                ],
                            });
                        }
                        else if (event.type === "setTempo") {
                            _this.tempos.push({
                                bpm: 60000000 / event.microsecondsPerBeat,
                                ticks: event.absoluteTime,
                            });
                        }
                        else if (event.type === "keySignature") {
                            _this.keySignatures.push({
                                key: exports.keySignatureKeys[event.key + 7],
                                scale: event.scale === 0 ? "major" : "minor",
                                ticks: event.absoluteTime,
                            });
                        }
                    }
                });
            });
            // check the first track for other relevant data
            midiData.tracks[0].forEach(function (event) {
                if (event.meta) {
                    if (event.type === "trackName") {
                        _this.name = event.text;
                    }
                    else if (event.type === "text" ||
                        event.type === "cuePoint" ||
                        event.type === "marker" ||
                        event.type === "lyrics") {
                        _this.meta.push({
                            text: event.text,
                            ticks: event.absoluteTime,
                            type: event.type,
                        });
                    }
                }
            });
            this.update();
        }
    }
    /**
     * This must be invoked after any changes are made to the tempo array
     * or the timeSignature array for the updated values to be reflected.
     */
    Header.prototype.update = function () {
        var _this = this;
        var currentTime = 0;
        var lastEventBeats = 0;
        // make sure it's sorted
        this.tempos.sort(function (a, b) { return a.ticks - b.ticks; });
        this.tempos.forEach(function (event, index) {
            var lastBPM = index > 0 ? _this.tempos[index - 1].bpm : _this.tempos[0].bpm;
            var beats = event.ticks / _this.ppq - lastEventBeats;
            var elapsedSeconds = (60 / lastBPM) * beats;
            event.time = elapsedSeconds + currentTime;
            currentTime = event.time;
            lastEventBeats += beats;
        });
        this.timeSignatures.sort(function (a, b) { return a.ticks - b.ticks; });
        this.timeSignatures.forEach(function (event, index) {
            var lastEvent = index > 0
                ? _this.timeSignatures[index - 1]
                : _this.timeSignatures[0];
            var elapsedBeats = (event.ticks - lastEvent.ticks) / _this.ppq;
            var elapsedMeasures = elapsedBeats /
                lastEvent.timeSignature[0] /
                (lastEvent.timeSignature[1] / 4);
            lastEvent.measures = lastEvent.measures || 0;
            event.measures = elapsedMeasures + lastEvent.measures;
        });
    };
    /**
     * Convert ticks into seconds based on the tempo changes
     */
    Header.prototype.ticksToSeconds = function (ticks) {
        // find the relevant position
        var index = BinarySearch_1.search(this.tempos, ticks);
        if (index !== -1) {
            var tempo = this.tempos[index];
            var tempoTime = tempo.time;
            var elapsedBeats = (ticks - tempo.ticks) / this.ppq;
            return tempoTime + (60 / tempo.bpm) * elapsedBeats;
        }
        else {
            // assume 120
            var beats = ticks / this.ppq;
            return (60 / 120) * beats;
        }
    };
    /**
     * Convert ticks into measures based off of the time signatures
     */
    Header.prototype.ticksToMeasures = function (ticks) {
        var index = BinarySearch_1.search(this.timeSignatures, ticks);
        if (index !== -1) {
            var timeSigEvent = this.timeSignatures[index];
            var elapsedBeats = (ticks - timeSigEvent.ticks) / this.ppq;
            return (timeSigEvent.measures +
                elapsedBeats /
                    (timeSigEvent.timeSignature[0] /
                        timeSigEvent.timeSignature[1]) /
                    4);
        }
        else {
            return ticks / this.ppq / 4;
        }
    };
    Object.defineProperty(Header.prototype, "ppq", {
        /**
         * The number of ticks per quarter note
         */
        get: function () {
            return privatePPQMap.get(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convert seconds to ticks based on the tempo events
     */
    Header.prototype.secondsToTicks = function (seconds) {
        // find the relevant position
        var index = BinarySearch_1.search(this.tempos, seconds, "time");
        if (index !== -1) {
            var tempo = this.tempos[index];
            var tempoTime = tempo.time;
            var elapsedTime = seconds - tempoTime;
            var elapsedBeats = elapsedTime / (60 / tempo.bpm);
            return Math.round(tempo.ticks + elapsedBeats * this.ppq);
        }
        else {
            // assume 120
            var beats = seconds / (60 / 120);
            return Math.round(beats * this.ppq);
        }
    };
    /**
     * Convert the header into an object.
     */
    Header.prototype.toJSON = function () {
        return {
            keySignatures: this.keySignatures,
            meta: this.meta,
            name: this.name,
            ppq: this.ppq,
            tempos: this.tempos.map(function (t) {
                return {
                    bpm: t.bpm,
                    ticks: t.ticks,
                };
            }),
            timeSignatures: this.timeSignatures,
        };
    };
    /**
     * parse a header json object.
     */
    Header.prototype.fromJSON = function (json) {
        this.name = json.name;
        // clone all the attributes
        this.tempos = json.tempos.map(function (t) { return Object.assign({}, t); });
        this.timeSignatures = json.timeSignatures.map(function (t) {
            return Object.assign({}, t);
        });
        this.keySignatures = json.keySignatures.map(function (t) {
            return Object.assign({}, t);
        });
        this.meta = json.meta.map(function (t) { return Object.assign({}, t); });
        privatePPQMap.set(this, json.ppq);
        this.update();
    };
    /**
     * Update the tempo of the midi to a single tempo. Will remove and replace
     * any other tempos currently set and update all of the event timing.
     * @param bpm The tempo in beats per second
     */
    Header.prototype.setTempo = function (bpm) {
        this.tempos = [
            {
                bpm: bpm,
                ticks: 0,
            },
        ];
        this.update();
    };
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=Header.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/Instrument.js":
/*!****************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/Instrument.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InstrumentMaps_1 = __webpack_require__(/*! ./InstrumentMaps */ "../../../node_modules/@tonejs/midi/dist/InstrumentMaps.js");
/**
 * @hidden
 */
var privateTrackMap = new WeakMap();
/**
 * Describes the midi instrument of a track
 */
var Instrument = /** @class */ (function () {
    /**
     * @param trackData
     * @param track
     */
    function Instrument(trackData, track) {
        /**
         * The instrument number
         */
        this.number = 0;
        privateTrackMap.set(this, track);
        this.number = 0;
        if (trackData) {
            var programChange = trackData.find(function (e) { return e.type === "programChange"; });
            if (programChange) {
                this.number = programChange.programNumber;
            }
        }
    }
    Object.defineProperty(Instrument.prototype, "name", {
        /**
         * The common name of the instrument
         */
        get: function () {
            if (this.percussion) {
                return InstrumentMaps_1.DrumKitByPatchID[this.number];
            }
            else {
                return InstrumentMaps_1.instrumentByPatchID[this.number];
            }
        },
        set: function (n) {
            var patchNumber = InstrumentMaps_1.instrumentByPatchID.indexOf(n);
            if (patchNumber !== -1) {
                this.number = patchNumber;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "family", {
        /**
         * The instrument family, e.g. "piano".
         */
        get: function () {
            if (this.percussion) {
                return "drums";
            }
            else {
                return InstrumentMaps_1.InstrumentFamilyByID[Math.floor(this.number / 8)];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "percussion", {
        /**
         * If the instrument is a percussion instrument
         */
        get: function () {
            var track = privateTrackMap.get(this);
            return track.channel === 9;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convert it to JSON form
     */
    Instrument.prototype.toJSON = function () {
        return {
            family: this.family,
            name: this.name,
            number: this.number,
        };
    };
    /**
     * Convert from JSON form
     */
    Instrument.prototype.fromJSON = function (json) {
        this.number = json.number;
    };
    return Instrument;
}());
exports.Instrument = Instrument;
//# sourceMappingURL=Instrument.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/InstrumentMaps.js":
/*!********************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/InstrumentMaps.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.instrumentByPatchID = [
    "acoustic grand piano",
    "bright acoustic piano",
    "electric grand piano",
    "honky-tonk piano",
    "electric piano 1",
    "electric piano 2",
    "harpsichord",
    "clavi",
    "celesta",
    "glockenspiel",
    "music box",
    "vibraphone",
    "marimba",
    "xylophone",
    "tubular bells",
    "dulcimer",
    "drawbar organ",
    "percussive organ",
    "rock organ",
    "church organ",
    "reed organ",
    "accordion",
    "harmonica",
    "tango accordion",
    "acoustic guitar (nylon)",
    "acoustic guitar (steel)",
    "electric guitar (jazz)",
    "electric guitar (clean)",
    "electric guitar (muted)",
    "overdriven guitar",
    "distortion guitar",
    "guitar harmonics",
    "acoustic bass",
    "electric bass (finger)",
    "electric bass (pick)",
    "fretless bass",
    "slap bass 1",
    "slap bass 2",
    "synth bass 1",
    "synth bass 2",
    "violin",
    "viola",
    "cello",
    "contrabass",
    "tremolo strings",
    "pizzicato strings",
    "orchestral harp",
    "timpani",
    "string ensemble 1",
    "string ensemble 2",
    "synthstrings 1",
    "synthstrings 2",
    "choir aahs",
    "voice oohs",
    "synth voice",
    "orchestra hit",
    "trumpet",
    "trombone",
    "tuba",
    "muted trumpet",
    "french horn",
    "brass section",
    "synthbrass 1",
    "synthbrass 2",
    "soprano sax",
    "alto sax",
    "tenor sax",
    "baritone sax",
    "oboe",
    "english horn",
    "bassoon",
    "clarinet",
    "piccolo",
    "flute",
    "recorder",
    "pan flute",
    "blown bottle",
    "shakuhachi",
    "whistle",
    "ocarina",
    "lead 1 (square)",
    "lead 2 (sawtooth)",
    "lead 3 (calliope)",
    "lead 4 (chiff)",
    "lead 5 (charang)",
    "lead 6 (voice)",
    "lead 7 (fifths)",
    "lead 8 (bass + lead)",
    "pad 1 (new age)",
    "pad 2 (warm)",
    "pad 3 (polysynth)",
    "pad 4 (choir)",
    "pad 5 (bowed)",
    "pad 6 (metallic)",
    "pad 7 (halo)",
    "pad 8 (sweep)",
    "fx 1 (rain)",
    "fx 2 (soundtrack)",
    "fx 3 (crystal)",
    "fx 4 (atmosphere)",
    "fx 5 (brightness)",
    "fx 6 (goblins)",
    "fx 7 (echoes)",
    "fx 8 (sci-fi)",
    "sitar",
    "banjo",
    "shamisen",
    "koto",
    "kalimba",
    "bag pipe",
    "fiddle",
    "shanai",
    "tinkle bell",
    "agogo",
    "steel drums",
    "woodblock",
    "taiko drum",
    "melodic tom",
    "synth drum",
    "reverse cymbal",
    "guitar fret noise",
    "breath noise",
    "seashore",
    "bird tweet",
    "telephone ring",
    "helicopter",
    "applause",
    "gunshot",
];
exports.InstrumentFamilyByID = [
    "piano",
    "chromatic percussion",
    "organ",
    "guitar",
    "bass",
    "strings",
    "ensemble",
    "brass",
    "reed",
    "pipe",
    "synth lead",
    "synth pad",
    "synth effects",
    "world",
    "percussive",
    "sound effects",
];
exports.DrumKitByPatchID = {
    0: "standard kit",
    8: "room kit",
    16: "power kit",
    24: "electronic kit",
    25: "tr-808 kit",
    32: "jazz kit",
    40: "brush kit",
    48: "orchestra kit",
    56: "sound fx kit",
};
//# sourceMappingURL=InstrumentMaps.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/Midi.js":
/*!**********************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/Midi.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var midi_file_1 = __webpack_require__(/*! midi-file */ "../../../node_modules/midi-file/index.js");
var Encode_1 = __webpack_require__(/*! ./Encode */ "../../../node_modules/@tonejs/midi/dist/Encode.js");
var Header_1 = __webpack_require__(/*! ./Header */ "../../../node_modules/@tonejs/midi/dist/Header.js");
var Track_1 = __webpack_require__(/*! ./Track */ "../../../node_modules/@tonejs/midi/dist/Track.js");
/**
 * The main midi parsing class
 */
var Midi = /** @class */ (function () {
    /**
     * Parse the midi data
     */
    function Midi(midiArray) {
        var _this = this;
        // parse the midi data if there is any
        var midiData = null;
        if (midiArray) {
            if (midiArray instanceof ArrayBuffer) {
                midiArray = new Uint8Array(midiArray);
            }
            midiData = midi_file_1.parseMidi(midiArray);
            // add the absolute times to each of the tracks
            midiData.tracks.forEach(function (track) {
                var currentTicks = 0;
                track.forEach(function (event) {
                    currentTicks += event.deltaTime;
                    event.absoluteTime = currentTicks;
                });
            });
            // ensure at most one instrument per track
            midiData.tracks = splitTracks(midiData.tracks);
        }
        this.header = new Header_1.Header(midiData);
        this.tracks = [];
        // parse the midi data
        if (midiArray) {
            // format 0, everything is on the same track
            this.tracks = midiData.tracks.map(function (trackData) { return new Track_1.Track(trackData, _this.header); });
            // if it's format 1 and there are no notes on the first track, remove it
            if (midiData.header.format === 1 && this.tracks[0].duration === 0) {
                this.tracks.shift();
            }
        }
    }
    /**
     * Download and parse the MIDI file. Returns a promise
     * which resolves to the generated midi file
     * @param url The url to fetch
     */
    Midi.fromUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, arrayBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.arrayBuffer()];
                    case 2:
                        arrayBuffer = _a.sent();
                        return [2 /*return*/, new Midi(arrayBuffer)];
                    case 3: throw new Error("could not load " + url);
                }
            });
        });
    };
    Object.defineProperty(Midi.prototype, "name", {
        /**
         * The name of the midi file, taken from the first track
         */
        get: function () {
            return this.header.name;
        },
        set: function (n) {
            this.header.name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Midi.prototype, "duration", {
        /**
         * The total length of the file in seconds
         */
        get: function () {
            // get the max of the last note of all the tracks
            var durations = this.tracks.map(function (t) { return t.duration; });
            return Math.max.apply(Math, durations);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Midi.prototype, "durationTicks", {
        /**
         * The total length of the file in ticks
         */
        get: function () {
            // get the max of the last note of all the tracks
            var durationTicks = this.tracks.map(function (t) { return t.durationTicks; });
            return Math.max.apply(Math, durationTicks);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a track to the midi file
     */
    Midi.prototype.addTrack = function () {
        var track = new Track_1.Track(undefined, this.header);
        this.tracks.push(track);
        return track;
    };
    /**
     * Encode the midi as a Uint8Array.
     */
    Midi.prototype.toArray = function () {
        return Encode_1.encode(this);
    };
    /**
     * Convert the midi object to JSON.
     */
    Midi.prototype.toJSON = function () {
        return {
            header: this.header.toJSON(),
            tracks: this.tracks.map(function (track) { return track.toJSON(); }),
        };
    };
    /**
     * Parse a JSON representation of the object. Will overwrite the current
     * tracks and header.
     */
    Midi.prototype.fromJSON = function (json) {
        var _this = this;
        this.header = new Header_1.Header();
        this.header.fromJSON(json.header);
        this.tracks = json.tracks.map(function (trackJSON) {
            var track = new Track_1.Track(undefined, _this.header);
            track.fromJSON(trackJSON);
            return track;
        });
    };
    /**
     * Clone the entire object midi object
     */
    Midi.prototype.clone = function () {
        var midi = new Midi();
        midi.fromJSON(this.toJSON());
        return midi;
    };
    return Midi;
}());
exports.Midi = Midi;
var Track_2 = __webpack_require__(/*! ./Track */ "../../../node_modules/@tonejs/midi/dist/Track.js");
exports.Track = Track_2.Track;
var Header_2 = __webpack_require__(/*! ./Header */ "../../../node_modules/@tonejs/midi/dist/Header.js");
exports.Header = Header_2.Header;
/**
 * Given a list of MIDI tracks, make sure that each channel corresponds to at
 * most one channel and at most one instrument. This means splitting up tracks
 * that contain more than one channel or instrument.
 */
function splitTracks(tracks) {
    var newTracks = [];
    for (var i = 0; i < tracks.length; i++) {
        var defaultTrack = newTracks.length;
        // a map from [program, channel] tuples to new track numbers
        var trackMap = new Map();
        // a map from channel numbers to current program numbers
        var currentProgram = Array(16).fill(0);
        for (var _i = 0, _a = tracks[i]; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            var targetTrack = defaultTrack;
            // If the event has a channel, we need to find that channel's current
            // program number and the appropriate track for this [program, channel]
            // pair.
            var channel = event_1.channel;
            if (channel !== undefined) {
                if (event_1.type === "programChange") {
                    currentProgram[channel] = event_1.programNumber;
                }
                var program = currentProgram[channel];
                var trackKey = program + " " + channel;
                if (trackMap.has(trackKey)) {
                    targetTrack = trackMap.get(trackKey);
                }
                else {
                    targetTrack = defaultTrack + trackMap.size;
                    trackMap.set(trackKey, targetTrack);
                }
            }
            if (!newTracks[targetTrack]) {
                newTracks.push([]);
            }
            newTracks[targetTrack].push(event_1);
        }
    }
    return newTracks;
}
//# sourceMappingURL=Midi.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/Note.js":
/*!**********************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/Note.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert a midi note into a pitch
 */
function midiToPitch(midi) {
    var octave = Math.floor(midi / 12) - 1;
    return midiToPitchClass(midi) + octave.toString();
}
/**
 * Convert a midi note to a pitch class (just the pitch no octave)
 */
function midiToPitchClass(midi) {
    var scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var note = midi % 12;
    return scaleIndexToNote[note];
}
/**
 * Convert a pitch class to a MIDI note
 */
function pitchClassToMidi(pitch) {
    var scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return scaleIndexToNote.indexOf(pitch);
}
/**
 * Convert a pitch to a midi number
 */
// tslint:disable-next-line: only-arrow-functions typedef
var pitchToMidi = (function () {
    var regexp = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i;
    var noteToScaleIndex = {
        // tslint:disable-next-line: object-literal-sort-keys
        cbb: -2, cb: -1, c: 0, "c#": 1, cx: 2,
        dbb: 0, db: 1, d: 2, "d#": 3, dx: 4,
        ebb: 2, eb: 3, e: 4, "e#": 5, ex: 6,
        fbb: 3, fb: 4, f: 5, "f#": 6, fx: 7,
        gbb: 5, gb: 6, g: 7, "g#": 8, gx: 9,
        abb: 7, ab: 8, a: 9, "a#": 10, ax: 11,
        bbb: 9, bb: 10, b: 11, "b#": 12, bx: 13,
    };
    return function (note) {
        var split = regexp.exec(note);
        var pitch = split[1];
        var octave = split[2];
        var index = noteToScaleIndex[pitch.toLowerCase()];
        return index + (parseInt(octave, 10) + 1) * 12;
    };
}());
var privateHeaderMap = new WeakMap();
/**
 * A Note consists of a noteOn and noteOff event
 */
var Note = /** @class */ (function () {
    function Note(noteOn, noteOff, header) {
        privateHeaderMap.set(this, header);
        this.midi = noteOn.midi;
        this.velocity = noteOn.velocity;
        this.noteOffVelocity = noteOff.velocity;
        this.ticks = noteOn.ticks;
        this.durationTicks = noteOff.ticks - noteOn.ticks;
    }
    Object.defineProperty(Note.prototype, "name", {
        /**
         * The note name and octave in scientific pitch notation, e.g. "C4"
         */
        get: function () {
            return midiToPitch(this.midi);
        },
        set: function (n) {
            this.midi = pitchToMidi(n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "octave", {
        /**
         * The notes octave number
         */
        get: function () {
            return Math.floor(this.midi / 12) - 1;
        },
        set: function (o) {
            var diff = o - this.octave;
            this.midi += diff * 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "pitch", {
        /**
         * The pitch class name. e.g. "A"
         */
        get: function () {
            return midiToPitchClass(this.midi);
        },
        set: function (p) {
            this.midi = 12 * (this.octave + 1) + pitchClassToMidi(p);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "duration", {
        /**
         * The duration of the segment in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks + this.durationTicks) - header.ticksToSeconds(this.ticks);
        },
        set: function (d) {
            var header = privateHeaderMap.get(this);
            var noteEndTicks = header.secondsToTicks(this.time + d);
            this.durationTicks = noteEndTicks - this.ticks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "bars", {
        /**
         * The number of measures (and partial measures) to this beat.
         * Takes into account time signature changes
         * @readonly
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToMeasures(this.ticks);
        },
        enumerable: true,
        configurable: true
    });
    Note.prototype.toJSON = function () {
        return {
            duration: this.duration,
            durationTicks: this.durationTicks,
            midi: this.midi,
            name: this.name,
            ticks: this.ticks,
            time: this.time,
            velocity: this.velocity,
        };
    };
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=Note.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/PitchBend.js":
/*!***************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/PitchBend.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var privateHeaderMap = new WeakMap();
/**
 * Represents a pitch bend event
 */
var PitchBend = /** @class */ (function () {
    /**
     * @param event
     * @param header
     */
    function PitchBend(event, header) {
        privateHeaderMap.set(this, header);
        this.ticks = event.absoluteTime;
        this.value = event.value;
    }
    Object.defineProperty(PitchBend.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: true,
        configurable: true
    });
    PitchBend.prototype.toJSON = function () {
        return {
            ticks: this.ticks,
            time: this.time,
            value: this.value,
        };
    };
    return PitchBend;
}());
exports.PitchBend = PitchBend;
//# sourceMappingURL=PitchBend.js.map

/***/ }),

/***/ "../../../node_modules/@tonejs/midi/dist/Track.js":
/*!***********************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/@tonejs/midi/dist/Track.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearch_1 = __webpack_require__(/*! ./BinarySearch */ "../../../node_modules/@tonejs/midi/dist/BinarySearch.js");
var ControlChange_1 = __webpack_require__(/*! ./ControlChange */ "../../../node_modules/@tonejs/midi/dist/ControlChange.js");
var ControlChanges_1 = __webpack_require__(/*! ./ControlChanges */ "../../../node_modules/@tonejs/midi/dist/ControlChanges.js");
var PitchBend_1 = __webpack_require__(/*! ./PitchBend */ "../../../node_modules/@tonejs/midi/dist/PitchBend.js");
var Instrument_1 = __webpack_require__(/*! ./Instrument */ "../../../node_modules/@tonejs/midi/dist/Instrument.js");
var Note_1 = __webpack_require__(/*! ./Note */ "../../../node_modules/@tonejs/midi/dist/Note.js");
var privateHeaderMap = new WeakMap();
/**
 * A Track is a collection of notes and controlChanges
 */
var Track = /** @class */ (function () {
    function Track(trackData, header) {
        var _this = this;
        /**
         * The name of the track
         */
        this.name = "";
        /**
         * The track's note events
         */
        this.notes = [];
        /**
         * The control change events
         */
        this.controlChanges = ControlChanges_1.createControlChanges();
        /**
         * The pitch bend events
         */
        this.pitchBends = [];
        privateHeaderMap.set(this, header);
        if (trackData) {
            var nameEvent = trackData.find(function (e) { return e.type === "trackName"; });
            this.name = nameEvent ? nameEvent.text : "";
        }
        this.instrument = new Instrument_1.Instrument(trackData, this);
        // defaults to 0
        this.channel = 0;
        if (trackData) {
            var noteOns = trackData.filter(function (event) { return event.type === "noteOn"; });
            var noteOffs = trackData.filter(function (event) { return event.type === "noteOff"; });
            var _loop_1 = function () {
                var currentNote = noteOns.shift();
                // set the channel based on the note
                this_1.channel = currentNote.channel;
                // find the corresponding note off
                var offIndex = noteOffs.findIndex(function (note) {
                    return note.noteNumber === currentNote.noteNumber &&
                        note.absoluteTime >= currentNote.absoluteTime;
                });
                if (offIndex !== -1) {
                    // once it's got the note off, add it
                    var noteOff = noteOffs.splice(offIndex, 1)[0];
                    this_1.addNote({
                        durationTicks: noteOff.absoluteTime - currentNote.absoluteTime,
                        midi: currentNote.noteNumber,
                        noteOffVelocity: noteOff.velocity / 127,
                        ticks: currentNote.absoluteTime,
                        velocity: currentNote.velocity / 127,
                    });
                }
            };
            var this_1 = this;
            while (noteOns.length) {
                _loop_1();
            }
            var controlChanges = trackData.filter(function (event) { return event.type === "controller"; });
            controlChanges.forEach(function (event) {
                _this.addCC({
                    number: event.controllerType,
                    ticks: event.absoluteTime,
                    value: event.value / 127,
                });
            });
            var pitchBends = trackData.filter(function (event) { return event.type === "pitchBend"; });
            pitchBends.forEach(function (event) {
                _this.addPitchBend({
                    ticks: event.absoluteTime,
                    // scale the value between -2^13 to 2^13 to -2 to 2
                    value: event.value / Math.pow(2, 13),
                });
            });
            var endOfTrackEvent = trackData.find(function (event) {
                return event.type === "endOfTrack";
            });
            this.endOfTrackTicks =
                endOfTrackEvent !== undefined
                    ? endOfTrackEvent.absoluteTime
                    : undefined;
        }
    }
    /**
     * Add a note to the notes array
     * @param props The note properties to add
     */
    Track.prototype.addNote = function (props) {
        var header = privateHeaderMap.get(this);
        var note = new Note_1.Note({
            midi: 0,
            ticks: 0,
            velocity: 1,
        }, {
            ticks: 0,
            velocity: 0,
        }, header);
        Object.assign(note, props);
        BinarySearch_1.insert(this.notes, note, "ticks");
        return this;
    };
    /**
     * Add a control change to the track
     * @param props
     */
    Track.prototype.addCC = function (props) {
        var header = privateHeaderMap.get(this);
        var cc = new ControlChange_1.ControlChange({
            controllerType: props.number,
        }, header);
        delete props.number;
        Object.assign(cc, props);
        if (!Array.isArray(this.controlChanges[cc.number])) {
            this.controlChanges[cc.number] = [];
        }
        BinarySearch_1.insert(this.controlChanges[cc.number], cc, "ticks");
        return this;
    };
    /**
     * Add a control change to the track
     */
    Track.prototype.addPitchBend = function (props) {
        var header = privateHeaderMap.get(this);
        var pb = new PitchBend_1.PitchBend({}, header);
        Object.assign(pb, props);
        BinarySearch_1.insert(this.pitchBends, pb, "ticks");
        return this;
    };
    Object.defineProperty(Track.prototype, "duration", {
        /**
         * The end time of the last event in the track
         */
        get: function () {
            if (!this.notes.length) {
                return 0;
            }
            var maxDuration = this.notes[this.notes.length - 1].time +
                this.notes[this.notes.length - 1].duration;
            for (var i = 0; i < this.notes.length - 1; i++) {
                var duration = this.notes[i].time + this.notes[i].duration;
                if (maxDuration < duration) {
                    maxDuration = duration;
                }
            }
            return maxDuration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "durationTicks", {
        /**
         * The end time of the last event in the track in ticks
         */
        get: function () {
            if (!this.notes.length) {
                return 0;
            }
            var maxDuration = this.notes[this.notes.length - 1].ticks +
                this.notes[this.notes.length - 1].durationTicks;
            for (var i = 0; i < this.notes.length - 1; i++) {
                var duration = this.notes[i].ticks + this.notes[i].durationTicks;
                if (maxDuration < duration) {
                    maxDuration = duration;
                }
            }
            return maxDuration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Assign the json values to this track
     */
    Track.prototype.fromJSON = function (json) {
        var _this = this;
        this.name = json.name;
        this.channel = json.channel;
        this.instrument = new Instrument_1.Instrument(undefined, this);
        this.instrument.fromJSON(json.instrument);
        if (json.endOfTrackTicks !== undefined) {
            this.endOfTrackTicks = json.endOfTrackTicks;
        }
        for (var number in json.controlChanges) {
            if (json.controlChanges[number]) {
                json.controlChanges[number].forEach(function (cc) {
                    _this.addCC({
                        number: cc.number,
                        ticks: cc.ticks,
                        value: cc.value,
                    });
                });
            }
        }
        json.notes.forEach(function (n) {
            _this.addNote({
                durationTicks: n.durationTicks,
                midi: n.midi,
                ticks: n.ticks,
                velocity: n.velocity,
            });
        });
    };
    /**
     * Convert the track into a JSON format
     */
    Track.prototype.toJSON = function () {
        // convert all the CCs to JSON
        var controlChanges = {};
        for (var i = 0; i < 127; i++) {
            if (this.controlChanges.hasOwnProperty(i)) {
                controlChanges[i] = this.controlChanges[i].map(function (c) {
                    return c.toJSON();
                });
            }
        }
        var json = {
            channel: this.channel,
            controlChanges: controlChanges,
            pitchBends: this.pitchBends.map(function (pb) { return pb.toJSON(); }),
            instrument: this.instrument.toJSON(),
            name: this.name,
            notes: this.notes.map(function (n) { return n.toJSON(); }),
        };
        if (this.endOfTrackTicks !== undefined) {
            json.endOfTrackTicks = this.endOfTrackTicks;
        }
        return json;
    };
    return Track;
}());
exports.Track = Track;
//# sourceMappingURL=Track.js.map

/***/ }),

/***/ "../../../node_modules/array-flatten/array-flatten.js":
/*!***************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/array-flatten/array-flatten.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `arrayFlatten`.
 */
module.exports = flatten
module.exports.from = flattenFrom
module.exports.depth = flattenDepth
module.exports.fromDepth = flattenFromDepth

/**
 * Flatten an array.
 *
 * @param  {Array} array
 * @return {Array}
 */
function flatten (array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected value to be an array')
  }

  return flattenFrom(array)
}

/**
 * Flatten an array-like structure.
 *
 * @param  {Array} array
 * @return {Array}
 */
function flattenFrom (array) {
  return flattenDown(array, [])
}

/**
 * Flatten an array-like structure with depth.
 *
 * @param  {Array}  array
 * @param  {number} depth
 * @return {Array}
 */
function flattenDepth (array, depth) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected value to be an array')
  }

  return flattenFromDepth(array, depth)
}

/**
 * Flatten an array-like structure with depth.
 *
 * @param  {Array}  array
 * @param  {number} depth
 * @return {Array}
 */
function flattenFromDepth (array, depth) {
  if (typeof depth !== 'number') {
    throw new TypeError('Expected the depth to be a number')
  }

  return flattenDownDepth(array, [], depth)
}

/**
 * Flatten an array indefinitely.
 *
 * @param  {Array} array
 * @param  {Array} result
 * @return {Array}
 */
function flattenDown (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenDown(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Flatten an array with depth.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {number} depth
 * @return {Array}
 */
function flattenDownDepth (array, result, depth) {
  depth--

  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (depth > -1 && Array.isArray(value)) {
      flattenDownDepth(value, result, depth)
    } else {
      result.push(value)
    }
  }

  return result
}


/***/ }),

/***/ "../../../node_modules/midi-file/index.js":
/*!***************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/midi-file/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.parseMidi = __webpack_require__(/*! ./lib/midi-parser */ "../../../node_modules/midi-file/lib/midi-parser.js")
exports.writeMidi = __webpack_require__(/*! ./lib/midi-writer */ "../../../node_modules/midi-file/lib/midi-writer.js")


/***/ }),

/***/ "../../../node_modules/midi-file/lib/midi-parser.js":
/*!*************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/midi-file/lib/midi-parser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// data can be any array-like object.  It just needs to support .length, .slice, and an element getter []

function parseMidi(data) {
  var p = new Parser(data)

  var headerChunk = p.readChunk()
  if (headerChunk.id != 'MThd')
    throw "Bad MIDI file.  Expected 'MHdr', got: '" + headerChunk.id + "'"
  var header = parseHeader(headerChunk.data)

  var tracks = []
  for (var i=0; !p.eof() && i < header.numTracks; i++) {
    var trackChunk = p.readChunk()
    if (trackChunk.id != 'MTrk')
      throw "Bad MIDI file.  Expected 'MTrk', got: '" + trackChunk.id + "'"
    var track = parseTrack(trackChunk.data)
    tracks.push(track)
  }

  return {
    header: header,
    tracks: tracks
  }
}


function parseHeader(data) {
  var p = new Parser(data)

  var format = p.readUInt16()
  var numTracks = p.readUInt16()

  var result = {
    format: format,
    numTracks: numTracks
  }

  var timeDivision = p.readUInt16()
  if (timeDivision & 0x8000) {
    result.framesPerSecond = 0x100 - (timeDivision >> 8)
    result.ticksPerFrame = timeDivision & 0xFF
  } else {
    result.ticksPerBeat = timeDivision
  }

  return result
}

function parseTrack(data) {
  var p = new Parser(data)

  var events = []
  while (!p.eof()) {
    var event = readEvent()
    events.push(event)
  }

  return events

  var lastEventTypeByte = null

  function readEvent() {
    var event = {}
    event.deltaTime = p.readVarInt()

    var eventTypeByte = p.readUInt8()

    if ((eventTypeByte & 0xf0) === 0xf0) {
      // system / meta event
      if (eventTypeByte === 0xff) {
        // meta event
        event.meta = true
        var metatypeByte = p.readUInt8()
        var length = p.readVarInt()
        switch (metatypeByte) {
          case 0x00:
            event.type = 'sequenceNumber'
            if (length !== 2) throw "Expected length for sequenceNumber event is 2, got " + length
            event.number = p.readUInt16()
            return event
          case 0x01:
            event.type = 'text'
            event.text = p.readString(length)
            return event
          case 0x02:
            event.type = 'copyrightNotice'
            event.text = p.readString(length)
            return event
          case 0x03:
            event.type = 'trackName'
            event.text = p.readString(length)
            return event
          case 0x04:
            event.type = 'instrumentName'
            event.text = p.readString(length)
            return event
          case 0x05:
            event.type = 'lyrics'
            event.text = p.readString(length)
            return event
          case 0x06:
            event.type = 'marker'
            event.text = p.readString(length)
            return event
          case 0x07:
            event.type = 'cuePoint'
            event.text = p.readString(length)
            return event
          case 0x20:
            event.type = 'channelPrefix'
            if (length != 1) throw "Expected length for channelPrefix event is 1, got " + length
            event.channel = p.readUInt8()
            return event
          case 0x21:
            event.type = 'portPrefix'
            if (length != 1) throw "Expected length for portPrefix event is 1, got " + length
            event.port = p.readUInt8()
            return event
          case 0x2f:
            event.type = 'endOfTrack'
            if (length != 0) throw "Expected length for endOfTrack event is 0, got " + length
            return event
          case 0x51:
            event.type = 'setTempo';
            if (length != 3) throw "Expected length for setTempo event is 3, got " + length
            event.microsecondsPerBeat = p.readUInt24()
            return event
          case 0x54:
            event.type = 'smpteOffset';
            if (length != 5) throw "Expected length for smpteOffset event is 5, got " + length
            var hourByte = p.readUInt8()
            var FRAME_RATES = { 0x00: 24, 0x20: 25, 0x40: 29, 0x60: 30 }
            event.frameRate = FRAME_RATES[hourByte & 0x60]
            event.hour = hourByte & 0x1f
            event.min = p.readUInt8()
            event.sec = p.readUInt8()
            event.frame = p.readUInt8()
            event.subFrame = p.readUInt8()
            return event
          case 0x58:
            event.type = 'timeSignature'
            if (length != 4) throw "Expected length for timeSignature event is 4, got " + length
            event.numerator = p.readUInt8()
            event.denominator = (1 << p.readUInt8())
            event.metronome = p.readUInt8()
            event.thirtyseconds = p.readUInt8()
            return event
          case 0x59:
            event.type = 'keySignature'
            if (length != 2) throw "Expected length for keySignature event is 2, got " + length
            event.key = p.readInt8()
            event.scale = p.readUInt8()
            return event
          case 0x7f:
            event.type = 'sequencerSpecific'
            event.data = p.readBytes(length)
            return event
          default:
            event.type = 'unknownMeta'
            event.data = p.readBytes(length)
            event.metatypeByte = metatypeByte
            return event
        }
      } else if (eventTypeByte == 0xf0) {
        event.type = 'sysEx'
        var length = p.readVarInt()
        event.data = p.readBytes(length)
        return event
      } else if (eventTypeByte == 0xf7) {
        event.type = 'endSysEx'
        var length = p.readVarInt()
        event.data = p.readBytes(length)
        return event
      } else {
        throw "Unrecognised MIDI event type byte: " + eventTypeByte
      }
    } else {
      // channel event
      var param1
      if ((eventTypeByte & 0x80) === 0) {
        // running status - reuse lastEventTypeByte as the event type.
        // eventTypeByte is actually the first parameter
        if (lastEventTypeByte === null)
          throw "Running status byte encountered before status byte"
        param1 = eventTypeByte
        eventTypeByte = lastEventTypeByte
        event.running = true
      } else {
        param1 = p.readUInt8()
        lastEventTypeByte = eventTypeByte
      }
      var eventType = eventTypeByte >> 4
      event.channel = eventTypeByte & 0x0f
      switch (eventType) {
        case 0x08:
          event.type = 'noteOff'
          event.noteNumber = param1
          event.velocity = p.readUInt8()
          return event
        case 0x09:
          var velocity = p.readUInt8()
          event.type = velocity === 0 ? 'noteOff' : 'noteOn'
          event.noteNumber = param1
          event.velocity = velocity
          if (velocity === 0) event.byte9 = true
          return event
        case 0x0a:
          event.type = 'noteAftertouch'
          event.noteNumber = param1
          event.amount = p.readUInt8()
          return event
        case 0x0b:
          event.type = 'controller'
          event.controllerType = param1
          event.value = p.readUInt8()
          return event
        case 0x0c:
          event.type = 'programChange'
          event.programNumber = param1
          return event
        case 0x0d:
          event.type = 'channelAftertouch'
          event.amount = param1
          return event
        case 0x0e:
          event.type = 'pitchBend'
          event.value = (param1 + (p.readUInt8() << 7)) - 0x2000
          return event
        default:
          throw "Unrecognised MIDI event type: " + eventType
      }
    }
  }
}

function Parser(data) {
  this.buffer = data
  this.bufferLen = this.buffer.length
  this.pos = 0
}

Parser.prototype.eof = function() {
  return this.pos >= this.bufferLen
}

Parser.prototype.readUInt8 = function() {
  var result = this.buffer[this.pos]
  this.pos += 1
  return result
}

Parser.prototype.readInt8 = function() {
  var u = this.readUInt8()
  if (u & 0x80)
    return u - 0x100
  else
    return u
}

Parser.prototype.readUInt16 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8()

    return (b0 << 8) + b1
}

Parser.prototype.readInt16 = function() {
  var u = this.readUInt16()
  if (u & 0x8000)
    return u - 0x10000
  else
    return u
}

Parser.prototype.readUInt24 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8(),
      b2 = this.readUInt8()

    return (b0 << 16) + (b1 << 8) + b2
}

Parser.prototype.readInt24 = function() {
  var u = this.readUInt24()
  if (u & 0x800000)
    return u - 0x1000000
  else
    return u
}

Parser.prototype.readUInt32 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8(),
      b2 = this.readUInt8(),
      b3 = this.readUInt8()

    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3
}

Parser.prototype.readBytes = function(len) {
  var bytes = this.buffer.slice(this.pos, this.pos + len)
  this.pos += len
  return bytes
}

Parser.prototype.readString = function(len) {
  var bytes = this.readBytes(len)
  return String.fromCharCode.apply(null, bytes)
}

Parser.prototype.readVarInt = function() {
  var result = 0
  while (!this.eof()) {
    var b = this.readUInt8()
    if (b & 0x80) {
      result += (b & 0x7f)
      result <<= 7
    } else {
      // b is last byte
      return result + b
    }
  }
  // premature eof
  return result
}

Parser.prototype.readChunk = function() {
  var id = this.readString(4)
  var length = this.readUInt32()
  var data = this.readBytes(length)
  return {
    id: id,
    length: length,
    data: data
  }
}

module.exports = parseMidi


/***/ }),

/***/ "../../../node_modules/midi-file/lib/midi-writer.js":
/*!*************************************************************************!*\
  !*** /Users/alexandermathieu/node_modules/midi-file/lib/midi-writer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// data should be the same type of format returned by parseMidi
// for maximum compatibililty, returns an array of byte values, suitable for conversion to Buffer, Uint8Array, etc.

// opts:
// - running              reuse previous eventTypeByte when possible, to compress file
// - useByte9ForNoteOff   use 0x09 for noteOff when velocity is zero

function writeMidi(data, opts) {
  if (typeof data !== 'object')
    throw 'Invalid MIDI data'

  opts = opts || {}

  var header = data.header || {}
  var tracks = data.tracks || []
  var i, len = tracks.length

  var w = new Writer()
  writeHeader(w, header, len)

  for (i=0; i < len; i++) {
    writeTrack(w, tracks[i], opts)
  }

  return w.buffer
}

function writeHeader(w, header, numTracks) {
  var format = header.format == null ? 1 : header.format

  var timeDivision = 128
  if (header.timeDivision) {
    timeDivision = header.timeDivision
  } else if (header.ticksPerFrame && header.framesPerSecond) {
    timeDivision = (-(header.framesPerSecond & 0xFF) << 8) | (header.ticksPerFrame & 0xFF)
  } else if (header.ticksPerBeat) {
    timeDivision = header.ticksPerBeat & 0x7FFF
  }

  var h = new Writer()
  h.writeUInt16(format)
  h.writeUInt16(numTracks)
  h.writeUInt16(timeDivision)

  w.writeChunk('MThd', h.buffer)
}

function writeTrack(w, track, opts) {
  var t = new Writer()
  var i, len = track.length
  var eventTypeByte = null
  for (i=0; i < len; i++) {
    // Reuse last eventTypeByte when opts.running is set, or event.running is explicitly set on it.
    // parseMidi will set event.running for each event, so that we can get an exact copy by default.
    // Explicitly set opts.running to false, to override event.running and never reuse last eventTypeByte.
    if (opts.running === false || !opts.running && !track[i].running) eventTypeByte = null

    eventTypeByte = writeEvent(t, track[i], eventTypeByte, opts.useByte9ForNoteOff)
  }
  w.writeChunk('MTrk', t.buffer)
}

function writeEvent(w, event, lastEventTypeByte, useByte9ForNoteOff) {
  var type = event.type
  var deltaTime = event.deltaTime
  var text = event.text || ''
  var data = event.data || []
  var eventTypeByte = null
  w.writeVarInt(deltaTime)

  switch (type) {
    // meta events
    case 'sequenceNumber':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x00)
      w.writeVarInt(2)
      w.writeUInt16(event.number)
      break;

    case 'text':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x01)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'copyrightNotice':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x02)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'trackName':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x03)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'instrumentName':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x04)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'lyrics':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x05)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'marker':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x06)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'cuePoint':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x07)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'channelPrefix':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x20)
      w.writeVarInt(1)
      w.writeUInt8(event.channel)
      break;

    case 'portPrefix':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x21)
      w.writeVarInt(1)
      w.writeUInt8(event.port)
      break;

    case 'endOfTrack':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x2F)
      w.writeVarInt(0)
      break;

    case 'setTempo':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x51)
      w.writeVarInt(3)
      w.writeUInt24(event.microsecondsPerBeat)
      break;

    case 'smpteOffset':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x54)
      w.writeVarInt(5)
      var FRAME_RATES = { 24: 0x00, 25: 0x20, 29: 0x40, 30: 0x60 }
      var hourByte = (event.hour & 0x1F) | FRAME_RATES[event.frameRate]
      w.writeUInt8(hourByte)
      w.writeUInt8(event.min)
      w.writeUInt8(event.sec)
      w.writeUInt8(event.frame)
      w.writeUInt8(event.subFrame)
      break;

    case 'timeSignature':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x58)
      w.writeVarInt(4)
      w.writeUInt8(event.numerator)
      var denominator = Math.floor((Math.log(event.denominator) / Math.LN2)) & 0xFF
      w.writeUInt8(denominator)
      w.writeUInt8(event.metronome)
      w.writeUInt8(event.thirtyseconds || 8)
      break;

    case 'keySignature':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x59)
      w.writeVarInt(2)
      w.writeInt8(event.key)
      w.writeUInt8(event.scale)
      break;

    case 'sequencerSpecific':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x7F)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    case 'unknownMeta':
      if (event.metatypeByte != null) {
        w.writeUInt8(0xFF)
        w.writeUInt8(event.metatypeByte)
        w.writeVarInt(data.length)
        w.writeBytes(data)
      }
      break;

    // system-exclusive
    case 'sysEx':
      w.writeUInt8(0xF0)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    case 'endSysEx':
      w.writeUInt8(0xF7)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    // channel events
    case 'noteOff':
      // Use 0x90 when opts.useByte9ForNoteOff is set and velocity is zero, or when event.byte9 is explicitly set on it.
      // parseMidi will set event.byte9 for each event, so that we can get an exact copy by default.
      // Explicitly set opts.useByte9ForNoteOff to false, to override event.byte9 and always use 0x80 for noteOff events.
      var noteByte = ((useByte9ForNoteOff !== false && event.byte9) || (useByte9ForNoteOff && event.velocity == 0)) ? 0x90 : 0x80

      eventTypeByte = noteByte | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.velocity)
      break;

    case 'noteOn':
      eventTypeByte = 0x90 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.velocity)
      break;

    case 'noteAftertouch':
      eventTypeByte = 0xA0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.amount)
      break;

    case 'controller':
      eventTypeByte = 0xB0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.controllerType)
      w.writeUInt8(event.value)
      break;

    case 'programChange':
      eventTypeByte = 0xC0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.programNumber)
      break;

    case 'channelAftertouch':
      eventTypeByte = 0xD0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.amount)
      break;

    case 'pitchBend':
      eventTypeByte = 0xE0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      var value14 = 0x2000 + event.value
      var lsb14 = (value14 & 0x7F)
      var msb14 = (value14 >> 7) & 0x7F
      w.writeUInt8(lsb14)
      w.writeUInt8(msb14)
    break;

    default:
      throw 'Unrecognized event type: ' + type
  }
  return eventTypeByte
}


function Writer() {
  this.buffer = []
}

Writer.prototype.writeUInt8 = function(v) {
  this.buffer.push(v & 0xFF)
}
Writer.prototype.writeInt8 = Writer.prototype.writeUInt8

Writer.prototype.writeUInt16 = function(v) {
  var b0 = (v >> 8) & 0xFF,
      b1 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
}
Writer.prototype.writeInt16 = Writer.prototype.writeUInt16

Writer.prototype.writeUInt24 = function(v) {
  var b0 = (v >> 16) & 0xFF,
      b1 = (v >> 8) & 0xFF,
      b2 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
  this.writeUInt8(b2)
}
Writer.prototype.writeInt24 = Writer.prototype.writeUInt24

Writer.prototype.writeUInt32 = function(v) {
  var b0 = (v >> 24) & 0xFF,
      b1 = (v >> 16) & 0xFF,
      b2 = (v >> 8) & 0xFF,
      b3 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
  this.writeUInt8(b2)
  this.writeUInt8(b3)
}
Writer.prototype.writeInt32 = Writer.prototype.writeUInt32


Writer.prototype.writeBytes = function(arr) {
  this.buffer = this.buffer.concat(Array.prototype.slice.call(arr, 0))
}

Writer.prototype.writeString = function(str) {
  var i, len = str.length, arr = []
  for (i=0; i < len; i++) {
    arr.push(str.codePointAt(i))
  }
  this.writeBytes(arr)
}

Writer.prototype.writeVarInt = function(v) {
  if (v < 0) throw "Cannot write negative variable-length integer"

  if (v <= 0x7F) {
    this.writeUInt8(v)
  } else {
    var i = v
    var bytes = []
    bytes.push(i & 0x7F)
    i >>= 7
    while (i) {
      var b = i & 0x7F | 0x80
      bytes.push(b)
      i >>= 7
    }
    this.writeBytes(bytes.reverse())
  }
}

Writer.prototype.writeChunk = function(id, data) {
  this.writeString(id)
  this.writeUInt32(data.length)
  this.writeBytes(data)
}

module.exports = writeMidi


/***/ }),

/***/ "./src/electron/main.ts":
/*!******************************!*\
  !*** ./src/electron/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tonejs_midi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonejs/midi */ "../../../node_modules/@tonejs/midi/dist/Midi.js");
/* harmony import */ var _tonejs_midi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tonejs_midi__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class MidiFile {
}
var test = new MidiFile();
var openFile = false;
class Pattern {
    constructor(id) {
        this.id = id;
    }
    buildPattern() {
        this.pattern = this.notesStringG + "\r\n" + this.notesStringD + "\r\n" + this.notesStringA + "\r\n" + this.notesStringE;
    }
}
function createWindow() {
    const mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
        width: 600,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile('index.html');
}
electron__WEBPACK_IMPORTED_MODULE_0__["app"].whenReady().then(() => {
    createWindow();
});
function sendMiddleC(midiAccess, portID) {
    var noteOnMessage = [0x90, 60, 0x7f]; // note on, middle C, full velocity
    var output = midiAccess.outputs.get(portID);
    output.send(noteOnMessage); //omitting the timestamp means send immediately.
    output.send([0x80, 60, 0x40], window.performance.now() + 1000.0); // Inlined array creation- note off, middle C,  
    // release velocity = 64, timestamp = now + 1000ms.
}
// Electron -> Angular
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle('getPirates', () => {
    const result = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](__dirname + '/assets/pirates.json');
    return JSON.parse(result.toString());
});
// Angular -> Electron
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on('selectPirate', (event, name) => __awaiter(void 0, void 0, void 0, function* () {
    yield electron__WEBPACK_IMPORTED_MODULE_0__["dialog"].showMessageBox({ message: 'You selected: ' + name });
    event.returnValue = true;
}));
// Electron -> Angular
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle('readTab', () => __awaiter(void 0, void 0, void 0, function* () {
    var result;
    console.log(test);
    if (openFile == true) {
        result = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](test.pathTab, 'utf8');
        openFile = false;
        console.log("if");
    }
    else {
        let oFile = electron__WEBPACK_IMPORTED_MODULE_0__["dialog"].showOpenDialog({
            properties: ['openFile', 'multiSelections'],
            title: "Hier könnte Ihre Werbung stehen!",
            defaultPath: "./src/assets/",
            buttonLabel: "Convert",
            filters: [{ name: 'Tab', extensions: ['txt'] }]
        });
        let filePath = (yield oFile).filePaths;
        result = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](filePath[0], 'utf8');
        console.log("else");
    }
    return result;
}));
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on('angToElec', (event, name) => __awaiter(void 0, void 0, void 0, function* () {
    // create a new midi file
    var midi = new _tonejs_midi__WEBPACK_IMPORTED_MODULE_2__["Midi"]();
    // add a track
    const track = midi.addTrack();
    track.addNote({
        midi: 70,
        time: 0,
        duration: 0.7
    })
        .addNote({
        name: 'D5',
        time: 0,
        duration: 0.8
    })
        .addCC({
        number: 64,
        value: 127,
        time: 0.2
    });
    // write the output
    fs__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"]("output3.mid", new Buffer(midi.toArray()));
    //await dialog.showMessageBox({ message: 'You selected: ' + name });
    console.log("Midi File written 2!");
    event.returnValue = true;
}));
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on('midiRead', (event, name) => __awaiter(void 0, void 0, void 0, function* () {
    // File Dialog
    let oFile = electron__WEBPACK_IMPORTED_MODULE_0__["dialog"].showOpenDialog({
        properties: ['openFile', 'multiSelections'],
        title: "Hier könnte Ihre Werbung stehen!",
        defaultPath: "./src/assets/",
        buttonLabel: "Convert",
        filters: [{ name: 'Midi', extensions: ['mid'] }]
    });
    // File path -> ist ein Array, auch wenn nur eine Datei selektiert ist
    let filePath = (yield oFile).filePaths;
    // Pfad zu JSON Datei
    const rawdata = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"]('./src/assets/converter.json', 'utf8');
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
        let newName = file.replace(/^.*[\\\/]/, '');
        // get file path
        let path = file.replace(newName, "");
        // new file name
        newName = newName.replace(".mid", "_mod.mid");
        let midiData = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](file);
        let mFile = new _tonejs_midi__WEBPACK_IMPORTED_MODULE_2__["Midi"](midiData);
        let trackNotesNew = mFile.tracks[0].notes;
        // iterate midi notes
        trackNotesNew.forEach(note => {
            // iterate JSON midimap file
            converterList.SSD_2_GGD.forEach(midimap => {
                // check if midi notes are in midimap
                if (note.midi == midimap.original) {
                    note.midi = midimap.replace;
                }
            });
        });
        // write new midi file
        fs__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"](path + newName, new Buffer(mFile.toArray()));
        console.log(newName + ": file written");
        newName = "";
    });
    // zeigt alle Presets an
    var outputArray = [];
    for (let element in converterList) {
        outputArray.push({
            preset: element,
        });
    }
    event.returnValue = true;
}));
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on('tabWrite', (event, name, tuning, sortPattern) => __awaiter(void 0, void 0, void 0, function* () {
    let songName = name;
    // notes on strings
    let stringG = "";
    let stringD = "";
    let stringA = "";
    let stringE = "";
    // tuning of bass guitar
    var tuneG;
    var tuneD;
    var tuneA;
    var tuneE;
    // string for tab header
    var writeTuning;
    // 36 = C1
    // arrays for tunings
    const scaleStandard = [[55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
        [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
        [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
        [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]];
    const scaleDropped = [[55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
        [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
        [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
        [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]];
    // choosen scale
    let scale;
    // tuning from angular part (drop down menu)
    switch (tuning) {
        case "standard":
            scale = scaleStandard;
            tuneG = "G -";
            tuneD = "D -";
            tuneA = "A -";
            tuneE = "E -";
            writeTuning = "Standard E [ E, A, D, G ]";
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
    const notesG = scale[0];
    const notesD = scale[1];
    const notesA = scale[2];
    const notesE = scale[3];
    const newLine = "\r\n";
    const underscore = "-----------------------------------";
    let tabComplete = "";
    let oFile = electron__WEBPACK_IMPORTED_MODULE_0__["dialog"].showOpenDialog({
        properties: ['openFile', 'multiSelections'],
        title: "Hier könnte Ihre Werbung stehen!",
        defaultPath: "./src/assets/",
        buttonLabel: "Convert",
        filters: [{ name: 'Midi', extensions: ['mid'] }]
    });
    // File path -> ist ein Array, auch wenn nur eine Datei selektiert ist
    let filePath = (yield oFile).filePaths;
    // iterate selected files
    filePath.forEach(file => {
        // get file name
        let fileName = file.replace(/^.*[\\\/]/, '');
        // get file path
        let filePath = file.replace(fileName, "");
        // create Midi file
        let midiData = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](file);
        let mFile = new _tonejs_midi__WEBPACK_IMPORTED_MODULE_2__["Midi"](midiData);
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
        //trackNotesNew.forEach(note => {
        for (let i = 0; i < trackNotesNew.length; i++) {
            /*
                  console.log("_____")
                  console.log(note.bars);*/
            /*
            console.log("note duration: "+note.duration);
            console.log("note duration ticks: "+note.durationTicks);
            console.log("note ticks: "+note.ticks);
            console.log("note time: "+note.time);
      
            console.log("note bars "+note.bars);*/
            var filler = "";
            var fillerNote = "";
            var checkBars = false;
            // check if bar is full
            if (Number.isInteger(trackNotesNew[i].bars) /*&& note.bars > 1 */ && Number.isInteger(trackNotesNew[i].bars / 2)) {
                checkBars = true;
            }
            // filter 
            var zahl = trackNotesNew[i].bars.toFixed(0);
            console.log(trackNotesNew[i].bars);
            if (Number.isInteger(trackNotesNew[i].bars / 2)) {
            }
            //console.log(trackNotesNew[i].bars.toFixed(0));
            if (checkBars == true) {
                filler = "|---";
                fillerNote = "|-";
            }
            else {
                filler = "--";
                fillerNote = "";
                checkBars = false;
            }
            if (notesE.slice(0, 5).includes(trackNotesNew[i].midi)) {
                //console.log("found");
                stringG += filler;
                stringD += filler;
                stringA += filler;
                stringE += fillerNote + notesE.indexOf(trackNotesNew[i].midi) + "-";
                //console.log(stringE);
            }
            else if (notesA.slice(0, 5).includes(trackNotesNew[i].midi)) {
                //console.log("found");
                stringG += filler;
                stringD += filler;
                stringA += fillerNote + notesA.indexOf(trackNotesNew[i].midi) + "-";
                stringE += filler;
                //console.log(stringA);
            }
            else if (notesD.slice(0, 5).includes(trackNotesNew[i].midi)) {
                //console.log("found");
                stringG += filler;
                stringD += fillerNote + notesD.indexOf(trackNotesNew[i].midi) + "-";
                stringA += filler;
                stringE += filler;
                //console.log(stringD);
            }
            else if (notesG.slice(0, 11).includes(trackNotesNew[i].midi)) {
                //console.log("found");
                stringG += fillerNote + notesG.indexOf(trackNotesNew[i].midi) + "-";
                stringD += filler;
                stringA += filler;
                stringE += filler;
                //console.log(stringG);
            }
            else {
                console.log("note not on Bass fretboard");
            }
        }
        const heute = new Date();
        // write the stream
        // header
        var stream = fs__WEBPACK_IMPORTED_MODULE_1__["createWriteStream"](filePath + fileName.replace(".mid", "_TAB.txt"));
        //midiFile.pathTab = filePath+fileName.replace(".mid","_TAB.txt");
        test.pathTab = filePath + fileName.replace(".mid", "_TAB.txt");
        //console.log(midiFile);
        stream.write("");
        stream.write(newLine);
        stream.write("Song: " + songName + newLine);
        stream.write("Data: " + filePath + fileName + newLine);
        stream.write("Tuning: " + writeTuning + newLine);
        stream.write("BPM: " + midiBpm.toFixed(2) + newLine);
        stream.write(heute.toLocaleString("de-DE") + newLine + newLine);
        stream.write(underscore + newLine + newLine);
        //console.log(stringE.indexOf("|"));
        //var slicePos: number = stringE.indexOf("|");
        // collecting all "|" chars
        let findeTakt = [];
        for (let i = 0; i < stringE.length; i++) {
            if (stringE[i] == "|") {
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
        let savePattern = [];
        let oldValue = 0;
        for (let i = 0; i < findeTakt.length; i++) {
            if (findeTakt[i] > 0) {
                patternArray[i] = new Pattern(i);
                patternArray[i].tuning = tuning;
                if (sortPattern == false) {
                    stream.write(tuneG + stringG.slice(0, findeTakt[i] - oldValue) + newLine);
                    stream.write(tuneD + stringD.slice(0, findeTakt[i] - oldValue) + newLine);
                    stream.write(tuneA + stringA.slice(0, findeTakt[i] - oldValue) + newLine);
                    stream.write(tuneE + stringE.slice(0, findeTakt[i] - oldValue) + newLine + newLine);
                }
                patternArray[i].notesStringG = (stringG.slice(0, findeTakt[i] - oldValue));
                patternArray[i].notesStringD = (stringD.slice(0, findeTakt[i] - oldValue));
                patternArray[i].notesStringA = (stringA.slice(0, findeTakt[i] - oldValue));
                patternArray[i].notesStringE = (stringE.slice(0, findeTakt[i] - oldValue));
                patternArray[i].buildPattern();
                savePattern.push([stringG.slice(0, findeTakt[i] - oldValue), stringD.slice(0, findeTakt[i] - oldValue), stringA.slice(0, findeTakt[i] - oldValue), stringE.slice(0, findeTakt[i] - oldValue)]);
                stringG = stringG.slice(findeTakt[i] - oldValue);
                stringD = stringD.slice(findeTakt[i] - oldValue);
                stringA = stringA.slice(findeTakt[i] - oldValue);
                stringE = stringE.slice(findeTakt[i] - oldValue);
                oldValue = findeTakt[i];
            }
        }
        let countPattern = 0;
        var patternArraySort = new Array();
        let schreiben = false;
        let counter = 0;
        let next = 0;
        // last pattern of tab, no comparison possible
        let endTab = false;
        for (let i = 1; i < patternArray.length; i++) {
            next = i + 1;
            if (next >= patternArray.length) {
                endTab = true;
            }
            if (endTab == false) {
                if (patternArray[i].pattern == patternArray[next].pattern) {
                    //console.log("hit!")
                    counter += 1;
                    //schreiben = false;
                }
                else {
                    schreiben = true;
                }
            }
            if (schreiben == true || endTab == true) {
                // new array with multiple pattern, not used
                patternArraySort[i] = new Pattern(i);
                patternArraySort[i].pattern = patternArray[i].pattern;
                patternArraySort[i].patternCount = counter;
                if (sortPattern == true) {
                    // write sorted stream
                    stream.write(counter + 1 + "x" + newLine);
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
                }*/ /*

        
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
}));
/* Ab hier nur Schrott */
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on('einTest', (event, name) => __awaiter(void 0, void 0, void 0, function* () {
    yield electron__WEBPACK_IMPORTED_MODULE_0__["dialog"].showMessageBox({ message: name });
    alert("nööö");
    event.returnValue = true;
}));
function nureintest() {
    fs__WEBPACK_IMPORTED_MODULE_1__["writeFile"]('mynewfile3.txt', 'Hello content!', function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
}
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle('getIrgendwas', () => {
    return "fuck";
});
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle('electronMessage', () => {
    fs__WEBPACK_IMPORTED_MODULE_1__["appendFile"]('mynewfile4.txt', 'Hello content!', function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
    console.log("Hier!!!");
    const result = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](__dirname + '/assets/pirates.json');
    return JSON.parse(result.toString());
});
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle('electronMessage2', () => {
    fs__WEBPACK_IMPORTED_MODULE_1__["appendFile"]('mynewfile5.txt', 'Hello content!', function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
    console.log("Hier!!!");
    const result = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](__dirname + '/assets/pirates.json');
    return "fuck";
});
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on('hallo', (event, name) => __awaiter(void 0, void 0, void 0, function* () {
    fs__WEBPACK_IMPORTED_MODULE_1__["writeFile"]('mynewfile3.txt', name, function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
    alert("aha");
    event.returnValue = true;
}));


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=shell.js.map