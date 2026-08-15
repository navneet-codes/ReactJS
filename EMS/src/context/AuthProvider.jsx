import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { getLocalStorage, STORAGE_KEYS } from "../utils/localStorage";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => getLocalStorage());

  // Every task mutation has the same shape: find one employee, replace their
  // task list. Written once here so callers only describe the change.
  const updateEmployeeTasks = useCallback((employeeId, transformTasks) => {
    setUserData((prev) => ({
      ...prev,
      Employees: prev.Employees.map((emp) =>
        emp.id !== employeeId
          ? emp
          : { ...emp, tasks: transformTasks(emp.tasks) },
      ),
    }));
  }, []);

  const createTask = useCallback(
    (employeeId, task) =>
      updateEmployeeTasks(employeeId, (tasks) => [...tasks, task]),
    [updateEmployeeTasks],
  );

  const updateTaskStatus = useCallback(
    (employeeId, taskId, status) =>
      updateEmployeeTasks(employeeId, (tasks) =>
        tasks.map((task) => (task.id !== taskId ? task : { ...task, status })),
      ),
    [updateEmployeeTasks],
  );

  const value = useMemo(
    () => ({ userData, createTask, updateTaskStatus }),
    [userData, createTask, updateTaskStatus],
  );

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.employees,
      JSON.stringify(userData.Employees),
    );
  }, [userData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
