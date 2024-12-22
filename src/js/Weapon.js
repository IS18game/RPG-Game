class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initDurability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability >= 0.3 * this.initDurability) {
      return this.attack;
    } else if (this.durability > 0) {
      return this.attack / 2;
    } else {
      return 0;
    }
  }

  isBroken() {
    return this.durability === 0;
  }
}

export default Weapon;
