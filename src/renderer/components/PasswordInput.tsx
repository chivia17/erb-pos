import { useState } from "react";

export default function PasswordInput({password, setPassword}) {
  const [error, setError] = useState('');

  function handlePassword(event_: React.ChangeEvent<HTMLInputElement>) {
    const password : string = event_.target.value;
    setPassword(password);

    if (password.trim() === '') {
      setError('Password is empty');
    } else {
      setError('');
    }
  }

  return (
    <div className="flex flex-col space-y-1 max-w-screen-2xl">
      <label htmlFor="password" className="text-black-600 font-bold">Password</label>
      <input
        onChange={handlePassword}
        value={password}
        type="password"
        id="password"
        name="password"
        className="border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-96 h-10"
        placeholder="Enter your password" />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
