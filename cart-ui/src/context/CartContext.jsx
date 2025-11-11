import { createContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider {...{ cart }}> {children}</CartContext.Provider>
    )
}

export { CartProvider as default }
