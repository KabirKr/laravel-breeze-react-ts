import React from 'react';

// TODO Fix any type
interface Props {
    name: React.InputHTMLAttributes<HTMLInputElement>['name'];
    value: React.InputHTMLAttributes<HTMLInputElement>['value'];
    handleChange: any;
}

function Checkbox({ name, value, handleChange }: Props) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
        />
    );
}

export default Checkbox;
