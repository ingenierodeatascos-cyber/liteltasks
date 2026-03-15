const assert = require("node:assert/strict");
const test = require("node:test");

const {
  registerUser,
} = require("../src/features/auth/register-user.ts");
const {
  verifyPassword,
} = require("../src/features/auth/password.ts");

test("creates a new user with a hashed password", async () => {
  let createdUser = null;

  const result = await registerUser(
    {
      email: "new-user@example.com",
      password: "secret123",
    },
    {
      findUserByEmail: async () => null,
      createUser: async (data) => {
        createdUser = data;

        return { id: 1, email: data.email };
      },
      hashPassword: async (password) => {
        const { hashPassword } = require("../src/features/auth/password.ts");
        return hashPassword(password);
      },
    },
  );

  assert.deepEqual(result, { success: true });
  assert.ok(createdUser);
  assert.equal(createdUser.email, "new-user@example.com");
  assert.notEqual(createdUser.passwordHash, "secret123");
  assert.equal(await verifyPassword("secret123", createdUser.passwordHash), true);
});

test("rejects duplicate emails with a controlled result", async () => {
  const result = await registerUser(
    {
      email: "existing@example.com",
      password: "secret123",
    },
    {
      findUserByEmail: async () => ({ id: 99 }),
      createUser: async () => {
        throw new Error("should not create");
      },
      hashPassword: async () => {
        throw new Error("should not hash");
      },
    },
  );

  assert.deepEqual(result, {
    success: false,
    reason: "EMAIL_EXISTS",
  });
});
