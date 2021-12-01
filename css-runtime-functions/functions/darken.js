import { parseAmount } from '../helpers/parse-amount.js';

export class Darken {
  static registerProperties() {
    if (typeof CSS === 'undefined') {
      throw new Error('Can not register CSS properties when it is not supported or exists');
    }

    CSS.registerProperty({
      name: Darken.properties.COLOR,
      syntax: '<color>',
      inherits: false,
      initialValue: 'transparent',
    });

    CSS.registerProperty({
      name: Darken.properties.AMOUNT,
      syntax: '<percentage>',
      inherits: false,
      initialValue: '0%',
    });
  }

  static get properties() {
    return {
      COLOR: '--darken-color',
      AMOUNT: '--darken-amount',
    };
  }

  static get inputProperties() {
    return [Darken.properties.COLOR, Darken.properties.AMOUNT];
  }
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {*} size
   * @param {*} properties
   */
  paint(ctx, size, properties) {
    const [color, amount] = [
      properties.get(Darken.properties.COLOR),
      parseAmount(properties.get(Darken.properties.AMOUNT) || CSS.percent(0)),
    ];

    ctx.fillStyle = color; // normalize the color to hex value
    ctx.fillStyle = `#${darken(ctx.fillStyle, amount)}`;

    ctx.fillRect(0, 0, size.width, size.height);
  }
}

function darken(color, percent) {
  color = color.startsWith('#') ? color.substring(1) : color;

  let num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) - amt,
    B = ((num >> 8) & 0x00ff) - amt,
    G = (num & 0x0000ff) - amt;

  return (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1);
}
