type ToggleTaskStatusDependencies = {
  updateTaskStatus: (
    taskId: number,
    userId: number,
    completed: boolean,
  ) => Promise<{ id: number } | null>;
};

async function getDefaultDependencies(): Promise<ToggleTaskStatusDependencies> {
  const [{ prisma }] = await Promise.all([import("../../db/prisma")]);

  return {
    updateTaskStatus: async (taskId, userId, completed) => {
      const task = await prisma.task.findFirst({
        where: {
          id: taskId,
          userId,
        },
        select: { id: true },
      });

      if (!task) {
        return null;
      }

      return prisma.task.update({
        where: { id: taskId },
        data: { completed },
        select: { id: true },
      });
    },
  };
}

export async function toggleTaskStatus(
  taskId: number,
  userId: number,
  completed: boolean,
  dependencies?: ToggleTaskStatusDependencies,
) {
  const resolvedDependencies = dependencies ?? (await getDefaultDependencies());

  return resolvedDependencies.updateTaskStatus(taskId, userId, completed);
}
