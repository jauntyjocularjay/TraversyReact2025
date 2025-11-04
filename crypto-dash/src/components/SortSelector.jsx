import React from 'react'

export default function SortSelector({ sortBy, onSortChange }) {
    return (
        <div className='controls'>
            <label htmlFor='sort'>Sort By:</label>
            <select
                id='sort'
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value='market_cap_desc'>Market Cap ↓</option>
                <option value='market_cap_asc'>Market Cap ↑</option>
                <option value='price_desc'>Price ↓</option>
                <option value='price_asc'>Price ↑</option>
                <option value='change_desc'>24h Change ↓</option>
                <option value='change_asc'>24h Change ↑</option>
            </select>
        </div>
    )
}
