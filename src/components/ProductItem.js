import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="product_item">
      <img src={props.image} alt="img" className="image_list" />
      <h3>{props.title}</h3>
      <p className="price">{props.price}$</p>
      <div>
        <Link
          to={`/${props.id}`}
          state={props.allProducts}
          className="link_list"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
