import HeaderList from 'renderer/components/List/HeaderList';
import List from 'renderer/components/List/List';

export default function Provider() {
  const headers = [
    {
      label: 'Name',
      key: 'name',
      textOrientation: 'text-left',
    },
    {
      label: 'Address',
      key: 'address',
      textOrientation: 'text-center',
    },
    {
      label: 'Phone',
      key: 'phone',
      textOrientation: 'text-center',
    },
  ];

  const items = [
    {
      id: 1,
      name: 'Teng da',
      address: 'Callle textet #5',
      phone: '325235423542352345',
    },
    {
      id: 2,
      name: 'Venta da',
      address: 'Callle colombia #4',
      phone: '12323452435',
    },
    {
      id: 3,
      name: 'Multio',
      address: 'Callle merida #23',
      phone: '0987654321',
    },
  ];

  const addNewProvider = () => {
    console.log('Add provider');
  };

  const printProviderList = () => {
    console.log('Print provider');
  };

  const downloadProviderList = () => {
    console.log('Download provider');
  };

  const uploadProviderList = () => {
    console.log('Upload provider');
  };

  return (
    <div className="h-screen w-screen font-sans">
      <div className="w-full">
        <HeaderList
          title="Providers"
          type="Provider"
          addItem={addNewProvider}
          print={printProviderList}
          download={downloadProviderList}
          upload={uploadProviderList}
        />
      </div>
      <div className="w-full p-4">
        <div className="w-full px-5 py-3 bg-white rounded">
          <List headers={headers} items={items} />
        </div>
      </div>
    </div>
  );
}
