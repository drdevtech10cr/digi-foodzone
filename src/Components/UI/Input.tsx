import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean; // ✅ Green border on validation success
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, className = "", ...props }, ref) => {
    const inputId = props.id || props.name;

    return (
      <div className="w-full flex flex-col gap-1 px-2 max-w-full sm:max-w-md md:max-w-lg">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs sm:text-sm md:text-base font-medium text-blue-600"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-2 border rounded-lg shadow-sm placeholder:text-sm transition focus:outline-none
            ${
              error
                ? "border-red-500 ring-1 ring-red-400 focus:ring-red-500"
                : success
                ? "border-green-500 focus:ring-2 focus:ring-green-500"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="text-xs sm:text-sm md:text-base text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default React.memo(Input);
