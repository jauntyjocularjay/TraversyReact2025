import AddToCartButton from './AddToCartButton'


export default function ProductCard({product}) {
  return (
      <div
          className='bg-gray-500 rounded-lg shadow p-4 flex flex-col'
      >
          <img
              src={product.image}
              alt={product.name}
              className='h=40 object-cover rounded mb-4'
          />
          <h2 className='text-xl font-semibold'>{product.name}</h2>
          <p className='text-gray-300 text-sm mb-2'>{product.description}</p>
          <p className='font-bold text-lg'>${product.price.toFixed(2)}</p>
          <AddToCartButton product={product}  />
      </div>
  )
}
