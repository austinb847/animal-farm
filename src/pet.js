export class Pet {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.healthLevel = 100;
    this.energyLevel = 10;
    this.sleepLevel = 10;
    this.snuggleLevel = 5;
    this.annoyedLevel = 0;
    this.bathroomLevel = false;
  }

  setHunger() {
    setInterval( () => {
      this.foodLevel -= 5;
    }, 20000);
  }

  feed() {
    this.foodLevel = 10;
  }
}