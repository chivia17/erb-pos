import { useContext } from 'react';
import { UserContextData } from 'renderer/@types/User';
import { UserContext } from 'renderer/context/UserContext';

const useUser = () => {
  return useContext(UserContext) as UserContextData;
}

export default useUser;
