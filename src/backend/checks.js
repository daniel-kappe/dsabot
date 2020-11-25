import { D20 } from "./dice";

export class Check {
  constructor(builder) {
    this.attributes = builder.attributes;
    this.modification = builder.modification;
    this.skillLevel = builder.skillLevel;
  }

  static qualityLevel(skillPointsLeft) {
    if (skillPointsLeft === 0) {
      return 1;
    } else if (skillPointsLeft < 0) {
      return null;
    } else {
      return Math.min(6, Math.max(0, Math.ceil(skillPointsLeft / 3)));
    }
  }

  checkCritical() {
    // should return { status: 'ok' / 'critical success' / 'critical failure' }
    throw Error('You should not use the Check base class')
  }

  rollCheck() {
    this.diceRoll = D20.rollDice(this.attributes.length);
    this.result = this.checkCritical();
    if (this.result['status'] === 'ok') {
      this.result['skillPointsLeft'] = this.skillLevel - this.pointsNeeded;
      this.result['qualityLevel'] = Check.qualityLevel(this.result['skillPointsLeft']);
      this.result['status'] = this.result['skillPointsLeft'] >= 0 ? 'success' : 'failure';
    }
    return this.result
  }

  get pointsNeeded() {
    if (this.diceRoll) {
      let effectiveAttributes = this.attributes.map(attribute => attribute + this.modification);
      let pointsNeeded = 0;
      effectiveAttributes.forEach((item, i) => {
        pointsNeeded += Math.max(this.diceRoll[i] - item, 0);
      });
      return pointsNeeded;
    }
    return null;
  }
}

export class AttributeCheck extends Check {
  checkCritical() {
    const effectiveAttribute = this.attributes[0] + this.modification;
    const confirmationRoll = D20.rollDice(1)[0];
    let result = { status: 'ok' }
    if (this.diceRoll[0] === 1) {
      result['confirmationRoll'] = confirmationRoll
      if (confirmationRoll <= effectiveAttribute) {
        result['status'] = 'critical success';
      }
    } else if (this.diceRoll[0] === 20) {
      result['confirmationRoll'] = confirmationRoll
      if (confirmationRoll >= effectiveAttribute) {
        result['status'] = 'critical failure';
      }
    }
    return result;
  }
}

export class SkillCheck extends Check {
  checkCritical() {
    const ones = this.diceRoll.filter(roll => roll === 1).length;
    const twenties = this.diceRoll.filter(roll => roll === 20).length;
    if (ones === 2) {
      return { status: 'critical success' };
    } else if (ones === 3) {
      return { status: 'super critical success' };
    } else if (twenties === 2) {
      return { status: 'critical failure' };
    } else if (twenties === 3) {
      return { status: 'super critical failure' };
    }
    return { status: 'ok' };
  }
}

export class MagicCheck extends SkillCheck {

}

export class AttackCheck extends Check {

}

export class DistanceAttackCheck extends AttackCheck {

}

export class DefenseCheck extends Check {

}
