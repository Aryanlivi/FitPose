import React from 'react'
import './Pose.css'
import { pushup_temp, cobra_pushup_temp, barbell_squat_temp, crunch_temp, dead_bug_temp, lying_leg_raise_temp } from '../assets'

const Pose = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' , marginLeft:'95px', marginTop:'75px', marginRight: '100px'}}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="containerPose">
                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ pushup_temp } width={380} height={300} />
                    </div>
                    <div className="lowerPose">
                      <p>something will be written here in a ddddlarge size</p>
                    </div>
                  </div>
        
                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ barbell_squat_temp }  />
                    </div>
                    <div className="lowerPose">
                      <p>something will be written here in a ddddlarge size</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ cobra_pushup_temp }  />
                    </div>
                    <div className="lowerPose">
                      <p>something will be written here in a ddddlarge size</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ crunch_temp }  />
                    </div>
                    <div className="lowerPose">
                      <p>something will be written here in a ddddlarge size</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ dead_bug_temp }  />
                    </div>
                    <div className="lowerPose">
                      <p>something will be written here in a ddddlarge size</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ lying_leg_raise_temp }  />
                    </div>
                    <div className="lowerPose">
                      <p>something will be written here in a ddddlarge size</p>
                    </div>
                  </div>
              </div> 
        </div>
      </div>
  )
}

export default Pose