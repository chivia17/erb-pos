export default function AddToCartButton({product, quantity}) {
  function addToCart() {
    console.log(`Add product: ${name} - ${quantity}`);
  }

  return(
    <div className="flex w-2/4 items-center">
      <button onClick={addToCart} className="bg-sky-700 hover:bg-sky-900 text-white rounded px-2 md:mx-4 pr-2 w-full h-full m-2" type="button">
        Add
      </button>
    </div>
  )
}
