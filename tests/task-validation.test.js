const assert = require("node:assert/strict");
const test = require("node:test");

const { validateTaskInput } = require("../src/validations/task.ts");

test("accepts a valid task input", () => {
  const result = validateTaskInput({
    title: "Buy milk",
    description: "Semi-skimmed",
  });

  assert.equal(result.success, true);
  assert.deepEqual(result.data, {
    title: "Buy milk",
    description: "Semi-skimmed",
  });
});

test("rejects an empty task title", () => {
  const result = validateTaskInput({
    title: "   ",
    description: "Optional",
  });

  assert.equal(result.success, false);
  assert.equal(result.errors.title, "Title is required.");
});
