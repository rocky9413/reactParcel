import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const onSetDropdown = e => updateState(e.target.value);

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        data-testid={id}
        value={state}
        onChange={onSetDropdown}
        onBlur={onSetDropdown}
        disabled={!options.length}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
