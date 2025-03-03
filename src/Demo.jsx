



import React, { useState, useEffect } from 'react';

const Demo = () => {
  const [successRate, setSuccessRate] = useState(51); // Initial value for the dynamic success rate
  const [animatedRate, setAnimatedRate] = useState(0); // Initial value for the animated success rate

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
    let currentRate = 0;
    const targetRate = 95;
    const increment = 1; // Change this value to speed up or slow down the animation

    const animationInterval = setInterval(() => {
      if (currentRate < targetRate) {
        currentRate += increment;
        setAnimatedRate(currentRate);
      } else {
        clearInterval(animationInterval);
      }
    }, 50); // Adjust the interval for speed of animation

    // Cleanup interval on component unmount
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <>
      <div className="px-20 py-12">
        <div className="grid grid-cols-4 text-center">
          <div>
            <h2>{animatedRate}%</h2> {/* Animated success rate */}
            <p>Success rate</p>
          </div>

          <div>
            <h2>9%</h2>
            <p>Success rate</p>
          </div>

          <div>
            <h2>93%</h2>
            <p>Success rate</p>
          </div>

          <div>
            <h2>{successRate}%</h2> {/* Dynamic success rate */}
            <p>Success rate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;



