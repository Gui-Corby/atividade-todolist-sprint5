
import { ProductList } from "../../components/ProductList";
import { Cart } from "../../components/Cart";
import { ProductProvider } from "../../providers/ProductContext";

export const HomePage = () => {
  return (
    <main>
      <ProductProvider>
        <ProductList />
      </ProductProvider>

      <Cart />
    </main>
  );
};
