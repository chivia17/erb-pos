import CategoryFilter from 'renderer/components/Home/CategoryFilter';
import OrderDetail from 'renderer/components/Home/OrderDetail';
import ProductGrid from 'renderer/components/Home/ProductGrid';
import SearchProduct from 'renderer/components/Home/SearchProduct';

export default function POS() {
  return (
    <div className="grid grid-cols-7 h-screen w-screen font-sans">
      <div className="col-span-5 flex flex-wrap overflow-hidden">
        <SearchProduct />
        <CategoryFilter />
        <ProductGrid />
      </div>
      <div className="bg-white col-span-2 overflow-hidden">
        <OrderDetail />
      </div>
    </div>
  )
}
