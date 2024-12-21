import React from 'react';

const Navbar = ({ adminName, onLogout, onNavigate }) => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <img
            src='https://www.pngkey.com/png/detail/50-500989_employees-new-york-times-app-icon.png'
            className="cursor-pointer hover:text-gray-300 w-14 rounded-full ml-2"
            onClick={() => onNavigate('home')}
          />
        </div>
        <div className='space-x-4 ml-4'>
          <span
            className="text-xl cursor-pointer hover:text-gray-300 font-semibold"
            onClick={() => onNavigate('home')}
          >
            Home
          </span>
          <span
            className="text-xl cursor-pointer hover:text-gray-300 font-semibold"
            onClick={() => onNavigate('employeeList')}
          >
            Employee List
          </span>
          <span
            className="text-xl cursor-pointer hover:text-gray-300 font-semibold"
            onClick={() => onNavigate('createEmployee')}
          >
            Create Employee
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className='mr-2'>{adminName} (Admin)</span>
          <button
            onClick={onLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
