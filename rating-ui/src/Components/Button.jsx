import React from 'react'

export default function Button({
    text,
    onClick,
    className,
    disabled = false,
}) {
        return (
            <button className={className} onClick={onClick} disabled={disabled}>
                {text}
            </button>
        )
}
