export default function ProductInfo ({name, cost}) {
  return (
    <div>
      <div className='text-sm font-medium text-justify ml-2 h-10'>
        {name}
      </div>
      <div className='text-sm font-semibold text-sky-700 text-justify ml-2'>
        {`$${cost}`}
      </div>
    </div>
  );
}
