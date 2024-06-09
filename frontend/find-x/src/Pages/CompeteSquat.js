import React from 'react'
import './Compete.css'
import PoseDetectionSquat from '../context/PoseDetectionSquat'

const CompeteSquat = () => {
  return (
    <div className="box" style={{ marginTop: '20px', marginLeft:'450px'}}>
      <PoseDetectionSquat /> 
    </div>
  );
}

export default CompeteSquat;