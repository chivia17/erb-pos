import OrderListItem from './OrderListItem';

export default function OrderList() {
  const order = [
    {
      product: '12345',
      quantity: 1,
      price: 30
    },
    {
      product: 'asdasfasfs',
      quantity: 3,
      price: 1000
    },
    {
      product: '123456',
      quantity: 1,
      price: 30
    },
    {
      product: 'asdasfasfd',
      quantity: 3,
      price: 1000
    },
    {
      product: 'asdasfasfdsdsd',
      quantity: 1,
      price: 500
    }
  ]
  return (
    <div className="w-full px-4 pt-4 h-3/5 overflow-y-auto">
      {order.map(product => {
        return (
          <OrderListItem key={product.product}
            name={product.product} quantity={product.quantity} price={product.price} />
        );
      })

      }
    </div>
  )
}
