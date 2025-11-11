import ProductCard from './ProductCard'
import useProducts from '../hooks/UseProducts'

export default function ProductList() {
    const {products, loading, error} = useProducts()
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {loading && <p>Loading...</p>}
            {error && <div>{error}</div>}
          {products.map((product) => (
              <ProductCard key={product.id} { ... { product } }/>
          ))}
      </div>
  )
}
