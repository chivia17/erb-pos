export interface User {
  userId: number
  name: string
  roleId: number
  status: boolean
  createdAt: string
  updatedAt: string
}

export interface UserContextData {
  user: User | undefined;
  isLogged: boolean;
  login: (username:string, password:string) => void;
  logout: () => void;
}
