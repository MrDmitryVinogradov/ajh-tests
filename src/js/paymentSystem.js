export default function paymentSystem(value) {
  const substr4 = Number(value.substring(0, 4));
  const substr3 = Number(value.substring(0, 3));
  const substr2 = Number(value.substring(0, 2));
  if (/^4/.test(value)) {
    return 'visa';
  }
  if ((substr4 > 2220 && substr4 < 2721) || (substr2 > 51 && substr2 < 56)) {
    return 'master';
  }
  if (substr2 === 34 || substr2 === 37) {
    return 'amex';
  }
  if (substr4 === 6011 || (substr3 > 643 && substr3 < 650) || substr2 === 65) {
    return 'discover';
  }
  if (substr4 > 3527 && substr4 < 3590) {
    return 'jsb';
  }
  if (substr4 > 2199 && substr4 < 2205) {
    return 'mir';
  }
  return null;
}
