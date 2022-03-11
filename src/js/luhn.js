export default function luhn(value) {
  const replacedValue = value.replace(/\D/g, '');
  if (replacedValue.length < 15 || replacedValue.length > 19) {
    return false;
  }

  let nCheck = 0;
  let bEven = false;

  for (let n = replacedValue.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(replacedValue.charAt(n), 10);

    if (bEven && (nDigit * 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}
