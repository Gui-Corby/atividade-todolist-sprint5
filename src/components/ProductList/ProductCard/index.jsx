import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

export const ProductCard = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  return (
    <li>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addProduct(product)}>Adicionar Produto</button>
    </li>
  );
};
