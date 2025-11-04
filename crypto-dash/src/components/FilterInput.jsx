import React from 'react'

export default function FilterInput({ filter, setFilter }) {
    return (
        <form htmlFor='filter' className='filter'>
            <input
                type='text'
                id='filter'
                value={filter}
                onChange={(e) => setFilter(e.target.value) }
                placeholder='Filter by name or symbol'
            />
        </form>
    )
}
