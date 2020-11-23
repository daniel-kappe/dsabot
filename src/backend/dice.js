class Dice {
  static diceSides=null;

  static rollDice(numberDice) {
    if (Number.isInteger(numberDice)) {
      if (numberDice >= 0) {
        return Array(numberDice).fill(1).map(() => Math.ceil(Math.random() * this.diceSides));
      }
      throw Error(`Dice.rollDice(number) only takes input >= 1`)
    }
    throw Error(`Dice.rollDice(number) only takes Integer inputs`);
  }
}

export class D4 extends Dice {
  static diceSides = 4;
}

export class D6 extends Dice {
  static diceSides = 6;
}

export class D8 extends Dice {
  static diceSides = 8;
}

export class D10 extends Dice {
  static diceSides = 10;
}

export class D12 extends Dice {
  static diceSides = 12;
}

export class D20 extends Dice {
  static diceSides = 20;
}

export class D100 extends Dice {
  static diceSides = 100;
}
