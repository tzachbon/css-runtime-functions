export function parseAmount(amount) {
  if (amount instanceof CSSUnitValue) {
    return amount.value;
  } else {
    return parseInt(amount[0].trim().replace('%', ''));
  }
}
