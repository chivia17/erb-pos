import classNames from 'classnames';
import { useState } from 'react';
import useProduct from 'renderer/hooks/useProduct';

export default function CategoryFilter() {
  const [categorySelected, setCategorySelected] = useState('All');
  const { filterByCategory } = useProduct();

  const categories = [
    {
      id: 123,
      name: 'All'
    },
    {
      id: 223,
      name: 'Skin care'
    },
    {
      id: 323,
      name: 'Toys'
    },
    {
      id: 423,
      name: 'Hydratation'
    },
    {
      id: 523,
      name: 'Toy'
    },
    {
      id: 623,
      name: 'Stationery'
    },
    {
      id: 723,
      name: 'Stationery'
    },
    {
      id: 823,
      name: 'Bagpack'
    }
  ]

  function handleCategoryClick (event) {
    const category = event.target.innerText;

    setCategorySelected(category);
    filterByCategory(category);
  }

  return (
    <div className="flex whitespace-nowrap flex-nowrap w-full gap-5 ml-6 mx-4 h-16">
      {categories.map((item, index) => {
        return (
          <div key={index} className={classNames({
            'flex rounded my-3 pr-2 px-2 text-center justify-center items-center cursor-pointer': true,
            'bg-sky-700 text-white': categorySelected === item.name,
            'bg-white hover:bg-sky-900 hover:text-white': categorySelected !== item.name
          })}
          onClick={handleCategoryClick}>
            <span>{item.name}</span>
          </div>
        )
      })}
    </div>
  );
}
