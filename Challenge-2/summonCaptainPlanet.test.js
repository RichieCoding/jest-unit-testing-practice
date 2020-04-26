const summonCaptainPlanet = require('./summonCaptainPlanet');

test('Uppercase and concat "!" to end of each element', () => {
  const planeteerCalls = ['earth', 'wind', 'fire', 'water', 'heart'];
  expect(summonCaptainPlanet(planeteerCalls)).toStrictEqual([
    'EARTH!',
    'WIND!',
    'FIRE!',
    'WATER!',
    'HEART!'
  ]);
  expect(summonCaptainPlanet(planeteerCalls).length).toBe(5)
});
