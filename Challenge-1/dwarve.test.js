const dwarfRollCall = require('./dwarve');

test('prints out a string with dwarfs in a numbered list based on an array', () => {
  const dwarve = ['Doc', 'Dopey', 'Bashful', 'Grumpy'];
  expect(dwarfRollCall(dwarve)).toBe(
    '1. Doc 2. Dopey 3. Bashful 4. Grumpy'
  );
});
