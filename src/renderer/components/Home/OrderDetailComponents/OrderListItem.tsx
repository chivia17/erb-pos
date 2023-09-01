import ProductImage from '../ProductImage';

export default function OrderListItem({name, quantity, price}) {
  return (
    <div className="grid grid-cols-2 w-full overflow-y-hidden h-32">
      <div className='w-full h-full py-4 px-6'>
        <ProductImage></ProductImage>
      </div>
      <div className='w-full p-5'>
        <div className='align-top w-fit h-1/2'>
          <div className='text-md text-black font-semibold'>
            {name}
          </div>
        </div>
        <div className='flex flex-nowrap items-center w-full h-1/2'>
          <div className='text-gray-400 font-normal text-sm text-left w-1/2'>{`${quantity}x`}</div>
          <div className='text-sky-600 font-normal text-sm text-right w-1/2'>{`$${quantity*price}`}</div>
        </div>
      </div>
    </div>
  )
}
