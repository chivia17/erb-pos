import { createContext, FC, ReactNode, useState } from 'react';
import { User, UserContextData } from 'renderer/@types/User';

type Props = {
  children?: ReactNode
};

export const UserContext = createContext<UserContextData | null>(null);

const UserProvider : FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const login = (username: string, password: string) => {
    setUser({
      userId: 1,
      name: username,
      roleId: 1,
      status: true,
      createdAt: '',
      updatedAt: ''
    });

    setIsLogged(true);
    console.log('Is login in');
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        login
      }}
      >
        {children}
      </UserContext.Provider>
  );
}

export default UserProvider;

