import React, {useState, useEffect} from "react";

const EmployeeList = () => {

  const [users, setUsers] = useState([])

    const getUsers = async () => {

    const response = await fetch(import.meta.env.VITE_SERVER_URL ||"http://localhost:3000/demo", {
      method: "GET",
    })
    const data = await response.json()
    setUsers(data);
  }
  
    useEffect(() => {
      getUsers();
    }, []);

  return(
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Employee List</h1>
      <table className="w-full border-4  border-dashed border-gray-400">
        <thead>
          <tr className="border-4 border-gray-400">
            <th className="px-4" align="left">Unique ID</th>
            <th className="px-4" align="left">Name</th>
            <th className="px-4" align="left">Email</th>
            <th className="px-4" align="left">Mobile No.</th>
            <th className="px-4" align="left">Designation</th>
            <th className="px-4" align="left">Gender</th>
            <th className="px-4" align="left">Course</th>
            <th className="px-4" align="left">Create date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-4 py-2">{user._id}</td>
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2"><a href={user.email}>{user.email}</a></td>
              <td className="px-4 py-2">{user.mobile}</td>
              <td className="px-4 py-2">{user.designation}</td>
              <td className="px-4 py-2">{user.gender}</td>
              <td className="px-4 py-2">{user.course}</td>
              <td className="px-4 py-2">{user.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)
};

export default EmployeeList;
