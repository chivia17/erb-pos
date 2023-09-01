export default function PayButton({amount}) {
  function pay() {
    console.log(`Pay total: ${amount}`)
  }

  return (
    <div className="w-full px-4 h-1/12">
      <button type="button"
        onClick={pay}
        className="bg-sky-700 hover:bg-sky-900 font-medium text-white rounded w-full p-3">
        Pay Now
      </button>
    </div>
  );
}
