const sum = require("./functions");

test("Sum function 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});
