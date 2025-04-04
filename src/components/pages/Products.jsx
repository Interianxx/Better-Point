import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Actualizado de useHistory a useNavigate
import { addToCart } from "../../slices/cartSlice";
import { useGetAllProductsQuery } from "../../slices/productsApi";

import "./Products.css";

const Products = () => {
    const { items: products, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Usar useNavigate

    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log("Api", isLoading);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart"); // Actualizado de history.push a navigate
    };

    return (
        <div className="home-container">
            {status === "success" ? (
                <>
                    <h2>Los mas vendidos</h2>
                    <div className="products">
                        {data &&
                            data?.map((product) => (
                                <div key={product.id} className="product">
                                    <h3>{product.name}</h3>
                                    <img src={product.image} alt={product.name} />
                                    <div className="details">
                                        <span>{product.desc}</span>
                                        <span className="price">${product.price}</span>
                                    </div>
                                    <button onClick={() => handleAddToCart(product)}>
                                        Añadir al carrito
                                    </button>
                                </div>
                            ))}
                    </div>
                </>
            ) : status === "pending" ? (
                <p>Loading...</p>
            ) : (
                <p>Unexpected error occured...</p>
            )}
        </div>
    );
};

export default Products;
