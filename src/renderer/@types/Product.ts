import { Category } from './Category';
import { Provider } from './Provider';

export interface Product {
  productId: number;
  provider: Provider;
  category: Category;
  name: string;
  description: string;
  cost: number;
  price: number;
  quantity: number;
  image: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductContextData {
  products: Product[] | undefined;
  search: (wordToSearch: string) => void;
  filterByCategory: (category: string) => void;
}
