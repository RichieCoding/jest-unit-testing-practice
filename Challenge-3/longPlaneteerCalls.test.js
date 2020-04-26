const longPlaneteerCalls = require('./longPlaneteerCalls');

describe('longPlanteerCalls', () => {
  test('returns true if any calls are longer than 4 characters', () => {
    expect(longPlaneteerCalls(['earth', 'wind', 'heart', 'fire'])).toBe(true);
  });

  test('returns false if any calls are not longer than 4 characters', () => {
    expect(longPlaneteerCalls(['wind', 'fire', 'hi'])).toBe(false);
  });
});
