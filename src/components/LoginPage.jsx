import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter username and password!');
    }
  };

  return (
    <div>
      <div className='flex bg-lime-100'>
        <img src="https://www.pngkey.com/png/detail/50-500989_employees-new-york-times-app-icon.png" alt="logo" className='w-20 rounded-full p-2 ml-2' />
        <div className="text-4xl text-[#4A4A4A] font-semibold flex justify-center py-4 absolute left-24">Welcome to the App</div>
      </div>
    
    <div className="flex items-center justify-center h-screen bg-gray-200" style={{
          backgroundImage: `url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg')`,
          backgroundSize: "cover"
        }}>
      <form
        className="bg-white p-8 shadow-md rounded-md w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
