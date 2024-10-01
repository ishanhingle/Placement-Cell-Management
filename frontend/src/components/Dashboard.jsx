import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './shared/Navbar';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data using axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/user/dashboard');
        setStats(response.data);  // Store the fetched data
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!stats) {
    return <div className="text-center text-gray-500">Loading...</div>;  // Loading state
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Placement <span className='text-[#F83002]'>Analytics</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 auto-rows-auto">
        <StatCard title="Total Students" value={stats.studentCount} />
        <StatCard title="Total Placed Students" value={stats.placedCount} />
        <StatCard title="Average Package" value={`${stats.averagePackage} LPA`} />
        <StatCard title="Highest Package" value={`${stats.highestPackage} LPA`} />
        <StatCard title="Total Companies" value={stats.companyCount} />
        <StatCard title="Placement Percentage" value={`${stats.placementPercentage}%`} />
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center mx-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
};

export default Dashboard;
