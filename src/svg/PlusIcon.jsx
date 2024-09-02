import React from 'react';

export default function PlusIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            {...props}
        >
            <path fill="#fff"
                  d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 1 0 1.5 0V8.5h4.25a.75.75 0 1 0 0-1.5H8.5V2.75Z"/>
        </svg>
    );
};
