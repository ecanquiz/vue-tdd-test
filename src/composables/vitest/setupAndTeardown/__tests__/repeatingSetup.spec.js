import * as City from '../City';

/*beforeEach(() => {
  return City.initializeDatabase();
});*/

beforeEach(() => {
  //return City.initializeDatabase();
  City.initializeDatabase();
});

afterEach(() => {
  City.clearDatabase();
});

test('city database has Vienna', () => {
  expect(City.isIt('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(City.isIt('San Juan')).toBeTruthy();
});


