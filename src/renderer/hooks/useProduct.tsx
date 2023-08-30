import { useContext } from 'react';
import { ProductContextData } from 'renderer/@types/Product';
import { ProductContext } from 'renderer/context/ProductContext';

const useProduct = () => {
  return useContext(ProductContext) as ProductContextData;
}

export default useProduct;
