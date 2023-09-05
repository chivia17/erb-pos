import HeaderList from 'renderer/components/List/HeaderList';
import List from 'renderer/components/List/List';

export default function Category() {
  const headers = [
    {
      label: 'Name',
      key: 'name',
      textOrientation: 'text-left'
    },
    {
      label: 'Products',
      key: 'products',
      textOrientation: 'text-center'
    },
    {
      label: 'Status',
      key: 'status',
      textOrientation: 'text-center'
    }
  ];

  const items = [
    {
      id: 1,
      name: 'Skin care',
      products: 8,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Bags',
      products: 1,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Toys',
      products: 5,
      status: 'Active'
    }
  ]

  function addNewCategory() {
    console.log('Add category');
  }

  function printCategoryList() {
    console.log('Print categories');
  }

  function downloadCategoryList() {
    console.log('Download category');
  }

  function uploadCategoryList() {
    console.log('Upload category');
  }

  return (
    <div className="h-screen w-screen font-sans">
      <div className='w-full'>
        <HeaderList title='Categories' type='Category' addItem={addNewCategory} print={printCategoryList} download={downloadCategoryList} upload={uploadCategoryList}/>
      </div>
      <div className='w-full p-4'>
        <div className='w-full px-5 py-3 bg-white rounded'>
          <List headers={headers} items={items} />
        </div>
      </div>
    </div>
  )
}
