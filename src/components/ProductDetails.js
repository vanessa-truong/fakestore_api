import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const idParams = useParams();

  // console.log(idParams);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const detailProducts = products.filter((elt) => {
    return elt.id.toString() === idParams.id;
  });

  console.log(detailProducts);

  return (
    <div>
      <NavBar />
      {detailProducts.map((elt, i) => {
        return (
          <section key={i} className="product_details">
            <img src={elt.image} alt="#" className="product_image" />
            <h3 className="product_title">{elt.title}</h3>
            <p className="product_price">{elt.price}$</p>
            <p className="product_description">{elt.description}</p>
          </section>
        );
      })}
    </div>
  );
};

export default ProductDetails;
