import { createContext, useEffect, useState } from 'react'

const ProductContext = createContext()

export function ProductProvider({ children }) {

    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products')
                if (!res.ok) throw new Error('failed to fetch products')
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setloading(false)
            }
        }

        fetchProducts()
    }, [])

    return (<ProductContext.Provider value={{error, loading, products}} >
        {children}
    </ProductContext.Provider>)
}

export { ProductContext as default }
