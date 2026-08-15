import React from "react";

const VARIANTS = {
  new: {
    surface: "bg-emerald-700",
    label: "New",
    actions: [{ text: "Accept Task", next: "active" }],
  },
  active: {
    surface: "bg-amber-700",
    label: "Active",
    actions: [
      { text: "Mark Completed", next: "completed" },
      { text: "Mark Failed", next: "failed" },
    ],
  },
  completed: { surface: "bg-sky-800", label: "Completed", actions: [] },
  failed: { surface: "bg-rose-900", label: "Failed", actions: [] },
};

const TaskCard = ({ task, onStatusChange }) => {
  const variant = VARIANTS[task.status];
  if (!variant) return null;

  return (
    <article
      className={`${variant.surface} flex-1 w-110 rounded-4xl pt-15 pb-4 px-8 m-10`}
    >
      <div className="flex justify-between">
        <span className="bg-red-800 rounded-4xl h-10 w-30 flex justify-center items-center">
          {task.category}
        </span>
        <span className="flex justify-center items-center font-bold">
          {task.taskDate}
        </span>
      </div>

      <h3 className="text-gray-900 text-2xl font-bold italic w-full pt-4 flex justify-center">
        {task.taskTitle}
      </h3>
      <p className="w-full flex justify-center">{task.taskDescription}</p>

      {variant.actions.length > 0 && (
        <div className="w-full flex justify-between mt-4">
          {variant.actions.map((action) => (
            <button
              key={action.next}
              type="button"
              className={`${action.style} py-1 px-2 text-sm rounded`}
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
