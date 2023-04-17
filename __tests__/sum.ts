import { sum } from "../src/pages/content/sum";

describe("sum", () => {
  it("should add up", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
