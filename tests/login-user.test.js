const assert = require("node:assert/strict");
const test = require("node:test");

const { hashPassword } = require("../src/features/auth/password.ts");
const { loginUser } = require("../src/features/auth/login-user.ts");
const {
  createSessionToken,
  readSessionToken,
} = require("../src/features/auth/session-token.ts");

test("logs in a user with valid credentials", async () => {
  const passwordHash = await hashPassword("secret123");

  const result = await loginUser(
    {
      email: "user@example.com",
      password: "secret123",
    },
    {
      findUserByEmail: async () => ({ id: 7, passwordHash }),
      verifyPassword: async (password, storedHash) => {
        const { verifyPassword } = require("../src/features/auth/password.ts");
        return verifyPassword(password, storedHash);
      },
    },
  );

  assert.deepEqual(result, {
    success: true,
    userId: 7,
  });
});

test("rejects invalid credentials", async () => {
  const passwordHash = await hashPassword("secret123");

  const result = await loginUser(
    {
      email: "user@example.com",
      password: "wrong-password",
    },
    {
      findUserByEmail: async () => ({ id: 7, passwordHash }),
      verifyPassword: async (password, storedHash) => {
        const { verifyPassword } = require("../src/features/auth/password.ts");
        return verifyPassword(password, storedHash);
      },
    },
  );

  assert.deepEqual(result, {
    success: false,
    reason: "INVALID_CREDENTIALS",
  });
});

test("creates a readable signed session token", () => {
  const token = createSessionToken({ userId: 21 });
  const payload = readSessionToken(token);

  assert.deepEqual(payload, { userId: 21 });
});
