// ============================================================
// 					Five Nations bootstrap file
// ============================================================

// !!! This is the entry point for webpack !!!

import App from './Fivenations';
import Scriptbox from './common/Scriptbox';

// complementary modules that must be exposed to 3rd party code
// ------------------------------------------------------------

// Scriptbox
// ---------
// Scriptbox provides opportunity for 3rd party consumer code
// to specify a FiveNation game sequence. A given game sequence
// is attached to a unique ID that can be executed after the
// Application is booted and the game scene is active.
//
// e.g.: Pre-defined game levels are scripted as a ScriptBox
// entry
App.Scriptbox = Scriptbox;

// Starfield
// ---------
// Starfield must be configurable from a ScriptBox entry in
// order to provide abaility for 3rd party consumer code
// to specify the Starfield objects
App.Starfield = {};
// Any custom generator must inherit from SpaceObjectGenerator
App.Starfield.SpaceObjectGenerator = SpaceObjectGenerator;
// Predefined generators
App.Starfield.PlaneAreaGenerator = PlaneAreaGenerator;

// Global scope
// ------------------------------------------------------------
// Exponses the Application to the global scope so that
// any HTML5 compatible platform can create and execute a
// Five Nations game
window.FiveNations = App;
