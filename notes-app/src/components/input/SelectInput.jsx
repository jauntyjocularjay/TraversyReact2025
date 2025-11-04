import React from 'react'

export default function SelectInput({
    name,
    className,
    value,
    values,
    onChange,
    required=false
}) {
    return (
        <label htmlFor={name} className='block font-semibold'>
            {name.substring(0, 1).toUpperCase() +
                name.substring(1, name.length)}
            <select
                name={name}
                id={name}
                className={className}
                value={value}
                onChange={onChange}
                required={required}
            >
                {values.map((string, i) => (
                    <option value={string} key={i}>
                        {string}
                    </option>
                ))}
            </select>
        </label>
    )
}

/**
 *                     <label htmlFor='priority' className='block font-semibold'>
                        Proirity
                        <select
                            name='priority'
                            id='priority'
                            type='text'
                            className='w-full p-2 border rounded-lg'
                            defaultValue='Medium'
                            onChange={handleChange}
                        >
                            {options.priority.map((priority, i) => (
                                <option key={i} value={priority}>
                                    {priority}
                                </option>
                            ))}
                        </select>
                    </label>
 */
