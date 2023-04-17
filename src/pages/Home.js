
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

const Home = () => {
    return ( 
        <div>
            <section className="section_header">
            <NavBar />
            </section>
            <ProductList />
        </div>
    );
}

export default Home;