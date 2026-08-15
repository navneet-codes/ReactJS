import React from "react";
import { getTaskCounts } from "../utils/taskCounts";

const CARDS = [
  {
    key: "active",
    label: "Active Tasks",
    stripe: "border-amber-400",
    value: "text-amber-300",
  },
  {
    key: "new",
    label: "New Tasks",
    stripe: "border-emerald-400",
    value: "text-emerald-300",
  },
  {
    key: "completed",
    label: "Completed",
    stripe: "border-sky-400",
    value: "text-sky-300",
  },
  {
    key: "failed",
    label: "Failed",
    stripe: "border-rose-400",
    value: "text-rose-300",
  },
];

const TaskListNumbers = ({ data }) => {
  const counts = getTaskCounts(data.tasks);

  return (
    <section
      aria-label="Task summary"
      className="grid w-full grid-cols-1 gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {CARDS.map((card) => (
        <article
          key={card.key}
          className={`${card.stripe} min-w-0 rounded-2xl border-l-4 bg-slate-900 p-6 shadow-lg`}
        >
          <p
            className={`text-5xl font-semibold tabular-nums ${card.value}`}
          >
            {counts[card.key]}
          </p>
          <h2 className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
            {card.label}
          </h2>
        </article>
      ))}
    </section>
  );
};

export default TaskListNumbers;
