import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { getLocalStorage, STORAGE_KEYS } from "../utils/localStorage";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => getLocalStorage());

  const updateTaskStatus = useCallback((employeeId, taskId, status) => {
    setUserData((prev) => ({
      ...prev,
      Employees: prev.Employees.map((emp) =>
        emp.id !== employeeId
          ? emp
          : {
              ...emp,
              tasks: emp.tasks.map((task) =>
                task.id !== taskId ? task : { ...task, status },
              ),
            },
      ),
    }));
  }, []);

  const value = useMemo(
    () => ({ userData, setUserData, updateTaskStatus }),
    [userData, updateTaskStatus],
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
