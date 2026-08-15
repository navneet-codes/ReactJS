import React from "react";
import { getTaskCounts } from "../utils/taskCounts";
import { useAuth } from "../context/useAuth";

const COLUMNS = [
  { key: "new", label: "New", value: "text-emerald-300" },
  { key: "active", label: "Active", value: "text-amber-300" },
  { key: "completed", label: "Completed", value: "text-sky-300" },
  { key: "failed", label: "Failed", value: "text-rose-300" },
];

const AllTask = () => {
  const { userData } = useAuth();

  return (
    <section
      aria-label="Task summary by employee"
      className="mt-16 flex flex-col items-center px-5"
    >
      <div className="w-full max-w-5xl overflow-x-auto rounded-2xl border border-slate-800 shadow-lg">
        <table className="w-full border-collapse">
          <caption className="sr-only">Task counts for each employee</caption>
          <thead>
            <tr className="bg-slate-800">
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-300"
              >
                Employee
              </th>
              {COLUMNS.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-300"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-900">
            {userData.Employees.map((employee) => {
              const counts = getTaskCounts(employee.tasks);

              return (
                <tr key={employee.id}>
                  <th
                    scope="row"
                    className="px-4 py-3 text-left font-medium text-slate-100"
                  >
                    {employee.firstName}
                  </th>
                  {COLUMNS.map((column) => (
                    <td
                      key={column.key}
                      className={`px-4 py-3 text-lg font-semibold tabular-nums ${column.value}`}
                    >
                      {counts[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllTask;
