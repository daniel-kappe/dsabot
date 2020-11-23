import { expect } from "chai";

describe("Test the server app", () => {
  it("testing", async () => {
    const a = [1, 2, 3, 4];
    const b = [1, 2, 3, 4];

    expect(a).to.deep.equal(b);
  })
});
