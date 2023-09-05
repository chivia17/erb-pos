import BulkActions from './BulkActions';

export default function HeaderList(props) {
  const { title, addItem, print, download, upload, type } = props;
  return (
    <div className='w-full flex bg-white py-6 px-7 items-center'>
      <div className='font-medium text-lg w-3/4'>
        {title}
      </div>
      <BulkActions type={type} addItem={addItem} print={print} download={download} upload={upload} />
    </div>
  );
}
