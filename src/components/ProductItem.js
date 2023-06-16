import { Link } from "react-router-dom";


const ProductItem = (props) => {
    return ( 
        <div>
            <img src={props.image} alt="img"  className="image_list"/>
            <h3>{props.title}</h3>
            <p className="price">{props.price}$</p>
            <Link to={`/${props.id}`} state={props.allProducts} className="link_list">Read More</Link>
        </div>
    );
}



export default ProductItem;