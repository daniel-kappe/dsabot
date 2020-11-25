import { SkillCheck, AttributeCheck, AttackCheck } from './checks';

class CheckBuilder {
  trance = 0;
  encumbered = 0;
  drugged = 0;
  confused = 0;
  difficulty = 0;
  frightend = 0;
  pain = 0;

  constructor(attributes, skillLevel=null) {
    this.attributes = attributes;
    this.skillLevel = skillLevel;
    this.blessed = false;
  }

  build() {
    throw Error('Cannot build plain Checks, use SkillCheckBuilder etc. instead')
  }

  get modification() {
    let trance = this.blessed ? - this.trance - 1 : this.trance;
    let encumbrance = this.enableEncumbrance ? this.encumbered : 0;
    return this.difficulty + this.drugged + this.frightend + this.pain + this.confused + encumbrance + trance;
  }

  checkEncumbrance() {
    this.enableEncumbrance = true;
    return this;
  }

  isBlessed() {
    this.blessed = true;
    return this;
  }

  isEncumbered(level) {
    if (Number.isInteger(level) && level > 0 && level < 5) {
      this.encumbered = level < 4? - level: - 50;
      return this;
    }
    throw Error('Encumbrance Level has to be on of 1, 2, 3 or 4');
  }

  inTrance(level) {
    if (Number.isInteger(level) && level > 0 && level < 5) {
      this.trance = - level;
      return this;
    }
    throw Error('Trance Level has to be on of 1, 2, 3 or 4');
  }

  inPain(level) {
    if (Number.isInteger(level) && level > 0 && level < 5) {
      this.pain = - level;
      return this;
    }
    throw Error('Pain Level has to be on of 1, 2, 3 or 4');
  }

  isConfused(level) {
    if (Number.isInteger(level) && level > 0 && level < 5) {
      this.confused = level < 4? - level: - 50;
      return this;
    }
    throw Error('Confused Level has to be on of 1, 2, 3 or 4');
  }

  isDrugged(level) {
    if (Number.isInteger(level) && level > 0 && level < 5) {
      this.drugged = level < 4? - level: - 50;
      return this;
    }
    throw Error('Drugged Level has to be on of 1, 2, 3 or 4');
  }

  isFrightend(level) {
    if (Number.isInteger(level) && level > 0 && level < 5) {
      this.frightend = level < 4? - level: - 50;
      return this;
    }
    throw Error('Frightend Level has to be on of 1, 2, 3 or 4');
  }

  difficulty(checkDifficulty) {
    this.difficulty = checkDifficulty;
    return this;
  }
}

export class SkillCheckBuilder extends CheckBuilder {
  constructor(attributes, skillLevel) {
    super(attributes, skillLevel);
  }

  build() {
    return new SkillCheck(this);
  }

  isExtremelyEasy() {
    this.difficulty = +5;
    return this;
  }

  isExtremelyHard() {
    this.difficulty = -5;
    return this;
  }

  isVeryEasy() {
    this.difficulty = +3;
    return this;
  }

  isVeryHard() {
    this.difficulty = -3;
    return this;
  }

  isEasy() {
    this.difficulty = +1;
    return this;
  }

  isHard() {
    this.difficulty = -1;
    return this;
  }
}

export class AttributeCheckBuilder extends CheckBuilder {
  constructor(attribute) {
    super([ attribute ]);
  }

  build() {
    return new AttributeCheck(this);
  }

  isExtremelyEasy() {
    this.difficulty = +6;
    return this;
  }

  isExtremelyHard() {
    this.difficulty = -6;
    return this;
  }

  isVeryEasy() {
    this.difficulty = +4;
    return this;
  }

  isVeryHard() {
    this.difficulty = -4;
    return this;
  }

  isEasy() {
    this.difficulty = +2;
    return this;
  }

  isHard() {
    this.difficulty = -2;
    return this;
  }
}

export class AttackCheckBuilder extends CheckBuilder {
  build() {
    return new AttackCheck(this);
  }

  isLying() {
    this.lying = True;
  }

  get modification() {
    let mod = super.modification;
    mod += this.lying ? -4 : 0;
  }
}

export class DefenseCheckBuilder extends AttackCheckBuilder {
  build() {
    return new DefenseCheck(this);
  }

  get modification() {
    let mod = super.modification;
    mod += this.lying ? -2 : 0;
  }
}
