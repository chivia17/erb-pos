export default function PaymentDetailItem({descriptionClass, amountClass, description, amount}) {
  return (
    <div className="flex flex-nowrap w-100 align-middle mx-4 py-2">
      <div className={`w-1/2 text-left ${descriptionClass}`}>
        {description}
      </div>
      <div className={`w-1/2 text-right ${amountClass}`}>
        {`$${amount}`}
      </div>
    </div>
  );
}
