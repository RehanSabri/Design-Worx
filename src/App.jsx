import React from 'react';
import Navbar from './Navbar';
import LiquidEther from './LiquidEther'; // Your background component

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      
      {/* 1. The Navbar (Optional, usually goes on top) */}
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 20 }}>
        <Navbar />
      </div>

      {/* 2. The Text Overlay (DESIGN WORX) */}
      <div className="overlay-container">
        <h1 className="huge-text">
          DESIGN WORX
        </h1>
      </div>

      {/* 3. The Background Animation */}
      {/* This sits behind everything else */}
      <LiquidEther />

    </div>
  );
}

export default App;
