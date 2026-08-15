export const getTaskCounts = (tasks = []) => ({
  total: tasks.length,
  active: tasks.filter((task) => task.active).length,
  newTask: tasks.filter((task) => task.newTask).length,
  completed: tasks.filter((task) => task.completed).length,
  failed: tasks.filter((task) => task.failed).length,
});
