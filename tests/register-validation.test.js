const assert = require("node:assert/strict");
const test = require("node:test");

const { validateRegisterInput } = require("../src/validations/register.ts");

test("accepts valid register input", () => {
  const result = validateRegisterInput({
    email: "user@example.com",
    password: "secret123",
  });

  assert.equal(result.success, true);
  assert.deepEqual(result.errors, {});
  assert.deepEqual(result.data, {
    email: "user@example.com",
    password: "secret123",
  });
});

test("rejects empty password", () => {
  const result = validateRegisterInput({
    email: "user@example.com",
    password: "   ",
  });

  assert.equal(result.success, false);
  assert.equal(result.errors.password, "Password is required.");
});

test("rejects invalid email", () => {
  const result = validateRegisterInput({
    email: "not-an-email",
    password: "secret123",
  });

  assert.equal(result.success, false);
  assert.equal(result.errors.email, "Email must be valid.");
});
