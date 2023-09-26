import "./Producto.css";

export const Producto = ({ image, name, price }) => {
  return (
    <div className="info">
      <div clasName="carrito"></div>
      <div className="image-container">
        <div className="carrito">
          <i className="ri-shopping-cart-line"></i>
        </div>
        <img src={image} />
      </div>
      <div>
        <h2>{name}</h2>
        <div className="precio">
          <h2>₡{price}</h2>
        </div>
      </div>
    </div>
  );
};
