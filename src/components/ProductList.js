import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setProducts(json)
            })
    } , [])


console.log(products);

    return ( 
        <section className="product_grid">
            {products.map((elt) => {
                return(
                    <ProductItem 
                    image={elt.image}
                    price={elt.price}
                    title={elt.title}
                    id={elt.id}
                    />
                )
            })}
        </section>
    );
}

export default ProductList;