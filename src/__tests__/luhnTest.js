import luhn from '../js/luhn';

test('should return true', () => {
  expect(luhn('2221001445766642')).toBe(true);
});

test('should return false on wrong number', () => {
  expect(luhn('2221001445735642')).toBe(false);
});

test('should return false on too long number', () => {
  expect(luhn('2221001443452553245735642')).toBe(false);
});

test('should return false on too short number', () => {
  expect(luhn('22210')).toBe(false);
});
