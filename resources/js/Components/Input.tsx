import React, { useEffect, useRef } from 'react';

interface Props {
    type?: any;
    name?: any;
    value?: any;
    className?: any;
    autoComplete?: any;
    required?: any;
    isFocused?: any;
    handleChange?: any;
}

export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}: Props) {
    const input = useRef<any>();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
