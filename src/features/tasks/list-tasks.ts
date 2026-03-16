type TaskListItem = {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
  createdAt: Date;
};

type ListTasksDependencies = {
  findTasksByUserId: (userId: number) => Promise<TaskListItem[]>;
};

async function getDefaultDependencies(): Promise<ListTasksDependencies> {
  const [{ prisma }] = await Promise.all([import("../../db/prisma")]);

  return {
    findTasksByUserId: (userId) =>
      prisma.task.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          description: true,
          completed: true,
          createdAt: true,
        },
      }),
  };
}

export async function listTasks(
  userId: number,
  dependencies?: ListTasksDependencies,
) {
  const resolvedDependencies = dependencies ?? (await getDefaultDependencies());
  return resolvedDependencies.findTasksByUserId(userId);
}

export type { TaskListItem };
