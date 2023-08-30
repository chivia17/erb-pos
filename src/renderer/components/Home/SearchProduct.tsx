import { useState } from "react";
import useProduct from "renderer/hooks/useProduct";

export default function SearchProduct() {
  const [wordToSearch, setWordToSearch] = useState('');
  const { search } = useProduct();

  function handleWordToSearch(event_: React.ChangeEvent<HTMLInputElement>) {
    setWordToSearch(event_.target.value);
  }

  function handleClickSearch() {
    search(wordToSearch);
  }

  return (
    <div className="w-full">
      <div className="w-2/3 mt-5 ml-6 p-2 bg-white rounded">
        <input type="text"
          className="borde-none rounded-md py-2 w-2/3 mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Search all product here..."
          value={wordToSearch}
          onChange={handleWordToSearch}/>
        <button type="button"
          className="cursor-pointer text-white font-semibold py-2 bg-sky-700 rounded-md w-3/12"
          onClick={handleClickSearch}>
          Search
        </button>
      </div>
    </div>
  )
}
