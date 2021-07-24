import React from "react";

// Styles
import '../styles/components/Checkbox.scss';

const Checkbox = ({message, handleOnChange}) => {
  return (
    <>
      <label class="checkbox">
        <span class="checkbox__input">
          <input onChange={handleOnChange} type="checkbox" name="checkbox" />
          <span class="checkbox__control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
        <span class="radio__label">{message}</span>
      </label>
    </>
  );
};

export default Checkbox;
