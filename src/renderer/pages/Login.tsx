import { useState } from 'react';
import LoginButton from 'renderer/components/LoginButton';
import PasswordInput from 'renderer/components/PasswordInput';
import UsernameInput from 'renderer/components/UsernameInput';
import login from '../../../assets/login.png';

export default function Login () {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="grid grid-cols-2 h-screen font-sans">
      <div className="bg-gray-100">
        <div className='flex flex-col items-center justify-center h-screen gap-y-5'>
          <UsernameInput username={username} setUsername={setUserName} />
          <PasswordInput password={password} setPassword={setPassword} />
          <LoginButton username={username} password={password}></LoginButton>
        </div>
      </div>
      <div>
        <img src={login} alt="logo" className="w-full h-full object-cover mx-auto" />
      </div>
    </div>
  )
}
