'use client'
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white border border-gray-300 rounded-xl shadow-lg p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">HEY ADMIN</h1>
          <p className="mt-4 text-lg text-gray-600">Add New Project</p>
        </div>

        <form className="mt-6">
          <div className="space-y-5">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter project title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter project description"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Abstract */}
            <div>
              <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
                Abstract
              </label>
              <textarea
                id="abstract"
                name="abstract"
                placeholder="Enter project abstract"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="2"
                required
              ></textarea>
            </div>

            {/* Contributor */}
            <div>
              <label htmlFor="contributor" className="block text-sm font-medium text-gray-700">
                Contributor(s)
              </label>
              <input
                type="text"
                id="contributor"
                name="contributor"
                placeholder="Enter contributor names"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Technology */}
            <div>
              <label htmlFor="technology" className="block text-sm font-medium text-gray-700">
                Technology Used
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                placeholder="Enter technologies used"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Enter tags (comma-separated)"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Academic Year */}
            <div>
              <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700">
                Academic Year
              </label>
              <input
                type="text"
                id="academicYear"
                name="academicYear"
                placeholder="Enter academic year (e.g., 2024-2025)"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select status</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;