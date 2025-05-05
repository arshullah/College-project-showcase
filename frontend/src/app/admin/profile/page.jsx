'use client'

import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ausaf Ahmad',
    role: 'Graphic Designer, Web Designer/Developer',
    about:
      'I am a seasoned web designer with over 1 year of experience in creating visually appealing and user-centric designs. My expertise spans UI design, design systems, and custom illustrations.',
    email: 'kausaf98@gmail.com',
    github: '@Ausaf17',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to the server or database
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900 p-6">
      <div className="max-w-md w-full bg-white dark:bg-neutral-800 shadow-lg rounded-2xl p-6 transition-all">
        {/* Profile Image and Name */}
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 dark:border-neutral-600"
            src="https://avatars.githubusercontent.com/u/104195648?v=4"
            alt="Profile"
          />
          <div>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="text-xl font-semibold text-gray-800 dark:text-white bg-transparent border-b-2 border-gray-300 dark:border-neutral-600 outline-none"
              />
            ) : (
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {profileData.name}
              </h2>
            )}
            {isEditing ? (
              <input
                type="text"
                name="role"
                value={profileData.role}
                onChange={handleChange}
                className="text-sm text-gray-500 dark:text-gray-400 bg-transparent border-b-2 border-gray-300 dark:border-neutral-600 outline-none"
              />
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">{profileData.role}</p>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          {isEditing ? (
            <textarea
              name="about"
              value={profileData.about}
              onChange={handleChange}
              className="w-full text-sm text-gray-700 dark:text-gray-300 bg-transparent border-2 border-gray-300 dark:border-neutral-600 p-2 rounded-md outline-none"
              rows="4"
            />
          ) : (
            <p className="text-sm text-gray-700 dark:text-gray-300">{profileData.about}</p>
          )}
        </div>

        {/* Contact Links */}
        <ul className="mt-6 space-y-4">
          <li className="flex items-center space-x-3">
            <svg
              className="w-4 h-4 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <rect width={20} height={16} x={2} y={4} rx={2} />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="text-sm text-blue-600 dark:text-blue-400 bg-transparent border-b-2 border-gray-300 dark:border-neutral-600 outline-none"
              />
            ) : (
              <a
                href={`mailto:${profileData.email}`}
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                {profileData.email}
              </a>
            )}
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="w-4 h-4 text-gray-600 dark:text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.188 10.162 22.75 0h-2.029l-7.434 8.824L7.349 0H.5l8.979 13.343L.5 24h2.029l7.851-9.318L16.651 24H23.5L14.188 10.162Zm-2.779 3.299L3.26 1.56h3.117L20.722 22.511h-3.117l-6.195-9.05Z" />
            </svg>
            {isEditing ? (
              <input
                type="text"
                name="github"
                value={profileData.github}
                onChange={handleChange}
                className="text-sm text-blue-600 dark:text-blue-400 bg-transparent border-b-2 border-gray-300 dark:border-neutral-600 outline-none"
              />
            ) : (
              <a
                href={`https://github.com/${profileData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                {profileData.github}
              </a>
            )}
          </li>
        </ul>

        {/* Edit/Save Button */}
        <div className="mt-6 text-center">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
