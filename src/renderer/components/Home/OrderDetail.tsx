import OrderList from './OrderDetailComponents/OrderList';
import PayButton from './OrderDetailComponents/PayButton';
import PaymentDetail from './OrderDetailComponents/PaymentDetail';

export default function OrderDetail() {
  return(
    <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
      <div className="pt-4 px-4 text-justify w-full text-2xl h-1/12">
        <div className="font-bold">Order Details</div>
      </div>
      <div className="border-t border-gray-200 my-4 px-4"></div>
      <OrderList />
      <PaymentDetail></PaymentDetail>
      <PayButton amount={1000}/>
    </div>
  )
}
