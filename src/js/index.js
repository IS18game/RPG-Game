import Dwarf from './Dwarf';
import Crossbowman from './Crossbowman';
import Demourge from './Demourge';
import Warrior from './Warrior';
import Archer from './Archer';
import Mage from './Mage';
import play from './game';

const players = [
  new Warrior(0, 'Воин 1'),
  new Archer(2, 'Лучник 1'),
  new Mage(4, 'Маг 1'),
  new Dwarf(6, 'Гном 1'),
  new Crossbowman(8, 'Арбалетчик 1'),
  new Demourge(10, 'Демиург 1')
];

play(players);

