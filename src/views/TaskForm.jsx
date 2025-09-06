import React, { useState } from "react";
import FormField from "../components/FormField";
import Button from "../components/Button";

function TaskForm() {
  const [form, setForm] = useState({
    name: "",
    assignedTo: "",
    projectId: "",
    priority: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task submitted:", form);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create / Edit Task</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField label="Task Name" name="name" value={form.name} onChange={handleChange} />
        <FormField label="Assigned To" name="assignedTo" value={form.assignedTo} onChange={handleChange} />
        <FormField label="Project ID" name="projectId" value={form.projectId} onChange={handleChange} />
        <FormField label="Priority" name="priority" value={form.priority} onChange={handleChange} />
        <FormField label="Image URL" name="image" value={form.image} onChange={handleChange} />
        <FormField label="Description" name="description" type="textarea" value={form.description} onChange={handleChange} />
        <Button type="submit" className="w-full">Save</Button>
      </form>
    </div>
  );
}

export default TaskForm;
