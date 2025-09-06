import React from "react";

function FormField({ label, name, type = "text", value, onChange, placeholder, error }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="font-medium">{label}</label>}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border rounded p-2 w-full"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border rounded p-2 w-full"
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default FormField;
