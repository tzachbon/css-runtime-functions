import { Lighten } from './lighten.js';

if (typeof registerPaint !== 'undefined') {
  registerPaint('lighten', Lighten);
}
