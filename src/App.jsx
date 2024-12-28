import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [employees, setEmployees] = useState([]); 

  
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedAdminName = localStorage.getItem('adminName');
    if (loggedIn && storedAdminName) {
      setIsLoggedIn(true);
      setAdminName(storedAdminName);
    }
  }, []);

  // Save login state and admin name to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('adminName', adminName);
  }, [isLoggedIn, adminName]);

  const handleLogin = (name) => {
    setAdminName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminName('');
    setCurrentPage('home');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminName');
  };

  const addEmployee = (employee) => {
    const uniqueId = employees.length + 1;
    const createdDate = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    setEmployees([
      ...employees,
      { ...employee, id: uniqueId, createdDate },
    ]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'employeeList':
        return <EmployeeList employees={employees} />;
      case 'createEmployee':
        return <CreateEmployee addEmployee={addEmployee} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <>
          <Navbar
            adminName={adminName}
            onLogout={handleLogout}
            onNavigate={setCurrentPage}
          />
          {renderPage()}
        </>
      )}
    </div>
  );
};

export default App;
