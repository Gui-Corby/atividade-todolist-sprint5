import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

export const Cart = () => {
 const {shoppingCart, totalPrice, removeProduct} = useContext(CartContext);

  return (
    <div>
      <h2>Carrinho de compras</h2>
      <ul>
        {shoppingCart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => removeProduct(product)}>Remover Produto</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};
