import React, { useState } from 'react';
import LandingScreen from '../components/LandingScreen';
import LoginButton from '../components/LoginButton';
import Leaderboard from '../components/Leaderboard';
import PoseVideoDetection from '../context/PoseVideoDetection';
import PoseDetectionSquat from '../context/PoseDetectionSquat';
import PoseDetectionPushup from '../context/PoseDetectionPushup';
import ComparisonPose from '../context/ComparisionPose';


const Home = () => {

    const [enableVideo, setEnableVideo] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' , marginLeft:'180px', marginTop:'75px'}}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'fixed', flexDirection: 'column' , marginTop:'-19px' }}>
                <div style={{ height:'300px' ,width:'300px', margin: '20px',borderRadius: '10px', borderColor: 'black', borderWidth: '2px', padding:'16px'  }} className="w-[30%]">
                    {/* <Leaderboard /> */}
                </div>
                <div style={{ height:'300px', width:'300px',margin:'20px', marginRight:'40px',borderRadius: '10px', borderColor: 'black', borderWidth: '2px', padding:'16px' }} className="w-[30%]">
                    {/* <Leaderboard /> */}
                </div>
            </div>
        </div>

        <div>
            <div className="bg-gray-200 p-4" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <PoseVideoDetection /> */}
                {/* <PoseDetection /> */}
                <button onClick={() => setEnableVideo(true)}>
                    Enable Video
                </button>
                {
                    enableVideo ? <PoseDetectionSquat /> : null
                }
            </div>
        </div>
    </div>
  )
}

export default Home