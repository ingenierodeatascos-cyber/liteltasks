const assert = require("node:assert/strict");
const test = require("node:test");

const {
  toggleTaskStatus,
} = require("../src/features/tasks/toggle-task-status.ts");

test("toggles the status for a task owned by the authenticated user", async () => {
  let updatedArgs = null;

  const result = await toggleTaskStatus(3, 8, true, {
    updateTaskStatus: async (taskId, userId, completed) => {
      updatedArgs = { taskId, userId, completed };
      return { id: taskId };
    },
  });

  assert.deepEqual(updatedArgs, {
    taskId: 3,
    userId: 8,
    completed: true,
  });
  assert.deepEqual(result, { id: 3 });
});

test("does not toggle a task that does not belong to the authenticated user", async () => {
  const result = await toggleTaskStatus(4, 9, false, {
    updateTaskStatus: async () => null,
  });

  assert.equal(result, null);
});
