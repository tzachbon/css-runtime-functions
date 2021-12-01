import { Darken } from './functions/darken.js';
import { Lighten } from './functions/lighten.js';

if (typeof registerPaint !== 'undefined') {
  registerPaint('lighten', Lighten);
  registerPaint('darken', Darken);
}
