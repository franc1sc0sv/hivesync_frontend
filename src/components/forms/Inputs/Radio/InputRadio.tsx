import React from "react";

interface RadioInputProps {
  options: { label: string; value: string }[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor="html"
        >
          <span>{option.label}</span>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="html"
          />
          <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        // <label key={option.value} className="flex items-center gap-2">
        //   <input
        //     type="radio"
        //     name={name}
        //     value={option.value}
        //     checked={selectedValue === option.value}
        //     onChange={() => onChange(option.value)}
        //     className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        //   />
        //   <span>{option.label}</span>
        // </label>
      ))}
    </div>
  );
};
