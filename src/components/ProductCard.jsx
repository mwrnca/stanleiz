import "./ProductCard.css"

function ProductCard({ title, description, stock }) {
  return (
    <div className="project-card">

      <div className="card-header">
        {/* <img className="card-img">{img}</img> */}
        <h3 className="card-title">{title}</h3>
         <p className="card-desc">{description}</p>
      </div>

      <div className="cart-btn">
        <a className="card-words">ADD TO CART</a>
      </div>
 
    </div>
    )
}

export default ProductCard