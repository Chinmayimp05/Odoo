const mockData = {
  projects: [
    {
      id: 1,
      name: "Website Redesign",
      manager: "Alice",
      duration: "2 months",
      priority: "High",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Mobile App",
      manager: "Bob",
      duration: "3 months",
      priority: "Medium",
      image: "https://via.placeholder.com/150",
    },
  ],
  tasks: [
    {
      id: 1,
      projectId: 1,
      name: "Create wireframes",
      assignedTo: "You",
      priority: "High",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      projectId: 2,
      name: "Setup backend API",
      assignedTo: "Charlie",
      priority: "Medium",
      image: "https://via.placeholder.com/150",
    },
  ],
};

export default mockData;
