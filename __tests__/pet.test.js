import { Pet } from './../src/pet.js';

describe('Pet', () => {
  jest.useFakeTimers();
  let coco;

  beforeEach(function() {
    coco = new Pet("Coco");
    coco.setHunger();
    coco.didYouGetFed();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name, food level, health level, energy level, sleep level, annoyed level, bathroom level, and snuggle level when created', () => {
    expect(coco.name).toEqual("Coco");
    expect(coco.foodLevel).toEqual(10);
    expect(coco.healthLevel).toEqual(100);
    expect(coco.energyLevel).toEqual(10);
    expect(coco.sleepLevel).toEqual(0);
    expect(coco.snuggleLevel).toEqual(5);
    expect(coco.annoyedLevel).toEqual(0)
    expect(coco.bathroomLevel).toEqual(0);
    expect(coco.alive).toEqual(true);
    expect(coco.asleep).toEqual(false);
  });

  test('should have a food level of 8 after 20 seconds', () => {
    jest.advanceTimersByTime(20001);
    expect(coco.foodLevel).toEqual(8);
  });

  test('should have a food level of 10 if pet is fed', () => {
    jest.advanceTimersByTime(19001)
    coco.feed();
    expect(coco.foodLevel).toEqual(10);
  });

  test('should lose 10 health if 100 seconds pass without being fed', () => {
    jest.advanceTimersByTime(100001);
    expect(coco.healthLevel).toEqual(90);
  });

  test('should have asleep set to true, add 10 to health, and then change asleep to false and put sleep lvl back to 0 after 20 seconds', () => {
    coco.healthLevel = 90;
    coco.goToSleep();
    expect(coco.asleep).toEqual(true);
    expect(coco.healthLevel).toEqual(100);
    jest.advanceTimersByTime(20001);
    expect(coco.asleep).toEqual(false);
    expect(coco.sleepLevel).toEqual(0);
    
  });

  test('should have a food level of 0, a sleeplevel of 10, and energy level of 0 after 10 seconds of walking', () => {
    coco.walk();
    jest.advanceTimersByTime(10001);
    expect(coco.foodLevel).toEqual(0);
    expect(coco.sleepLevel).toEqual(10);
    expect(coco.energyLevel).toEqual(0);
  });
  
  test('should have a bathroom level set to 0 after being walked', () => {
    coco.bathroomLevel = 10;
    coco.walk();
    expect(coco.bathroomLevel).toEqual(0);
  });




});