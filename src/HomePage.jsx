import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [successRate, setSuccessRate] = useState(51); // Initial value for the dynamic success rate
  const [animatedSuccessRate, setAnimatedSuccessRate] = useState(0); // Animated success rate
  const [animatedCarrierChances, setAnimatedCarrierChances] = useState(0); // Animated carrier chances
  const [animatedRiskChances, setAnimatedRiskChances] = useState(0); // Animated risk chances

  useEffect(() => {
    // Simulate a dynamic update to the success rate
    const interval = setInterval(() => {
      setSuccessRate(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
    }, 2000); // Update every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate the success rate to 95%
    let currentSuccessRate = 0;
    let currentCarrierChances = 0;
    let currentRiskChances = 0;
    const targetSuccessRate = 95;
    const targetCarrierChances = 80; // Different target for carrier chances
    const targetRiskChances = 70; // Different target for risk chances
    const increment = 5; // Increased increment for faster animation

    const animationInterval = setInterval(() => {
      if (currentSuccessRate < targetSuccessRate) {
        currentSuccessRate += increment;
        setAnimatedSuccessRate(currentSuccessRate);
      }
      if (currentCarrierChances < targetCarrierChances) {
        currentCarrierChances += increment;
        setAnimatedCarrierChances(currentCarrierChances);
      }
      if (currentRiskChances < targetRiskChances) {
        currentRiskChances += increment;
        setAnimatedRiskChances(currentRiskChances);
      }
      if (currentSuccessRate >= targetSuccessRate && currentCarrierChances >= targetCarrierChances && currentRiskChances >= targetRiskChances) {
        clearInterval(animationInterval);
      }
    }, 30); // Reduced interval for faster animation

    // Cleanup interval on component unmount
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-y-scroll scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">JobPortal</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Jobs</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-6xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-xl mb-8">Join thousands of companies and candidates to find the perfect match.</p>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search jobs..."
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location..."
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Accuracy Card Section moved above Featured Jobs */}
      <div className="px-20 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Accuracy Metrics</h2>
        <div className="grid grid-cols-4 text-center gap-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-4xl font-bold">{animatedSuccessRate}%</h2> {/* Animated success rate */}
            <p className="text-gray-400">Success Rate</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-4xl font-bold">{animatedCarrierChances}%</h2>
            <p className="text-gray-400">Carrier Chances</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-4xl font-bold">{animatedRiskChances}%</h2>
            <p className="text-gray-400">Risk Chances</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-4xl font-bold">{successRate}%</h2> {/* Dynamic success rate */}
            <p className="text-gray-400">Dynamic Success Rate</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <p className="text-gray-400">Remote</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Backend Developer</h3>
            <p className="text-gray-400">New York, NY</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">UI/UX Designer</h3>
            <p className="text-gray-400">San Francisco, CA</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <footer className="p-6 bg-gray-900 text-center">
        <p>&copy; 2025 JobPortal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


