import React from "react";
import mockData from "../data/mockData";
import TaskCard from "../components/TaskCard";

function MyTasks() {
  const myTasks = mockData.tasks.filter((task) => task.assignedTo === "You");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default MyTasks;
