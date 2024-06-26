export type Product ={

    "id":number,
    "name": string,
    "price": number,
    "description":string,
    "imageUri": string
} 
export type OrderLocationData ={
    address:string,
    latitude: number,
    longitude: number,
}


type ProductId ={
    id: number;
}

export type OrderPlayload ={
    products: ProductId[];

} & OrderLocationData;

