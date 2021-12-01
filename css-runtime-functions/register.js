import { Lighten } from './functions/lighten.js';

// Load the variables for typings
Lighten.registerProperties();

// Registering the worklet (for paint API)
CSS.paintWorklet.addModule('./worklet.js');
