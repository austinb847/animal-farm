export class Pet {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.healthLevel = 100;
    this.energyLevel = 10;
    this.sleepLevel = 0;
    this.snuggleLevel = 5;
    this.annoyedLevel = 0;
    this.bathroomLevel = 0;
    this.alive = true;
    this.asleep = false;
  }

  setHunger() {
    setInterval( () => {
      this.foodLevel -= 2;
    }, 20000);
  }

  feed() {
    this.foodLevel = 10;
    this.healthLevel += 5;
    this.energyLevel += 2;
  }

  didYouGetFed() {
    setInterval(() => {
      if(this.foodLevel > 0) {
        return true;
      } else {
        this.healthLevel -= 10;
      }
    }, 100000);
  }

  walk() {
    this.bathroomLevel = 0;
    setInterval( () => {
      this.foodLevel -= 1;
      this.sleepLevel += 1;
      this.energyLevel -= 1;
    }, 1000);
  }

  stopWalking() {
    clearInterval(this.walk);
  }

  

  didYouWalkTooLong() {
    if(this.sleepLevel >= 10) {
      this.stopWalking();
      this.goToSleep();
      return true;
    } else{
      return false;
    }
  }

  goToSleep() {
    this.asleep = true;
    this.healthLevel += 10;
    setTimeout(() => {
      this.asleep = false
      this.sleepLevel = 0;
    }, 20000);
  }

}