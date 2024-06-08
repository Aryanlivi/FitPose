import React from 'react';
import LandingScreen from '../components/LandingScreen';
import LoginButton from '../components/LoginButton';
import Leaderboard from '../components/Leaderboard';
import PoseVideoDetection from '../context/PoseVideoDetection';
import PoseDetection from '../context/PoseDetection';

const Home = () => {
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
    
        <div className="w-7/10 bg-gray-200 p-4">
            <PoseVideoDetection />
            {/* <PoseDetection /> */}
        </div>
    </div>
  )
}

export default Home