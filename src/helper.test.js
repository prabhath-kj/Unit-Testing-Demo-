import { describe, it, expect } from "vitest";

import add from "./Helper";
describe("test cases for add funtion", () => {
  it("returns number ", () => {
    expect(add(12, 34)).toBe(46);
  });
  it("returns number ", () => {
    expect(add(500, 500)).toBe(1000);
  });
  it("returns number ", () => {
    expect(add("1", "1")).toBe(0);
  });
});
