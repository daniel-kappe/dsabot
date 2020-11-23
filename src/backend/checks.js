import { D20 } from "./dice";

export class Check {
  constructor(builder) {
    this.attributes = builder.attributes;
    this.modification = builder.modification;
    this.skillLevel = builder.skillLevel;
  }

  get qualityLevel() {
    if (this.skillPointsLeft === 0) {
      return 1;
    } else if (this.skillPointsLeft < 0) {
      return null;
    } else {
      return Math.min(6, Math.max(0, Math.ceil(this.skillPointsLeft / 3)));
    }
  }

  checkCritical() {
    throw Error('You should not use the Check base class')
  }

  rollCheck() {
    this.diceRoll = D20.rollDice(this.attributes.length);
    checkCritical();
  }
}

export class AttributeCheck extends Check {

}

export class SkillCheck extends Check {

}

export class MagicCheck extends SkillCheck {

}

export class AttackCheck extends Check {

}

export class DistanceAttackCheck extends AttackCheck {

}

export class DefenseCheck extends Check {

}
