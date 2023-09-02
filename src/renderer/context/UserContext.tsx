import { createContext, FC, ReactNode, useState } from 'react';
import { User, UserContextData } from 'renderer/@types/User';

type Props = {
  children?: ReactNode
};

export const UserContext = createContext<UserContextData | null>(null);

const UserProvider : FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [isLogged, setIsLogged] = useState<boolean>(true);

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

  const logout = () => {
    setIsLogged(false);
    console.log('Is logout')
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        login,
        logout
      }}
      >
        {children}
      </UserContext.Provider>
  );
}

export default UserProvider;

