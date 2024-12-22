import Archer from './Archer';
import LongBow from './LongBow';

class Crossbowman extends Archer {
  constructor(position, name) {
    super(position, name);
    this.life = 85;
    this.attack = 8;
    this.luck = 15;
    this.description = 'Арбалетчик';
    this.weapon = new LongBow();
  }
}

export default Crossbowman;
