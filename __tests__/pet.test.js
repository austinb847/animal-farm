import { Pet } from './../src/pet.js';

describe('Pet', () => {
jest.useFakeTimers();
let coco;

beforeEach(function() {
  coco = new Pet("Coco");
});

afterEach(function() {
  jest.clearAllTimers();
});

test('should have a name, food level, health level, energy level, sleep level, annoyed level, bathroom level, and snuggle level when created', () => {
  expect(coco.name).toEqual("Coco");
  expect(coco.foodLevel).toEqual(10);
  expect(coco.healthLevel).toEqual(100);
  expect(coco.energyLevel).toEqual(10);
  expect(coco.sleepLevel).toEqual(10);
  expect(coco.snuggleLevel).toEqual(5);
  expect(coco.annoyedLevel).toEqual(0)
  expect(coco.bathroomLevel).toEqual(false);
});

test('should have a food level of 5 after 3001 milliseconds', () => {
  jest.advanceTimersByTime(3001);
  expect(coco.foodLevel).toEqual(5);
});





});