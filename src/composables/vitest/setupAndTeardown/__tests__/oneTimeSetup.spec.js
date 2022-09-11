import { afterAll, beforeAll, expect, test } from 'vitest'
import * as City from '../City';

beforeAll(() => {
  //return City.initializeDatabase();
  City.initializeDatabase();
});

afterAll(() => {
  City.clearDatabase();
});

test('city database has Vienna', () => {  
  expect(City.isIt('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {  
  expect(City.isIt('San Juan')).toBeTruthy();
});


