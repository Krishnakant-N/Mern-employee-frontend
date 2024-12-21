import React from "react";

const ProfessionalCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Create Employee</h2>
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter username"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter email"
            />
          </div>

          {/* Mobile No. */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile No.
            </label>
            <input
              type="text"
              id="mobile"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter mobile number"
            />
          </div>

          {/* Designation */}
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <select
              id="designation"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option>Select</option>
              <option value="hr">HR</option>
              <option value="manager">Manager</option>
              <option value="sales">Sales</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          {/* Courses */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="checkbox" value="mca" className="form-checkbox text-blue-600" />
                <span className="ml-2">MCA</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" value="bca" className="form-checkbox text-blue-600" />
                <span className="ml-2">BCA</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" value="bsc" className="form-checkbox text-blue-600" />
                <span className="ml-2">BSC</span>
              </label>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
              Image Upload
            </label>
            <input
              type="file"
              id="imageUpload"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalCard;
