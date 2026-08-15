import React from "react";

const VARIANTS = {
  new: {
    label: "New",
    stripe: "border-emerald-400",
    pill: "bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/25",
    dot: "bg-emerald-400",
    actions: [
      {
        text: "Accept Task",
        next: "active",
        style: "bg-emerald-400 text-emerald-950 hover:bg-emerald-300",
      },
    ],
  },
  active: {
    label: "Active",
    stripe: "border-amber-400",
    pill: "bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/25",
    dot: "bg-amber-400",
    actions: [
      {
        text: "Mark Completed",
        next: "completed",
        style: "bg-sky-400 text-sky-950 hover:bg-sky-300",
      },
      {
        text: "Mark Failed",
        next: "failed",
        style: "bg-slate-700 text-slate-100 hover:bg-slate-600",
      },
    ],
  },
  completed: {
    label: "Completed",
    stripe: "border-sky-400",
    pill: "bg-sky-400/15 text-sky-300 ring-1 ring-sky-400/25",
    dot: "bg-sky-400",
    actions: [],
  },
  failed: {
    label: "Failed",
    stripe: "border-rose-400",
    pill: "bg-rose-400/15 text-rose-300 ring-1 ring-rose-400/25",
    dot: "bg-rose-400",
    actions: [],
  },
};

const TaskCard = ({ task, onStatusChange }) => {
  const variant = VARIANTS[task.status];
  if (!variant) return null;

  return (
    <article
      className={`${variant.stripe} flex-1 w-110 m-4 rounded-2xl border-l-4 bg-slate-900 p-6 text-slate-100 shadow-lg`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${variant.pill}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${variant.dot}`}
              aria-hidden="true"
            />
            {variant.label}
          </span>
          <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
            {task.category}
          </span>
        </div>
        <time
          dateTime={task.taskDate}
          className="text-xs font-medium text-slate-400"
        >
          {task.taskDate}
        </time>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-slate-50">
        {task.taskTitle}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {task.taskDescription}
      </p>

      {variant.actions.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {variant.actions.map((action) => (
            <button
              key={action.next}
              type="button"
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${action.style}`}
              onClick={() => onStatusChange?.(task.id, action.next)}
            >
              {action.text}
            </button>
          ))}
        </div>
      )}
    </article>
  );
};

export default TaskCard;
