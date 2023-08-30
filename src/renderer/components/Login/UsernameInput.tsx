import { useState } from "react";

export default function UsernameInpunt({username, setUsername}) {
  const [error, setError] = useState('');

  function handleUsername(event_: React.ChangeEvent<HTMLInputElement>) {

    const username : string = event_.target.value;
    setUsername(username);

    if (username.trim() === '') {
      setError('Username is empty');
    } else {
      setError('');
    }
  }
  return (
    <div className="flex flex-col space-y-1 max-w-screen-2xl">
      <label htmlFor="username" className="text-black-600 font-bold">Username</label>
      <input
        onChange={handleUsername}
        value={username}
        type="text"
        id="username"
        name="username"
        className="border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-96 h-10"
        placeholder="Enter your username" />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
