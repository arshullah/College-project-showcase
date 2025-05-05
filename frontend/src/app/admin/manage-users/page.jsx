'use client';
import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulated user fetch - replace with real API
    const dummyUsers = [
      { id: 'u1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Student', status: 'Active' },
      { id: 'u2', name: 'Bob Smith', email: 'bob@example.com', role: 'Faculty', status: 'Blocked' },
      { id: 'u3', name: 'Charlie Kumar', email: 'charlie@example.com', role: 'Student', status: 'Active' },
    ];
    setUsers(dummyUsers);
  }, []);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === 'Active' ? 'Blocked' : 'Active' }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Manage Users</h1>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td
                      className={`p-3 font-semibold ${
                        user.status === 'Active' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="p-3 text-center space-x-2">
                      <button
                        onClick={() => toggleStatus(user.id)}
                        className={`px-3 py-1 rounded text-white ${
                          user.status === 'Active' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                        }`}
                      >
                        {user.status === 'Active' ? 'Block' : 'Activate'}
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
