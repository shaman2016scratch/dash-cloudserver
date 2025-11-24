const username = require('../username');

test('isGenerated', () => {
  expect(username.isGenerated('user')).toBe(false);
  expect(username.isGenerated('user123')).toBe(true);
  expect(username.isGenerated('user123456')).toBe(true);
  expect(username.isGenerated('User123456')).toBe(true);
  expect(username.isGenerated('user1234563209484')).toBe(false);
  expect(username.isGenerated('user123e')).toBe(false);
  expect(username.isGenerated('user_123')).toBe(false);
  expect(username.isGenerated('euser123')).toBe(false);
});
