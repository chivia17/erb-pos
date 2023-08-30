import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from 'renderer/hooks/useUser';

export default function LogoutButton({collapsed}) {
  const navigate = useNavigate();
  const { logout, isLogged } = useUser();

  useEffect(() => {
    if (!isLogged) {
      navigate('/')
    }
  }, [isLogged])

  return (
    <div className='grid place-content-stretch p-4 '>
      <div className='flex gap-4'>
        <button type='button'
          className={classNames({
            'flex w-full hover:bg-sky-700': true,
            'rounded-md p-2 gap-4 ': !collapsed,
            'rounded-full p-2 w-10 h-10': collapsed,
          })}
          onClick={logout}>
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          <span>{!collapsed && 'Logout'}</span>
        </button>
      </div>
    </div>
  )
}
