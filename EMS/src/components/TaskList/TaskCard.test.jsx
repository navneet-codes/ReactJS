import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCard from "./TaskCard";

const task = {
  id: "t-1",
  status: "new",
  taskTitle: "Prepare sales report",
  taskDescription: "Create the monthly sales report.",
  taskDate: "2026-06-26",
  category: "Reports",
};

describe("TaskCard", () => {
  it("shows the task details", () => {
    render(<TaskCard task={task} onStatusChange={() => {}} />);

    expect(screen.getByText("Prepare sales report")).toBeInTheDocument();
    expect(screen.getByText("Reports")).toBeInTheDocument();
  });

  it("reports the new status when an action is clicked", async () => {
    const onStatusChange = vi.fn();
    render(<TaskCard task={task} onStatusChange={onStatusChange} />);

    await userEvent.click(screen.getByRole("button", { name: /accept task/i }));

    expect(onStatusChange).toHaveBeenCalledWith("t-1", "active");
  });

  it("offers both outcomes while a task is active", () => {
    render(
      <TaskCard task={{ ...task, status: "active" }} onStatusChange={vi.fn()} />,
    );

    expect(
      screen.getByRole("button", { name: /mark completed/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /mark failed/i }),
    ).toBeInTheDocument();
  });

  // A finished task should not offer to finish itself — the bug the four
  // duplicated card components had before they were merged into TaskCard.
  it.each(["completed", "failed"])("offers no actions when %s", (status) => {
    render(<TaskCard task={{ ...task, status }} onStatusChange={vi.fn()} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders nothing for an unknown status", () => {
    const { container } = render(
      <TaskCard task={{ ...task, status: "bogus" }} onStatusChange={vi.fn()} />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
