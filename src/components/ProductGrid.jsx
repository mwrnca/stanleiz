import "./ProductGrid.css"
import ProductCard from "./ProductCard"
import { products } from "./Products";

function ProductGrid () {
  return (
    <section id="ourProducts" className="contata">
      <div className="cards">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  ) 
}
export default ProductGrid
