const whoIsASoftwareEngineer = require('./whoIsASoftwareEngineer');
const friends = {
  0: {
    name: 'Josh',
    age: 27,
    weight: 302,
    engineer: false
  },
  1: {
    name: 'Rich',
    age: 28,
    weight: 160,
    engineer: true
  },
  2: {
    name: 'Eddy',
    age: 28,
    weight: 200,
    engineer: true
  },
  3: {
    name: 'Tim',
    age: 29,
    weight: 120,
    engineer: false
  }
};

const none = {
  0: {
    name: "someone",
    age: 21,
    weight: 155,
    engineer: false
  }
}

describe(whoIsASoftwareEngineer, () => {
  test('Returns an array of people who are software engineers in the object', () => {
    expect(whoIsASoftwareEngineer(friends)).toStrictEqual(['Rich', 'Eddy']);
  });

  test('Returns a string "Eddy will become one soon!" if there are no engineers', () => {
    expect(whoIsASoftwareEngineer(none)).toBe("Eddy will become one soon!")
  });
});
