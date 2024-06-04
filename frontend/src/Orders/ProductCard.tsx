import { formatPrice } from "./helpers";
import { Product } from "./types"

type Props={
    product : Product;
    onSelectProduct:(product:Product) => void;
    isSeleted: boolean;
}



function ProductCard({product,onSelectProduct, isSeleted}:Props) {
 
    return (
      <div 
      className={`order-card-container ${isSeleted ? 'selected': ''}`}
      onClick={()=> onSelectProduct(product)}
      >
          <h3 className="order-card-content">
            {product.name}
          </h3>
          <img 
          src={product.imageUri} 
          alt={product.name} className="order-card-image"/>
          <h3 className="order-card-price">
          { formatPrice(product.price)}
          </h3>
          <div className="order-card-description">
            <h3>Descricao</h3>
             <p>
                {product.description}            
            </p>
          </div>
        
      </div>
    )
  }
  export default  ProductCard 