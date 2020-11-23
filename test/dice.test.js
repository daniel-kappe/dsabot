import { expect, assert } from 'chai';
import { D4, D6, D8, D10, D12, D20, D100 } from '../src/backend/dice';


describe("Testing available dice set - D4", () => {
  it("does only roll integer values", () => {
    const numberRolls = 100;
    const rolls = D4.rollDice(numberRolls);
    const integerRolls = rolls.filter(roll => Number.isInteger(roll)).length;
    expect(integerRolls).to.equal(numberRolls);
  });

  it("does not roll values above 4 or below 1", () => {
    const rolls = D4.rollDice(100);
    const rollsAbove = rolls.filter(roll => roll > 4).length;
    const rollsBelow = rolls.filter(roll => roll < 1).length;
    expect(rollsAbove).to.equal(0);
    expect(rollsBelow).to.equal(0);
  });

  it("should have a mean of about 2.5", () => {
    const numberRolls = 1000;
    const rolls = D4.rollDice(numberRolls);
    const sumRolls = rolls.reduce((sum, current) => sum + current)
    const mean = sumRolls / numberRolls;
    expect(mean).within(2.4,2.6);
  });

  it("should have a standard deviation of about ", () => {
    const numberRolls = 1000;
    const rolls = D4.rollDice(numberRolls);
    const variance = rolls.reduce((moment, current) => moment + (current - 2.5) ** 2) / numberRolls;
    expect(variance).within(1, 1.5);
  });

  it("should return [] on 0 input", () => {
    const rolls = D4.rollDice(0);
    expect(rolls).to.deep.equal([]);
  })

  it("should raise an error on faulty input", () => {
    expect(() => D4.rollDice(1.2)).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D4.rollDice("1")).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D4.rollDice([1])).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D4.rollDice(-1)).to.throw(Error, `Dice.rollDice(number) only takes input >= 1`);
  });
});

describe("Testing available dice set - D6", () => {
  it("does only roll integer values", () => {
    const numberRolls = 1000;
    const rolls = D6.rollDice(numberRolls);
    const integerRolls = rolls.filter(roll => Number.isInteger(roll)).length;
    expect(integerRolls).to.equal(numberRolls);
  });

  it("does not roll values above 6 or below 1", () => {
    const rolls = D6.rollDice(1000);
    const rollsAbove = rolls.filter(roll => roll > 6).length;
    const rollsBelow = rolls.filter(roll => roll < 1).length;
    expect(rollsAbove).to.equal(0);
    expect(rollsBelow).to.equal(0);
  });

  it("should have a mean of about 3.5", () => {
    const numberRolls = 1000;
    const rolls = D6.rollDice(numberRolls);
    const sumRolls = rolls.reduce((sum, current) => sum + current)
    const mean = sumRolls / numberRolls;
    expect(mean).within(3.3,3.7);
  });

  it("should have a standard deviation of about ", () => {
    const numberRolls = 1000;
    const rolls = D6.rollDice(numberRolls);
    const variance = rolls.reduce((moment, current) => moment + (current - 3.5) ** 2) / numberRolls;
    expect(variance).within(2.7, 3.1);
  });

  it("should return [] on 0 input", () => {
    const rolls = D6.rollDice(0);
    expect(rolls).to.deep.equal([]);
  })

  it("should raise an error on faulty input", () => {
    expect(() => D6.rollDice(1.2)).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D6.rollDice("1")).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D6.rollDice([1])).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D6.rollDice(-1)).to.throw(Error, `Dice.rollDice(number) only takes input >= 1`);
  });
});

describe("Testing available dice set - D8", () => {
  it("does only roll integer values", () => {
    const numberRolls = 1000;
    const rolls = D8.rollDice(numberRolls);
    const integerRolls = rolls.filter(roll => Number.isInteger(roll)).length;
    expect(integerRolls).to.equal(numberRolls);
  });

  it("does not roll values above 8 or below 1", () => {
    const rolls = D8.rollDice(1000);
    const rollsAbove = rolls.filter(roll => roll > 8).length;
    const rollsBelow = rolls.filter(roll => roll < 1).length;
    expect(rollsAbove).to.equal(0);
    expect(rollsBelow).to.equal(0);
  });

  it("should have a mean of about 4.5", () => {
    const numberRolls = 1000;
    const rolls = D8.rollDice(numberRolls);
    const sumRolls = rolls.reduce((sum, current) => sum + current)
    const mean = sumRolls / numberRolls;
    expect(mean).within(4.25,4.75);
  });

  it("should have a standard deviation of about 5.25", () => {
    const numberRolls = 1000;
    const rolls = D8.rollDice(numberRolls);
    const variance = rolls.reduce((moment, current) => moment + (current - 4.5) ** 2) / numberRolls;
    expect(variance).within(5, 5.5);
  });

  it("should return [] on 0 input", () => {
    const rolls = D8.rollDice(0);
    expect(rolls).to.deep.equal([]);
  })

  it("should raise an error on faulty input", () => {
    expect(() => D8.rollDice(1.2)).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D8.rollDice("1")).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D8.rollDice([1])).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D8.rollDice(-1)).to.throw(Error, `Dice.rollDice(number) only takes input >= 1`);
  });
});

describe("Testing available dice set - D10", () => {
  it("does only roll integer values", () => {
    const numberRolls = 100;
    const rolls = D10.rollDice(numberRolls);
    const integerRolls = rolls.filter(roll => Number.isInteger(roll)).length;
    expect(integerRolls).to.equal(numberRolls);
  });

  it("does not roll values above 10 or below 1", () => {
    const rolls = D10.rollDice(100);
    const rollsAbove = rolls.filter(roll => roll > 10).length;
    const rollsBelow = rolls.filter(roll => roll < 1).length;
    expect(rollsAbove).to.equal(0);
    expect(rollsBelow).to.equal(0);
  });

  it("should have a mean of about 5.5", () => {
    const numberRolls = 1000;
    const rolls = D10.rollDice(numberRolls);
    const sumRolls = rolls.reduce((sum, current) => sum + current)
    const mean = sumRolls / numberRolls;
    expect(mean).within(5.25,5.75);
  });

  it("should have a standard deviation of about 8.25", () => {
    const numberRolls = 1000;
    const rolls = D10.rollDice(numberRolls);
    const variance = rolls.reduce((moment, current) => moment + (current - 5.5) ** 2) / numberRolls;
    expect(variance).within(8, 8.5);
  });

  it("should return [] on 0 input", () => {
    const rolls = D10.rollDice(0);
    expect(rolls).to.deep.equal([]);
  })

  it("should raise an error on faulty input", () => {
    expect(() => D10.rollDice(1.2)).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D10.rollDice("1")).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D10.rollDice([1])).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D10.rollDice(-1)).to.throw(Error, `Dice.rollDice(number) only takes input >= 1`);
  });
});

describe("Testing available dice set - D12", () => {
  it("does only roll integer values", () => {
    const numberRolls = 100;
    const rolls = D12.rollDice(numberRolls);
    const integerRolls = rolls.filter(roll => Number.isInteger(roll)).length;
    expect(integerRolls).to.equal(numberRolls);
  });

  it("does not roll values above 12 or below 1", () => {
    const rolls = D12.rollDice(100);
    const rollsAbove = rolls.filter(roll => roll > 12).length;
    const rollsBelow = rolls.filter(roll => roll < 1).length;
    expect(rollsAbove).to.equal(0);
    expect(rollsBelow).to.equal(0);
  });

  it("should have a mean of about 6.5", () => {
    const numberRolls = 2000;
    const rolls = D12.rollDice(numberRolls);
    const sumRolls = rolls.reduce((sum, current) => sum + current)
    const mean = sumRolls / numberRolls;
    expect(mean).within(6.2,6.8);
  });

  it("should have a standard deviation of about 11.92", () => {
    const numberRolls = 2000;
    const rolls = D12.rollDice(numberRolls);
    const variance = rolls.reduce((moment, current) => moment + (current - 6.5) ** 2) / numberRolls;
    expect(variance).within(11.5, 12.4);
  });

  it("should return [] on 0 input", () => {
    const rolls = D12.rollDice(0);
    expect(rolls).to.deep.equal([]);
  })

  it("should raise an error on faulty input", () => {
    expect(() => D12.rollDice(1.2)).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D12.rollDice("1")).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D12.rollDice([1])).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D12.rollDice(-1)).to.throw(Error, `Dice.rollDice(number) only takes input >= 1`);
  });
});

describe("Testing available dice set - D20", () => {
  it("does only roll integer values", () => {
    const numberRolls = 1000;
    const rolls = D20.rollDice(numberRolls);
    const integerRolls = rolls.filter(roll => Number.isInteger(roll)).length;
    expect(integerRolls).to.equal(numberRolls);
  });

  it("does not roll values above 20 or below 1", () => {
    const rolls = D20.rollDice(1000);
    const rollsAbove = rolls.filter(roll => roll > 20).length;
    const rollsBelow = rolls.filter(roll => roll < 1).length;
    expect(rollsAbove).to.equal(0);
    expect(rollsBelow).to.equal(0);
  });

  it("should have a mean of about 10.5", () => {
    const numberRolls = 10000;
    const rolls = D20.rollDice(numberRolls);
    const sumRolls = rolls.reduce((sum, current) => sum + current)
    const mean = sumRolls / numberRolls;
    expect(mean).within(10.3,10.7);
  });

  it("should have a standard deviation of about ", () => {
    const numberRolls = 10000;
    const rolls = D20.rollDice(numberRolls);
    const variance = rolls.reduce((moment, current) => moment + (current - 10.5) ** 2) / numberRolls;
    expect(variance).within(32.25, 34.25);
  });

  it("should return [] on 0 input", () => {
    const rolls = D20.rollDice(0);
    expect(rolls).to.deep.equal([]);
  })

  it("should raise an error on faulty input", () => {
    expect(() => D20.rollDice(1.2)).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D20.rollDice("1")).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D20.rollDice([1])).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D20.rollDice(-1)).to.throw(Error, `Dice.rollDice(number) only takes input >= 1`);
  });
});

describe("Testing available dice set - D100", () => {
  it("does only roll integer values", () => {
    const numberRolls = 1000;
    const rolls = D100.rollDice(numberRolls);
    const integerRolls = rolls.filter(roll => Number.isInteger(roll)).length;
    expect(integerRolls).to.equal(numberRolls);
  });

  it("does not roll values above 100 or below 1", () => {
    const rolls = D100.rollDice(10000);
    const rollsAbove = rolls.filter(roll => roll > 100).length;
    const rollsBelow = rolls.filter(roll => roll < 1).length;
    expect(rollsAbove).to.equal(0);
    expect(rollsBelow).to.equal(0);
  });

  it("should have a mean of about 10.5", () => {
    const numberRolls = 10000;
    const rolls = D100.rollDice(numberRolls);
    const sumRolls = rolls.reduce((sum, current) => sum + current)
    const mean = sumRolls / numberRolls;
    expect(mean).within(48,53);
  });

  it("should have a standard deviation of about ", () => {
    const numberRolls = 10000;
    const rolls = D100.rollDice(numberRolls);
    const variance = rolls.reduce((moment, current) => moment + (current - 50.5) ** 2) / numberRolls;
    expect(variance).within(800, 860);
  });

  it("should return [] on 0 input", () => {
    const rolls = D100.rollDice(0);
    expect(rolls).to.deep.equal([]);
  })

  it("should raise an error on faulty input", () => {
    expect(() => D100.rollDice(1.2)).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D100.rollDice("1")).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D100.rollDice([1])).to.throw(Error, `Dice.rollDice(number) only takes Integer inputs`);
    expect(() => D100.rollDice(-1)).to.throw(Error, `Dice.rollDice(number) only takes input >= 1`);
  });
});
