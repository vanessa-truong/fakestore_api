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
          <section key={i}>
            <img src={elt.image} alt="#" className="image_details" />
            <h3>{elt.title}</h3>
            <p>{elt.price}$</p>
            <p>{elt.description}</p>
          </section>
        );
      })}
    </div>
  );
};

export default ProductDetails;
