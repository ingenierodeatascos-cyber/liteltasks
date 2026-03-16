const assert = require("node:assert/strict");
const test = require("node:test");

const { listTasks } = require("../src/features/tasks/list-tasks.ts");

test("lists only the tasks returned for the authenticated user", async () => {
  const createdAt = new Date("2026-03-16T10:00:00.000Z");

  const tasks = await listTasks(7, {
    findTasksByUserId: async (userId) => {
      assert.equal(userId, 7);

      return [
        {
          id: 1,
          title: "First task",
          description: "Task details",
          completed: false,
          createdAt,
        },
      ];
    },
  });

  assert.deepEqual(tasks, [
    {
      id: 1,
      title: "First task",
      description: "Task details",
      completed: false,
      createdAt,
    },
  ]);
});

test("returns an empty list when the user has no tasks", async () => {
  const tasks = await listTasks(5, {
    findTasksByUserId: async () => [],
  });

  assert.deepEqual(tasks, []);
});
