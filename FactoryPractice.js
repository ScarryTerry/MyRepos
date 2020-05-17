class Amazon {
  constructor() {
    this.basic = 'Dexterity/Helth'
  }
}
class Necromancer {
  constructor() {
    this.basic = 'Any Stat'
  }
}
class Assassin {
  constructor() {
    this.basic = 'Dexterity'
  }
}
class Barbarian {
  constructor() {
    this.basic = 'Strenght'
  }
}
class Paladin {
  constructor() {
    this.basic = 'Strenght/Intellect'
  }
}
class Sorcess {
  constructor() {
    this.basic = 'Intellect/Helth'
  }
}
class Druid {
  constructor() {
    this.basic = 'Any Stat'
  }
}


class Character {
  create(type) {
    let Character
    if (type === 'Amazon') {
      Character = new Amazon()
    } else if (type === 'Necromancer') {
      Character = new Necromancer()
    } else if (type === 'Assassin') {
      Character = new Assassin()
    } else if (type === 'Barbarian') {
      Character = new Barbarian()
    } else if (type === 'Paladin') {
      Character = new Paladin
    } else if (type === 'Sorcess') {
      Character = new Sorcess()
    } else if (type === 'Druid') {
      Character = new Druid()
    }
    Character.type = type;
    Character.stats = function () {
      console.log(`${this.type}: basic ${this.basic}`)
    }
    return Character;
  }
}

const factory = new Character()
Amazon = factory.create('Amazon');
Necromancer = factory.create('Necromancer');
Assassin = factory.create('Assassin');
Barbarian = factory.create('Barbarian');
Paladin = factory.create('Paladin');
Sorcess = factory.create('Sorcess');
Druid = factory.create('Druid');

Amazon.stats();
Necromancer.stats();
Assassin.stats();
Barbarian.stats();
Paladin.stats();
Sorcess.stats();
Druid.stats();