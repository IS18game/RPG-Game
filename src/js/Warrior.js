import Player from './Player';
import Sword from './Sword';

class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.description = 'Воин';
    this.weapon = new Sword();
  }

  takeDamage(damage) {
    if (this.life < 60 && this.getLuck() > 0.8 && this.magic > 0) {
      this.magic -= damage;
      if (this.magic < 0) {
        this.magic = 0;
      }
    } else {
      super.takeDamage(damage);
    }
  }
}

export default Warrior;
