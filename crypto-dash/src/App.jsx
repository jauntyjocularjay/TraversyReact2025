import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/not-found'
import CoinDetailsPage from './pages/coin-detail'
import Header from './components/Header'
const API_URL = import.meta.env.VITE_COINS_API_URL

export default function App() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [limit, setLimit] = useState(5)
    const [filter, setFilter] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [currency, setCurrency] = useState('usd')
    // eslint-disable-next-line no-unused-vars
    const [sortBy, setSortBy] = useState('market_cap_desc')
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [sparkline, setSparkline] = useState(false)

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch(
                    API_URL +
                        `?vs_currency=${currency}` +
                        `&order=market_cap_desc` +
                        `&per_page=${limit + 2}` + // +2 to account for USD and USD-Tether, which are 1:1 to USD
                        `&page=${page}` +
                        `&sparkline=${sparkline}`
                )
                if (!res.ok) throw new Error('failed to fetch data')
                let data = await res.json()
                data = data.filter((datum) => datum.id !== 'usd-coin')
                data = data.filter((datum) => datum.id !== 'tether')
                data = data.length > limit ? data.slice(0, limit) : data
                setCoins(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchCoins()
    }, [currency, limit, page, sparkline])

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage
                            {...{
                                coins,
                                filter,
                                setFilter,
                                limit,
                                setLimit,
                                sortBy,
                                setSortBy,
                                loading,
                                error,
                            }}
                        />
                    }
                />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/coin/:id' element={<CoinDetailsPage />} />
                <Route path='/*' element={<NotFoundPage/>} />
            </Routes>
        </>
    )
}
