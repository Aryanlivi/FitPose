import React from 'react'
import './Pose.css'
import { pushup_temp, cobra_pushup_temp, barbell_squat_temp, crunch_temp, dead_bug_temp, lying_leg_raise_temp } from '../assets';
import { useNavigate } from 'react-router';

const Pose = () => {

  const navigate = useNavigate();

  const handlePushUp = () => {
    // Navigate to another route and pass the isPushUps prop as true or false
    navigate(`/compete`);
  };

  const handleSquat = () => {
    // Navigate to another route and pass the isPushUps prop as true or false
    navigate(`/squat`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' , marginLeft:'195px', marginTop:'75px', marginRight: '0px'}}>
        <div CLASSstyle={{ display: 'flex', flexDirection: 'row' }}>
                <div className="containerPose">
                  <div className="boxPose " onClick={() => handlePushUp()}>
                    <div className="upperPose">
                        <img src={ pushup_temp } width={380} height={300} />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="lowerPose" style={{fontSize:'20px',fontFamily:'Canela Text',fontWeight:'bold'}}>
                      <p>Push Up</p>
                    </div>
                  </div>
        
                  <div className="boxPose" onClick={() => handleSquat()}>
                    <div className="upperPose">
                        <img src={ barbell_squat_temp }  />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="lowerPose" style={{fontSize:'20px',fontFamily:'Canela Text',fontWeight:'bold'}}>
                      <p>Squat</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ cobra_pushup_temp }  />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="lowerPose" style={{fontSize:'20px',fontFamily:'Canela Text',fontWeight:'bold'}}>
                      <p>Cobra Push Up</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ crunch_temp }  />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="lowerPose" style={{fontSize:'20px',fontFamily:'Canela Text',fontWeight:'bold'}}>
                      <p>Crunch</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ dead_bug_temp }  />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="lowerPose" style={{fontSize:'20px',fontFamily:'Canela Text',fontWeight:'bold'}}>
                      <p>Dead Bug</p>
                    </div>
                  </div>

                  <div className="boxPose">
                    <div className="upperPose">
                        <img src={ lying_leg_raise_temp }  />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="lowerPose" style={{fontSize:'20px',fontFamily:'Canela Text',fontWeight:'bold'}}>
                      <p>Lying Leg Raise</p>
                    </div>
                  </div>
              </div> 
        </div>
      </div>
  )
}

export default Pose