import UseCart from '../hooks/UseCart.js'

export default function AddToCartButton({ product }) {
    const { addToCart } = UseCart()
    console.log(
        'AddToCart renders',
        'product:',
        product,
        'addToCart:',
        addToCart
    )
    return (
        <button
            onClick={() => {
                console.log('AddToCartButton clicked')
                addToCart(product)
            }}
            className='bg-blue-600 text-gray mt-3 px-4 py-2 rounded transition hover:bg-blue-500'
        >
            Add to Cart
        </button>
    )
}
