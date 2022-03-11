import paymentSystem from '../js/paymentSystem'

test.each([
  ['should return visa','4485183141069377','visa'],
  ['should return master','5363594473058784','master'],
  ['should return amex', '379739819231586', 'amex' ],
  ['should return discover', '6011837856761399', 'discover'],
  ['should return jsb', '3542096049673095', 'jsb'],
  ['should return mir', '2201382000000013', 'mir'],
  ['should return null', '1201382000000013', null]
])
  (('it %s'),(_, value,expected) => {
    expect(paymentSystem(value)).toBe(expected);})