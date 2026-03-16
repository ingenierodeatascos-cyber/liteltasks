import type { TaskInput } from "../../validations/task";

type CreateTaskData = TaskInput & {
  userId: number;
};

type CreateTaskDependencies = {
  createTask: (data: CreateTaskData) => Promise<{ id: number }>;
};

async function getDefaultDependencies(): Promise<CreateTaskDependencies> {
  const [{ prisma }] = await Promise.all([import("../../db/prisma")]);

  return {
    createTask: (data) =>
      prisma.task.create({
        data,
        select: { id: true },
      }),
  };
}

export async function createTask(
  userId: number,
  input: TaskInput,
  dependencies?: CreateTaskDependencies,
) {
  const resolvedDependencies = dependencies ?? (await getDefaultDependencies());

  return resolvedDependencies.createTask({
    userId,
    title: input.title,
    description: input.description,
  });
}
