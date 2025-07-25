import React, { useId } from "react";

function Select({ options, label, id, className, ...props }, ref) {
  const newId = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select {...props} id={newId} ref={ref} className={`${className}`}>
        {options?.map((option) => {
          <option key={option} value={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
