import Dwarf from './Dwarf';
import Crossbowman from './Crossbowman';
import Demourge from './Demourge';
import Warrior from './Warrior';
import Archer from './Archer';
import Mage from './Mage';

// const characters = [
//   { name: 'мечник', health: 10 },
//   { name: 'маг', health: 100 },
//   { name: 'маг', health: 0 },
//   { name: 'лучник', health: 0 },
// ];

// const alive = characters.filter(item => item.health > 0);
// console.log(alive);

function logEvent(message) {
  const logElement = document.getElementById('game-log');
  const newLog = document.createElement('p');
  newLog.textContent = message;
  logElement.appendChild(newLog);
}

export default function play(players) {
  logEvent('| Начало игры |');
  while (players.filter(player => !player.isDead()).length > 1) {
    players.forEach(player => {
      if (!player.isDead()) {
        player.turn(players);
        logEvent(`${player.name} совершил ход.`);
      }
    });
  }
  const winner = players.find(player => !player.isDead());
  logEvent(`Победитель: ${winner.name}`);
}

