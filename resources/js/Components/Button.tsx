import React from 'react';

interface Props {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    className?: string;
    processing?: boolean;
    children?: React.ReactNode;
}

function Button({
    type = 'submit',
    className = '',
    processing,
    children,
}: Props) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
export default Button;
