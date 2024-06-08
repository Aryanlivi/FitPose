import React from 'react';
import LandingScreen from '../components/LandingScreen';
import LoginButton from '../components/LoginButton';
import Leaderboard from '../components/Leaderboard';
import PoseVideoDetection from '../context/PoseVideoDetection';
import PoseDetection from '../context/PoseDetection';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'calc(8rem + 20px)', marginTop: '75px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '300px', width: '300px', margin: '20px', borderRadius: '10px', borderColor: 'black', borderWidth: '2px', padding: '16px' }} className="w-[30%]">
                <Leaderboard />
            </div>
            <div style={{ height:'300px', width:'300px',margin:'20px', marginRight:'40px',borderRadius: '10px', borderColor: 'black', borderWidth: '2px', padding:'16px' }} className="w-[30%]">
                <Leaderboard />
            </div>
        </div>

        <div>
            <div className="bg-gray-200 p-4" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <PoseVideoDetection /> */}
                <PoseDetection />
            </div>
        </div>
    </div>
  )
}

export default Home