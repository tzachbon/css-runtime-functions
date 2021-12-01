import { Lighten } from './functions/lighten.js';

if (typeof registerPaint !== 'undefined') {
  registerPaint('lighten', Lighten);
}
