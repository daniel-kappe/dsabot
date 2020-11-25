import {expect} from 'chai';
import sinon from 'sinon';
import { D20 } from '../src/backend/dice';
import { AttributeCheckBuilder, SkillCheckBuilder } from '../src/backend/checkBuilder';

describe.skip('AttributeCheck - Testing with Builder', () => {
  let d20Stub;

  before(() => {
    d20Stub = sinon.stub(D20, 'rollDice');
  })

  after(() => {
    d20Stub.restore();
  })

  it('should be build correctly using the AttributeCheckBuilder', () => {
    const attributeCheck1 = new AttributeCheckBuilder(14).isConfused(1).isVeryEasy().build();
    expect(attributeCheck1.attributes).to.deep.equal([14]);
    expect(attributeCheck1.modification).to.equal(3);

    const attributeCheck2 = new AttributeCheckBuilder(14).isDrugged(3).isExtremelyHard().build();
    expect(attributeCheck2.modification).to.equal(-9);

    const attributeCheck3 = new AttributeCheckBuilder(6).inPain(3).isHard().build();
    expect(attributeCheck3.modification).to.equal(-5);
  });

  it('should return the correct result on a successful check', () => {
    d20Stub.returns([9]);
    const attributeCheck = new AttributeCheckBuilder(10).isEasy().build();
    const result = attributeCheck.rollCheck();

    expect(result).to.deep.equal({ status: 'success', skillPointsLeft: 0, qualityLevel: 1});
  });

  it('should return the correct result on a unsuccessful check', () => {
    d20Stub.returns([14]);
    const attributeCheck = new AttributeCheckBuilder(10).isEasy().build();
    const result = attributeCheck.rollCheck();

    expect(result).to.deep.equal({ status: 'failure', skillPointsLeft: -2, qualityLevel: null});
  });

  it('should return the correct result on a critical success check', () => {
    d20Stub.returns([1]);
    const attributeCheck = new AttributeCheckBuilder(10).isEasy().build();
    const result = attributeCheck.rollCheck();

    expect(result).to.deep.equal({ status: 'critical success', confirmationRoll: 1});
  });

  it('should return the correct result on a critical failure check', () => {
    d20Stub.returns([20]);
    const attributeCheck = new AttributeCheckBuilder(10).isEasy().build();
    const result = attributeCheck.rollCheck();

    expect(result).to.deep.equal({ status: 'critical failure', confirmationRoll: 20});
  });
});

describe('SkillCheck - Testing with Builder', () => {
  let d20Stub;

  before(() => {
    d20Stub = sinon.stub(D20, 'rollDice');
  })

  after(() => {
    d20Stub.restore();
  })

  it('should be build correctly using the SkillCheckBuilder', () => {
    const skillCheck1 = new SkillCheckBuilder([10, 14, 12], 2).isConfused(1).isVeryEasy().build();
    expect(skillCheck1.attributes).to.deep.equal([10, 14, 12]);
    expect(skillCheck1.skillLevel).to.equal(2);
    expect(skillCheck1.modification).to.equal(2);

    const skillCheck2 = new SkillCheckBuilder([10, 14, 12], 2).isDrugged(3).isExtremelyHard().build();
    expect(skillCheck2.modification).to.equal(-8);

    const skillCheck3 = new SkillCheckBuilder([10, 14, 12], 2).inPain(3).isHard().build();
    expect(skillCheck3.modification).to.equal(-4);
  });

  it('should return the correct result on a successful check', () => {
    d20Stub.returns([9, 14, 13]);
    const skillCheck1 = new SkillCheckBuilder([10, 14, 12], 4).isEasy().build();
    const result1 = skillCheck1.rollCheck();
    expect(result1).to.deep.equal({ status: 'success', skillPointsLeft: 4, qualityLevel: 2});

    d20Stub.returns([14, 14, 13]);
    const result2 = skillCheck1.rollCheck();
    expect(result2).to.deep.equal({ status: 'success', skillPointsLeft: 1, qualityLevel: 1});
  });

  it('should return the correct result on a unsuccessful check', () => {
    d20Stub.returns([9, 14, 20]);
    const skillCheck = new SkillCheckBuilder([10, 14, 12], 4).isEasy().build();
    const result1 = skillCheck.rollCheck();
    expect(result1).to.deep.equal({ status: 'failure', skillPointsLeft: -3, qualityLevel: null});

    d20Stub.returns([16, 14, 13]);
    const result2 = skillCheck.rollCheck();
    expect(result2).to.deep.equal({ status: 'failure', skillPointsLeft: -1, qualityLevel: null});
  });

  it('should return the correct result on a critical success check', () => {
    d20Stub.returns([1, 1, 20]);
    const skillCheck = new SkillCheckBuilder([10, 14, 12], 4).isEasy().build();
    const result1 = skillCheck.rollCheck();
    expect(result1).to.deep.equal({ status: 'critical success'});

    d20Stub.returns([1, 1, 1]);
    const result2 = skillCheck.rollCheck();
    expect(result2).to.deep.equal({ status: 'super critical success'});
  });

  it('should return the correct result on a critical failure check', () => {
    d20Stub.returns([20, 20, 1]);
    const skillCheck = new SkillCheckBuilder([10, 14, 12], 4).isEasy().build();
    const result1 = skillCheck.rollCheck();
    expect(result1).to.deep.equal({ status: 'critical failure'});

    d20Stub.returns([20, 20, 20]);
    const result2 = skillCheck.rollCheck();
    expect(result2).to.deep.equal({ status: 'super critical failure'});
  });
});
