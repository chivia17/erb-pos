import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from 'renderer/hooks/useUser';

export default function LoginButton({username, password}) {
  const navigate = useNavigate();
  const { login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigate('/home')
    }
  }, [isLogged])

  function signIn() {
    login(password, username);
  }

  return (
    <button type="button"
      className="cursor-pointer text-white font-semibold py-2 bg-sky-700 rounded-md w-4/12"
      onClick={signIn}>
      Sign
    </button>
  )
}
