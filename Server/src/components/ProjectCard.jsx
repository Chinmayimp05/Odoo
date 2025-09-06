import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={project.image} alt={project.name} className="w-full h-32 object-cover rounded" />
      <h3 className="mt-2 font-semibold text-lg">{project.name}</h3>
      <p className="text-sm text-gray-600">Manager: {project.manager}</p>
      <p className="text-sm text-gray-600">Duration: {project.duration}</p>
      <p className="text-sm text-gray-600">Priority: {project.priority}</p>
      <Link
        to={`/projects/${project.id}`}
        className="block text-blue-600 mt-2 hover:underline"
      >
        View Tasks
      </Link>
    </div>
  );
}

export default ProjectCard;
