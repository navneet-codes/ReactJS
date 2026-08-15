const Employees = [
  {
    id: "emp-1",
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "12345678",

    tasks: [
      {
        id: "t-1-1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare sales report",
        taskDescription:
          "Create the monthly sales report and submit it to the manager.",
        taskDate: "2026-06-26",
        category: "Reports",
      },
      {
        id: "t-1-2",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update client database",
        taskDescription: "Verify and update client contact details in the CRM.",
        taskDate: "2026-06-20",
        category: "Database",
      },
      {
        id: "t-1-3",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Follow up with leads",
        taskDescription: "Call pending leads and update their response status.",
        taskDate: "2026-06-27",
        category: "Sales",
      },
    ],
  },

  {
    id: "emp-2",
    firstName: "Rohan",
    email: "employee2@example.com",
    password: "12345678",

    tasks: [
      {
        id: "t-2-1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix login page bug",
        taskDescription:
          "Resolve the authentication issue on the employee login page.",
        taskDate: "2026-06-26",
        category: "Development",
      },
      {
        id: "t-2-2",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review pull requests submitted by the frontend team.",
        taskDate: "2026-06-22",
        category: "Development",
      },
      {
        id: "t-2-3",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy dashboard update",
        taskDescription: "Deploy the latest dashboard version to production.",
        taskDate: "2026-06-21",
        category: "Deployment",
      },
      {
        id: "t-2-4",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize API response",
        taskDescription: "Improve response time of the employee task API.",
        taskDate: "2026-06-28",
        category: "Backend",
      },
    ],
  },

  {
    id: "emp-3",
    firstName: "Priya",
    email: "employee3@example.com",
    password: "12345678",

    tasks: [
      {
        id: "t-3-1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design landing page",
        taskDescription:
          "Create a clean UI design for the company landing page.",
        taskDate: "2026-06-27",
        category: "Design",
      },
      {
        id: "t-3-2",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create banner graphics",
        taskDescription:
          "Design promotional banners for the marketing campaign.",
        taskDate: "2026-06-19",
        category: "Design",
      },
      {
        id: "t-3-3",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update brand colors",
        taskDescription: "Apply updated brand colors across the website pages.",
        taskDate: "2026-06-29",
        category: "UI/UX",
      },
    ],
  },

  {
    id: "emp-4",
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "12345678",

    tasks: [
      {
        id: "t-4-1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test payment flow",
        taskDescription: "Check the complete payment flow and report any bugs.",
        taskDate: "2026-06-26",
        category: "Testing",
      },
      {
        id: "t-4-2",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write test cases",
        taskDescription:
          "Prepare test cases for the employee dashboard module.",
        taskDate: "2026-06-18",
        category: "QA",
      },
      {
        id: "t-4-3",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Verify email notifications",
        taskDescription: "Check if email notifications are working correctly.",
        taskDate: "2026-06-21",
        category: "Testing",
      },
      {
        id: "t-4-4",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug report analysis",
        taskDescription: "Analyze reported bugs and assign priority levels.",
        taskDate: "2026-06-28",
        category: "QA",
      },
    ],
  },

  {
    id: "emp-5",
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "12345678",

    tasks: [
      {
        id: "t-5-1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare marketing plan",
        taskDescription:
          "Create a weekly marketing plan for social media promotion.",
        taskDate: "2026-06-27",
        category: "Marketing",
      },
      {
        id: "t-5-2",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Analyze campaign data",
        taskDescription: "Review ad campaign performance and prepare insights.",
        taskDate: "2026-06-20",
        category: "Analytics",
      },
      {
        id: "t-5-3",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Schedule social posts",
        taskDescription: "Schedule posts for LinkedIn, Instagram, and Twitter.",
        taskDate: "2026-06-29",
        category: "Social Media",
      },
      {
        id: "t-5-4",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client feedback summary",
        taskDescription: "Collect and summarize feedback from recent clients.",
        taskDate: "2026-06-22",
        category: "Customer Feedback",
      },
    ],
  },
];

const Admin = [
  {
    id: "admin-1",
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "12345678",
  },
];

// export { Employees, Admin };

export const setLocalStorage = () => {
  if (!localStorage.getItem("Employees")) {
    localStorage.setItem("Employees", JSON.stringify(Employees));
  }
  if (!localStorage.getItem("Admin")) {
    localStorage.setItem("Admin", JSON.stringify(Admin));
  }
};

export const getLocalStorage = () => {
  const Employees = JSON.parse(localStorage.getItem("Employees"));
  const Admin = JSON.parse(localStorage.getItem("Admin"));

  return { Employees, Admin };
  // console.log(JSON.parse(Employees), JSON.parse(Admin));
};
