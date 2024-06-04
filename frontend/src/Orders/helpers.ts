import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], Product: Product){
    return selectedProducts.some(item => item.id === Product.id);
}


export function formatPrice (price:number){
    const formatter = new Intl.NumberFormat('pt',{
      style:"currency",
      currency:"EUR", 
      minimumFractionDigits:2,
    })
    return formatter.format(price);
  } 