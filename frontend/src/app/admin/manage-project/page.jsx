'use client';
import React, { useEffect, useState } from 'react';

const ManageProjects = () => {
  const [projectList, setProjectList] = useState([]);

  // Simulated fetch function
  useEffect(() => {
    const dummyData = [
      {
        _id: '1',
        title: 'Smart Irrigation',
        Description: 'IoT based automation system',
        contributor: 'John Doe',
        Technology: 'Node.js, React',
        CodeURL: 'https://github.com/example/project',
        Department: 'CSE',
        AcedmicYear: '2024-25',
        Status: 'Pending',
      },
      {
        _id: '2',
        title: 'AI Chatbot',
        Description: 'Smart college assistant chatbot',
        contributor: 'Jane Smith',
        Technology: 'Python, Flask',
        CodeURL: 'https://github.com/example/bot',
        Department: 'IT',
        AcedmicYear: '2024-25',
        Status: 'Approved',
      },
    ];
    setProjectList(dummyData);
  }, []);

  // Handle delete project
  const handleDelete = (id) => {
    const filtered = projectList.filter((project) => project._id !== id);
    setProjectList(filtered);
  };

  // Handle approve/toggle status
  const handleToggleStatus = (id) => {
    const updated = projectList.map((project) => {
      if (project._id === id) {
        return {
          ...project,
          Status: project.Status === 'Approved' ? 'Pending' : 'Approved',
        };
      }
      return project;
    });
    setProjectList(updated);
  };

  return (
    <div className='w-full'>
      <div className='container mx-auto py-10'>
        <h1 className='text-center text-3xl font-bold py-10'>Manage Projects</h1>
        <div className="overflow-x-auto">
          <table className='min-w-full border'>
            <thead>
              <tr className='bg-gray-800 text-white text-sm'>
                <th className='p-3'>Title</th>
                <th className='p-3'>Description</th>
                <th className='p-3'>Contributor</th>
                <th className='p-3'>Technology</th>
                <th className='p-3'>Code</th>
                <th className='p-3'>Department</th>
                <th className='p-3'>Year</th>
                <th className='p-3'>Status</th>
                <th className='p-3'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projectList.map((project) => (
                <tr key={project._id} className='border hover:bg-gray-100 text-sm'>
                  <td className='p-3 font-semibold'>{project.title}</td>
                  <td className='p-3'>{project.Description}</td>
                  <td className='p-3'>{project.contributor}</td>
                  <td className='p-3'>{project.Technology}</td>
                  <td className='p-3'>
                    <a href={project.CodeURL} className='text-blue-600 underline' target='_blank' rel='noreferrer'>GitHub</a>
                  </td>
                  <td className='p-3'>{project.Department}</td>
                  <td className='p-3'>{project.AcedmicYear}</td>
                  <td className={`p-3 font-bold ${project.Status === 'Approved' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {project.Status}
                  </td>
                  <td className='p-3 space-x-2'>
                    <button
                      onClick={() => handleToggleStatus(project._id)}
                      className='px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600'
                    >
                      {project.Status === 'Approved' ? 'Revoke' : 'Approve'}
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className='px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {projectList.length === 0 && (
                <tr>
                  <td colSpan="9" className="text-center p-5 text-gray-500">
                    No projects found.
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

export default ManageProjects;
