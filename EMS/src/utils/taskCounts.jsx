export const getTaskCounts = (tasks = []) =>
  tasks.reduce(
    (acc, task) => {
      acc.total += 1;
      if (task.status in acc) acc[task.status] += 1;
      return acc;
    },
    { total: 0, new: 0, active: 0, completed: 0, failed: 0 },
  );
