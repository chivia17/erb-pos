import { FC, ReactNode, createContext, useState } from 'react';
import { Product, ProductContextData } from 'renderer/@types/Product';

type Props = {
  children?: ReactNode
};

export const ProductContext = createContext<ProductContextData | null>(null);

const ProductProvider : FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>();

  const filterByCategory = (category: string) => {
    console.log(`Filter by category: ${category}`);
  }

  const search = (wordToSearch: string) => {
    console.log(`Search by word: ${wordToSearch}`);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        search,
        filterByCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
