import React from 'react';
import className from 'classnames';

// Styles
import '../styles/components/Checkbox.scss';

const Checkbox = ({
  message,
  handleOnChange,
  checkboxName,
  checkboxValue,
  reference,
  radioButton,
  checked,
  disabled,
}) => {
  const checkboxControlclassName = className('checkbox__control', {
    radioButton,
  });

  return (
    <>
      <label className="checkbox">
        <span className="checkbox__input">
          <input
            onChange={handleOnChange}
            type="checkbox"
            name={checkboxName}
            value={checkboxValue}
            ref={reference}
            checked={checked}
            disabled={disabled}
          />
          <span className={checkboxControlclassName}>
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
        <span className="radio__label">{message}</span>
      </label>
    </>
  );
};

export default Checkbox;
