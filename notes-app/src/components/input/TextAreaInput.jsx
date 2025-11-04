import React from 'react'

export default function TextAreaInput({ name, className, value, onChange, required = false }) {
    return (
        <label htmlFor={name} className='block font-semibold mt-2'>
            {name.substring(0, 1).toUpperCase() +
                name.substring(1, name.length)}
            <textarea
                type='text'
                name={name}
                id={name}
                className={className}
                onChange={onChange}
                value={value}
                required={required}
            ></textarea>
        </label>
    )
}
