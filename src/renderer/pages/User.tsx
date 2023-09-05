import HeaderList from 'renderer/components/List/HeaderList';
import List from 'renderer/components/List/List';

export default function User() {
  const headers = [
    {
      label: 'Name',
      key: 'name',
      textOrientation: 'text-left',
    },
    {
      label: 'Role',
      key: 'role',
      textOrientation: 'text-center',
    },
    {
      label: 'Status',
      key: 'status',
      textOrientation: 'text-center',
    },
  ];

  const items = [
    {
      id: 1,
      name: 'Admin',
      role: 'Administrator',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jhon Doe',
      role: 'Vendor',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Martin',
      role: 'Vendor',
      status: 'Active',
    },
  ];

  const addNewUser = () => {
    console.log('Add user');
  };

  const printUserList = () => {
    console.log('Print users');
  };

  const downloadUserList = () => {
    console.log('Download user');
  };

  const uploadUserList = () => {
    console.log('Upload user');
  };

  return (
    <div className="h-screen w-screen font-sans">
      <div className="w-full">
        <HeaderList
          title="Users"
          type="User"
          addItem={addNewUser}
          print={printUserList}
          download={downloadUserList}
          upload={uploadUserList}
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
