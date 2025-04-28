'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';


const ProjectDetail = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch project details
  const fetchProjectDetails = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project/getbyid/${id}`);
      setProject(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching project details:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProjectDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!project) {
    return <div className="text-center py-10">Project not found.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Project Title */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {/* Project Details */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> {project.description}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Abstract:</strong> {project.abstract}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Department:</strong> {project.department}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Academic Year:</strong> {project.academicYear}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Status:</strong> {project.status}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Technologies Used:</strong> {project.technologiesUsed.join(', ')}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Tags:</strong> {project.tags.join(', ')}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Contributors:</strong> {project.contributors.map((contributor) => contributor.name).join(', ')}
          </p>
          {project.sourceCodeUrl && (
            <p className="text-gray-700 mb-4">
              <strong>Source Code:</strong>{' '}
              <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View Source Code
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;