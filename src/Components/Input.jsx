import React, { useId } from "react";

const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      placeHolder = "Enter your input",
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1 " htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeHolder}
          className={`${className}`}
          {...props}
          ref={ref}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
