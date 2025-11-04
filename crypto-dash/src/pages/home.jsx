import React from 'react'
import CoinCard from '../components/CoinCard.jsx'
import LimitSelector from '../components/LimitSelector.jsx'
import FilterInput from '../components/FilterInput.jsx'
import SortSelector from '../components/SortSelector.jsx'
import Spinner from '../components/Spinner.jsx'

export default function HomePage({
    coins,
    filter,
    setFilter,
    limit,
    setLimit,
    sortBy,
    setSortBy,
    loading,
    error,
}) {
    const filteredCoins = coins
        .filter((coin) => {
            return (
                coin.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
                coin.symbol.toLowerCase().includes(filter.toLocaleLowerCase())
            )
        })
        .slice()
        .sort((a, b) => {
            switch (sortBy) {
                case 'market_cap_desc':
                    return b.market_cap - a.market_cap
                case 'market_cap_asc':
                    return a.market_cap - b.market_cap
                case 'price_desc':
                    return b.current_price - a.current_price
                case 'price_asc':
                    return a.current_price - b.current_price
                case 'change_desc':
                    return (
                        b.price_change_percentage_24h -
                        a.price_change_percentage_24h
                    )
                case 'change_asc':
                    return (
                        a.price_change_percentage_24h -
                        b.price_change_percentage_24h
                    )
            }
        })
    return (
        <>
            <h1>Crypto-Dash</h1>
            {loading && (
                <Spinner />
                // <p>loading...</p>
            )}
            {error && <div className='error'>{error}</div>}

            <div className='top-controls'>
                <FilterInput {...{ filter, setFilter }} />
                <LimitSelector {...{ limit, setLimit }} />
                <SortSelector {...{ sortBy, onSortChange: setSortBy }} />
            </div>
            {!loading && !error && (
                <main className='grid'>
                    {filteredCoins.length >= 0 ? (
                        filteredCoins.map((coin) => (
                            <CoinCard key={coin.id} {...{ coin }} />
                        ))
                    ) : (
                        <p>No Matching Coins</p>
                    )}
                </main>
            )}
        </>
    )
}
