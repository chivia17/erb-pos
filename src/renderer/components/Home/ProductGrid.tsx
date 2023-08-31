import GridItem from './GridItem';

export default function ProductGrid() {
  const products = [
    {
      name: '12345678901234 567890123456789'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '4'
    },
    {
      name: '5'
    },
    {
      name: '6'
    },
    {
      name: '7'
    },
    {
      name: '8'
    },
    {
      name: '9'
    },
    {
      name: '10'
    },
    {
      name: '11'
    },
    {
      name: '12'
    },
    {
      name: '13'
    },
    {
      name: '14'
    },
    {
      name: '15'
    }
  ]
  return (
    <div className="grid grid-cols-4 gap-7 my-7 ml-6 mx-4 w-full overflow-y-scroll h-4/5">
      {
        products.map((product) => {
          return (
            <GridItem key={product.name} name={product.name}/>
          )
        })
      }
    </div>
  )
}
