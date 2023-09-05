import FilterList from './FilterList';
import ListActions from './ListActions';
import Pagination from './Pagination';

export default function List({headers, items}) {
  const isAdmin = true;

  return (
    <div className="w-full h-fit overflow-y-hidden rounded-lg">
      <div className='py-3'>
        <FilterList />
      </div>
      <table className="table-fixed w-full h-10/12 my-4">
        <thead className='bg-gray-200 text-gray-500 font-light'>
          <tr>
            {headers.map(header => {
              return (
                <th key={header.key} className={`py-3 border-y border-slate-300 ${header.textOrientation}`}>{header.label}</th>
              );
            })}
            {isAdmin &&
            <th className={`py-3 border-y border-slate-300 text-center`}>Actions</th>
            }
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return(
              <tr key={item.id} className='border-b border-slate-300 hover:bg-slate-100'>
                {
                  headers.map(header =>{
                    return (
                      <td key={item[header.key]} className={`text-left py-2 ${header.textOrientation}`}>{item[header.key]}</td>
                    );
                  })

                }
                {isAdmin &&
                  <td className='mx-auto py-2'>
                    <ListActions />
                  </td>
                }
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='w-full py-4'>
        <Pagination />
      </div>
    </div>
  );
}
