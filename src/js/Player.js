import Arm from './Arm';
import Sword from './Sword';
import Knife from './Knife';

class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.weapon = new Arm();
    this.description = 'Игрок';
    this.position = position;
    this.name = name;
  }

  getLuck() {
    const randomNumber = Math.ceil(Math.random() * 100);
    return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    return (this.attack + this.weapon.getDamage()) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life -= damage;
    if (this.life < 0) {
      this.life = 0;
    }
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position -= moveDistance;
  }

  moveRight(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position += moveDistance;
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(-distance);
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
    } else if (!this.dodged()) {
      this.takeDamage(damage);
    } 
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      if (this.weapon instanceof Sword) {
        this.weapon = new Knife();
      } else if (this.weapon instanceof Knife) {
        this.weapon = new Arm();
      }
    }
  }

  tryAttack(enemy) {
    const distance = Math.abs(this.position - enemy.position);
    if (distance > this.weapon.range) return;
    this.weapon.takeDamage(10 * this.getLuck());
    enemy.takeAttack(this.getDamage(distance));
    if (this.position === enemy.position) {
      enemy.moveRight(1);
      enemy.takeAttack(this.getDamage(distance) * 2);
    }
  }

  chooseEnemy(players) {
    const alivePlayers = players.filter(player => !player.isDead() && player !== this);
    return alivePlayers.reduce((prev, curr) => (prev.life < curr.life) ? prev : curr);
  }

  moveToEnemy(enemy) {
    const distance = enemy.position - this.position;
    this.move(distance);
  }

  turn(players) {
    const enemy = this.chooseEnemy(players);
    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
  }
}

export default Player;
