import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";
import { useGetAllServicesQuery } from "../../slices/servicesApi";

const Services = () => {
    const { items: services, status } = useSelector((state) => state.services);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, error, isLoading } = useGetAllServicesQuery();
    console.log("Api Services:", isLoading, data);

    const handleAddToCart = (service) => {
        dispatch(addToCart(service));
        navigate("/cart");
    };

    return (
        <div className="home-container">  {/* Cambiado a home-container para reutilizar estilos */}
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error al cargar los servicios...</p>
            ) : (
                <>
                    <h2>Nuestros Servicios</h2>
                    <div className="products">  {/* Cambiado a products para reutilizar estilos */}
                        {data?.map((service) => (
                            <div key={service.id} className="product">  {/* Cambiado a product */}
                                <h3>{service.name}</h3>
                                <img src={service.image} alt={service.name} />
                                <div className="details">
                                    <span>{service.desc}</span>
                                    <span className="price">${service.price}</span>
                                </div>
                                <button onClick={() => handleAddToCart(service)}>
                                    Añadir al carrito
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Services;