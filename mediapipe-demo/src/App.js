import React from 'react';
import './App.css';
import PoseDetection from './PoseDetection';
import PoseVideoDetection from './PoseVideoDetection'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PoseVideoDetection/>
        {/* <PoseDetection /> */}
      </header>
    </div>
  );
}

export default App;
