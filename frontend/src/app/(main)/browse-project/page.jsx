'use client';
import ProductCard from '@/components/ProductCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BrowseProject = () => {
    const [projectList, setProjectList] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Fetch projects from the backend
    const fetchProjects = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project/getall`);
            setProjectList(res.data); // Update state with fetched data
            setFilteredProjects(res.data); // Initialize filtered projects
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    // Use useEffect to fetch data on component mount
    useEffect(() => {
        fetchProjects();
    }, []);

    // Filter projects based on search and filters
    useEffect(() => {
        let filtered = projectList;

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter((project) =>
                project.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply department filter
        if (departmentFilter) {
            filtered = filtered.filter((project) => project.department === departmentFilter);
        }

        // Apply status filter
        if (statusFilter) {
            filtered = filtered.filter((project) => project.status === statusFilter);
        }

        setFilteredProjects(filtered);
    }, [searchQuery, departmentFilter, statusFilter, projectList]);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}

            <header className="bg-black py-8 shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Explore Top Projects
                        </h1>
                        <p className="mt-3 text-lg text-gray-600 text-white">
                            Browse and manage projects across all engineering departments.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <a href="#projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300">
                            Get Started
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Search and Filter Options */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 flex-1"
                    />

                    {/* Department Filter */}
                    <select
                        value={departmentFilter}
                        onChange={(e) => setDepartmentFilter(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2"
                    >
                        <option value="">All Departments</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Information technology">Information technology</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Aerospace engineering">Aerospace engineering</option>
                        <option value="Biotechnology">Biotechnology</option>
                        <option value="Mechatronics Engineering">Mechatronics Engineering</option>

                        {/* Add more departments as needed */}
                    </select>

                    {/* Status Filter */}
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2"
                    >
                        <option value="">All Statuses</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                        <option value="Archived">Archived</option>
                        <option value="Pending Approval">Pending Approval</option>
                    </select>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProductCard
                            key={project._id}
                            _id={project._id}
                            title={project.title}
                            description={project.description}
                            abstract={project.abstract}
                            contributors={project.contributors}
                            technologiesUsed={project.technologiesUsed}
                            tags={project.tags}
                            sourceCodeUrl={project.sourceCodeUrl}
                            thumbnailUrl={project.thumbnailUrl}
                            department={project.department}
                            academicYear={project.academicYear}
                            status={project.status}
                        />


                    ))}
                </div>
            </main>
        </div>
    );
};

export default BrowseProject;