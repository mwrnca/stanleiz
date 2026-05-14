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
        <a href="https://www.instagram.com/centralvalleyvineyard?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="card-words">contact</a>
      </div>
 
    </div>
    )
}

export default ProductCard