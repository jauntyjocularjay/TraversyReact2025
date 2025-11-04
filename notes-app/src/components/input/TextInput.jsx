import React from 'react'

export default function TextInput({
    name,
    className,
    value,
    onChange,
    required=false
}) {
    return (
        <label htmlFor={name} className='block font-semibold mt-2'>
            <h3>
                {name.substring(0, 1).toUpperCase() +
                    name.substring(1, name.length)}
            </h3>
            <input
                type='text'
                name={name}
                id={name}
                className={className}
                value={value}
                onChange={onChange}
                required={required}
            ></input>
        </label>
    )
}
