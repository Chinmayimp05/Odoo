import React from "react";

function TaskCard({ task }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={task.image} alt={task.name} className="w-full h-32 object-cover rounded" />
      <h3 className="mt-2 font-semibold text-lg">{task.name}</h3>
      <p className="text-sm text-gray-600">Assigned To: {task.assignedTo}</p>
      <p className="text-sm text-gray-600">Priority: {task.priority}</p>
    </div>
  );
}

export default TaskCard;
