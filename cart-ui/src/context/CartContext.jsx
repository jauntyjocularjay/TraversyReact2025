import { createContext, useEffect, useState } from 'react'

const CartContext = createContext()

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    useEffect(() => console.log('cart updated:', cart), [cart])

    const addToCart = (product) => {
        console.log('addToCart(product called)')
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id)

            if (existing) {
                return prevCart.map((item) => item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            } 
            return [...prevCart, { ...product, qty: 1 }]
        })
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
