import React from 'react'
import './Compete.css'
import PoseDetectionPushup from '../context/PoseDetectionPushup'

const Compete = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '100px', marginTop: '75px', marginRight: '100px' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="container">
          <div className="box" style={{ marginTop: '300px' }}>
            <PoseDetectionPushup />
          </div>
          <div className="box red-box">
            <div className="red-box-content">status:______</div>
            <div className="red-box-content">count:______</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compete