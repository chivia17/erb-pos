import PaymentDetailItem from './PaymentDetailItem';

export default function PaymentDetail() {
  return (
    <div className='w-full h-2/12'>
      <div className="grid grid-cols-1 w-full border-dashed border-t border-t-gray-300">
        <PaymentDetailItem descriptionClass={'text-gray-400 font-normal text-md'}
          amountClass={'text-sky-600 font-normal text-sm'}
          description={'Subtotal'} amount={742} />
        <PaymentDetailItem descriptionClass={'text-gray-400 font-normal text-md'}
          amountClass={'text-sky-600 font-normal text-sm'}
          description={'Discount sales'} amount={-4} />
      </div>
      <div className='w-full border-t border-t-gray-300 my-4 pt-2'>
        <PaymentDetailItem descriptionClass={'text-gray-400 font-semibold text-lg'}
          amountClass={'text-sky-600 font-semibold text-lg'}
          description={'Total'} amount={740} />
      </div>
    </div>
  )
}
