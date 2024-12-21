import React, { useState } from 'react'

function CreateEmployee() {

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:3000/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    console.log(data)
    alert("submitted successfully")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form
      className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Create Employee</h2>
  
      {/* Username */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
        />
      </div>
  
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
        />
      </div>
  
      {/* Mobile */}
      <div className="mb-4">
        <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
          Mobile No.
        </label>
        <input
          type="text"
          name="mobile"
          id="mobile"
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
        />
      </div>
  
      {/* Designation */}
      <div className="mb-4">
        <label htmlFor="designation" className="block text-gray-700 font-medium mb-2">
          Designation
        </label>
        <select
          name="designation"
          id="designation"
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
  
      {/* Gender */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Gender</label>
        <div className="flex gap-4 items-center">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="mr-2"
              onChange={handleChange}
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="mr-2"
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </div>
  
      {/* Course */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Course</label>
        <div className="flex gap-4 items-center">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="course"
              value="MCA"
              className="mr-2"
              onChange={handleChange}
            />
            MCA
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="course"
              value="BCA"
              className="mr-2"
              onChange={handleChange}
            />
            BCA
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="course"
              value="BSC"
              className="mr-2"
              onChange={handleChange}
            />
            BSC
          </label>
        </div>
      </div>
  
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:ring-2 focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
  </div>  
  )
}

export default CreateEmployee

