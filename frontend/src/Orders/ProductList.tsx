import ProductCard from './ProductCard'
import { Product } from './types'
import { checkIsSelected } from './helpers'


type Props ={
    products:Product[];
    selectedProducts:Product[] ;
    onSelectProduct:(product:Product) => void;

}
function ProductList({products,selectedProducts, onSelectProduct}:Props) {


  return (
    <div className="orders-list-container">
        <div className="orders-list-items">
        {
            products.map(product =>(
                <ProductCard 
                key={product.id}  
                product={product}
                onSelectProduct={onSelectProduct}
                isSeleted={checkIsSelected(selectedProducts, product)}
                
                />
            ))
           }

        </div>
      
    </div>
  )
}
export default  ProductList