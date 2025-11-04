import React from 'react'

const option = [5, 10, 20, 50, 100]

export default function LimitSelector({ limit, setLimit }) {
    return (
        <div className='controls'>
            <label htmlFor='limit'>Show: </label>
            <select
                value={limit}
                id='limit'
                onChange={(e) => {
                    setLimit(Number(e.target.value))
                }}
            >
                {option.map((value) => <option key={`option-${value}`} value={value}>{value}</option>)}
            </select>
        </div>
    )
}
