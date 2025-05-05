'use client';
import React, { useState } from 'react';

// Dummy users data
const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Inactive' },
  { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'User', status: 'Active' },
];

const UpdateUser = () => {
  const [users, setUsers] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    email: '',
    role: '',
    status: '',
  });

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setUpdatedUserData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });
  };

  const handleChange = (e) => {
    setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, ...updatedUserData } : user
    );
    setUsers(updatedUsers);
    alert('User details updated successfully!');
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-700 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 transition-all hover:scale-105 transform hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Update User</h2>

        {/* User Selection Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left table-auto bg-gray-50 rounded-lg shadow-md">
            <thead className="bg-gradient-to-r from-teal-400 to-teal-600 text-white">
              <tr>
                <th className="p-4 text-lg">Name</th>
                <th className="p-4 text-lg">Email</th>
                <th className="p-4 text-lg">Role</th>
                <th className="p-4 text-lg">Status</th>
                <th className="p-4 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-100 transition duration-300"
                >
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4">{user.status}</td>
                  <td
                    className="p-4 text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={() => handleUserSelect(user)}
                  >
                    Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Form */}
        {selectedUser && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Edit User: {selectedUser.name}</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={updatedUserData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={updatedUserData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={updatedUserData.role}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={updatedUserData.status}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={handleSaveChanges}
                  className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateUser;
