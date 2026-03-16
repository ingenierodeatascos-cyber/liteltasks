const assert = require("node:assert/strict");
const test = require("node:test");

const { createTask } = require("../src/features/tasks/create-task.ts");

test("creates a task for the authenticated user", async () => {
  let createdTask = null;

  await createTask(
    42,
    {
      title: "Write docs",
      description: "Update task module",
    },
    {
      createTask: async (data) => {
        createdTask = data;
        return { id: 1 };
      },
    },
  );

  assert.deepEqual(createdTask, {
    userId: 42,
    title: "Write docs",
    description: "Update task module",
  });
});

test("stores null description when the task has no details", async () => {
  let createdTask = null;

  await createTask(
    7,
    {
      title: "Empty description task",
      description: null,
    },
    {
      createTask: async (data) => {
        createdTask = data;
        return { id: 2 };
      },
    },
  );

  assert.deepEqual(createdTask, {
    userId: 7,
    title: "Empty description task",
    description: null,
  });
});
