import luhn from '../js/luhn';

test.each([
  ['should return false on wrong number','4485183141169377', false],
  ['should return true','5363594473058784', true],
  ['should return false on too long number','44851831411693735253252357', false],
  ['should return false on too short number','1351', false]
])
  (('it %s'),(_, value,expected) => {
    expect(luhn(value)).toBe(expected);});