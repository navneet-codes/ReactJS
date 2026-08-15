import { describe, it, expect } from "vitest";
import { getTaskCounts } from "./taskCounts";

const task = (status) => ({ id: crypto.randomUUID(), status });

describe("getTaskCounts", () => {
  it("returns all zeros when there are no tasks", () => {
    expect(getTaskCounts()).toEqual({
      total: 0,
      new: 0,
      active: 0,
      completed: 0,
      failed: 0,
    });
  });

  it("treats a missing argument the same as an empty list", () => {
    expect(getTaskCounts()).toEqual(getTaskCounts([]));
  });

  it("counts each status independently", () => {
    const counts = getTaskCounts([
      task("new"),
      task("active"),
      task("active"),
      task("completed"),
      task("failed"),
    ]);

    expect(counts).toEqual({
      total: 5,
      new: 1,
      active: 2,
      completed: 1,
      failed: 1,
    });
  });

  // The invariant the old four-boolean model could not satisfy: a task with
  // active:true AND newTask:true was counted twice, so the buckets summed to
  // more than the total and the dashboard showed a New card that never rendered.
  it("keeps the buckets summing to the total", () => {
    const counts = getTaskCounts([
      task("new"),
      task("new"),
      task("active"),
      task("completed"),
      task("failed"),
      task("failed"),
    ]);

    const bucketed =
      counts.new + counts.active + counts.completed + counts.failed;

    expect(bucketed).toBe(counts.total);
  });

  it("ignores a task whose status is not one of the four", () => {
    const counts = getTaskCounts([task("new"), task("on-hold")]);

    expect(counts.new).toBe(1);
    expect(counts.total).toBe(2);
  });
});
