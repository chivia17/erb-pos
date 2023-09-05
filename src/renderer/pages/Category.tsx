import HeaderList from 'renderer/components/List/HeaderList';
import List from 'renderer/components/List/List';

export default function Category() {
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
          <List />
        </div>
      </div>
    </div>
  )
}
