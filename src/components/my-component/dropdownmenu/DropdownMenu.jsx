import React from 'react';

const Dropdown = ({
    width,
    height,
    background,
    border,
    borderRadius,
    name,
    value,
    optionData,
    label,
    placeholder,
    handleChange
}) => {


  return (

    <div>
        <select
        style={{width: width, height: height, background: background, border, borderRadius}}
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        >
            {
                optionData && optionData.map((item, value) => (
                    <option>
                        {item}
                    </option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown;