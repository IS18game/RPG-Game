import Warrior from './Warrior';
import Axe from './Axe';

class Dwarf extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = 'Гном';
    this.weapon = new Axe();
  }

  takeDamage(damage) {
    const hitCount = Math.ceil(Math.random() * 6);
    if (hitCount === 6 && this.getLuck() > 0.5) {
      super.takeDamage(damage / 2);
    } else {
      super.takeDamage(damage);
    }
  }
}

export default Dwarf;
