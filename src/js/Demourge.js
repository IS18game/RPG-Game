import Mage from './Mage';
import StormStaff from './StormStaff';

class Demourge extends Mage {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = 'Демиург';
    this.weapon = new StormStaff();
  }

  getDamage(distance) {
    if (this.magic > 0 && this.getLuck() > 0.6) {
      return 1.5 * super.getDamage(distance)
    } else {
      return super.getDamage(distance)
    }
  }
}

export default Demourge;
