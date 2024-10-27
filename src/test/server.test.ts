import { getCoolName } from "../app/server";

describe("Service test suite", () => {
  test("getCoolName test, should return coolName", () => {
    const sut = getCoolName;
    const actual = sut();
    const expected = "coolName";
    expect(actual).toBe(expected);
  });
});
