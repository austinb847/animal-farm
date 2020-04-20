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

test('should have a name, food level, health level, energy level, sleep level, annoyed level, and snuggle level when created', () => {
  expect(coco.name).toEqual("Coco");
  expect(coco.foodLevel).toEqual(10);
  expect(coco.healthLevel).toEqual(100);
  expect(coco.energyLevel).toEqual(10);
  expect(coco.sleepLevel).toEqual(10);
  expect(coco.snuggleLevel).toEqual(5);
  expect(coco.annoyedLevel).toEqual(0);
});







});