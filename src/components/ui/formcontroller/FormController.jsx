import React from "react";
import { Controller } from "react-hook-form";
import { cn } from "../../../utils/cn";

const FormController = ({
  label,
  type = "text",
  control,
  name,
  placeholder,
  className,
  options = [],
  ...props
}) => {
  const baseInput = "w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent hover:bg-white";
  const errorStyle = "border-red-400 bg-red-50/50 text-red-900 shadow-red-100/50 hover:shadow-red-200 hover:border-red-400 focus:ring-red-400";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field }, fieldState: { error } }) => {
        // File preview URL
        const previewUrl = value instanceof File ? URL.createObjectURL(value) : null;

        return (
          <div className={cn("flex flex-col gap-2 w-full", className)}>
            {label && type !== "checkbox" && (
              <label
                htmlFor={name}
                className="text-sm font-semibold text-slate-700"
              >
                {label}
              </label>
            )}

            {/* Select Input */}
            {type === "select" ? (
              <select
                id={name}
                className={cn(baseInput, error && errorStyle)}
                value={value ?? ""}
                onChange={onChange}
                {...field}
                {...props}
              >
                <option value="" disabled>
                  {placeholder || "Select an option"}
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : type === "textarea" ? (
              <textarea
                id={name}
                placeholder={placeholder}
                className={cn(baseInput.replace("py-3", "min-h-[100px] py-3"), error && errorStyle)}
                value={value ?? ""}
                onChange={onChange}
                {...field}
                {...props}
              />
            ) : type === "checkbox" ? (
              <div className="flex items-start space-x-3">
                <div className="flex h-5 items-center">
                  <input
                    id={name}
                    type="checkbox"
                    className={cn(
                      "h-5 w-5 rounded-lg border-2 border-slate-300 bg-white shadow-sm transition-all duration-200 focus:ring-2 focus:ring-slate-400 focus:ring-offset-0 hover:border-slate-400",
                      error && "border-red-400 bg-red-50 hover:border-red-500 focus:ring-red-400"
                    )}
                    checked={!!value}
                    onChange={(e) => onChange(e.target.checked)}
                    {...field}
                    {...props}
                  />
                </div>
                {label && (
                  <label
                    htmlFor={name}
                    className="text-sm font-medium text-slate-700 cursor-pointer select-none"
                  >
                    {label}
                  </label>
                )}
              </div>
            ) : type === "radio" ? (
              <div className="flex flex-wrap items-center gap-6">
                {options.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="radio"
                      id={`${name}-${option.value}`}
                      value={option.value}
                      checked={value === option.value}
                      onChange={() => onChange(option.value)}
                      className={cn(
                        "h-5 w-5 appearance-none rounded-full border-2 border-slate-300 bg-white shadow-sm transition-all duration-200 checked:bg-gradient-to-r checked:from-indigo-500 checked:to-purple-500 checked:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-0 hover:border-slate-400 group-hover:shadow-md",
                        error && "border-red-400 checked:from-red-500 checked:to-pink-500 checked:border-red-500 focus:ring-red-400"
                      )}
                    />
                    <span className="text-sm font-medium text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
            ) : type === "file" ? (
              <div className="space-y-3">
                {/* File Input with Eye Icon */}
                <div className="relative">
                  <input
                    id={name}
                    type="file"
                    accept="image/*"
                    className={cn(
                      baseInput,
                      "file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-slate-100 file:to-slate-200 file:text-slate-700 file:transition-all file:hover:from-slate-200 file:hover:to-slate-300 hover:shadow-lg pr-12",
                      error && errorStyle
                    )}
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      onChange(file);
                    }}
                    {...field}
                    {...props}
                  />
                  
                  {/* Eye Icon Button */}
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 hover:bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 z-10 hover:cursor-pointer"
                    onClick={() => {
                      if (value instanceof File) {
                        const url = URL.createObjectURL(value);
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    disabled={!value}
                    title={value ? "Preview image" : "No file selected"}
                  >
                    <svg className={`w-4 h-4 transition-colors ${value ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>

                {/* Selected File Preview */}
                {value instanceof File && (
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200 shadow-inner hover:shadow-md transition-all duration-200">
                    <img 
                      src={previewUrl} 
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-xl shadow-lg flex-shrink-0 ring-2 ring-white/50"
                      onError={() => URL.revokeObjectURL(previewUrl)}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 truncate" title={value.name}>
                        {value.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(value.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById(name);
                        if (input) input.value = '';
                        onChange(null);
                        if (previewUrl) URL.revokeObjectURL(previewUrl);
                      }}
                      className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 hover:shadow-sm flex-shrink-0 hover:cursor-pointer"
                      title="Remove file"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Default Input */
              <input
                id={name}
                type={type}
                placeholder={placeholder}
                className={cn(baseInput, error && errorStyle)}
                value={value ?? ""}
                onChange={onChange}
                {...field}
                {...props}
              />
            )}

            {error && (
              <span className="text-sm font-medium text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};

export default FormController;
