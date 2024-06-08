import React, { useState } from 'react';
import LandingScreen from '../components/LandingScreen';
import LoginButton from '../components/LoginButton';
import Leaderboard from '../components/Leaderboard';
import PoseVideoDetection from '../context/PoseVideoDetection';
<<<<<<< HEAD
import PoseDetectionSquat from '../context/PoseDetectionSquat';
import PoseDetectionPushup from '../context/PoseDetectionPushup';
import ComparisonPose from '../context/ComparisionPose';


const Home = () => {

    const [enableVideo, setEnableVideo] = useState(false);
=======
import PoseDetection from '../context/PoseDetection';
import { stock_pushup, stock_pushup_gif, poor_push_up, barbell_squat_temp } from '../assets';

const Home = () => {

    const imageStyle1 = {
        // borderRadius: '50% 40% 60% 50% / 60% 30% 40% 70%',
        borderRadius:'30px',
        marginTop:'50px',
        marginRight:'20px'
    };
    const imageStyle2 = {
        borderRadius:'30px',
        marginTop:'50px',
        marginLeft:'5px',
        marginRight:'15px'
    };
>>>>>>> pranav

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

<<<<<<< HEAD
        <div>
            <div className="bg-gray-200 p-4" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <PoseVideoDetection /> */}
                {/* <PoseDetection /> */}
                <button onClick={() => setEnableVideo(true)}>
                    Enable Video
                </button>
                {
                    enableVideo ? <PoseDetection /> : null
                }
=======
        <div className='w-[60vw] rounded-md h-[150vh]'>
            <div className="p-5 h-[45%]  bg-white  shadow-lg rounded-lg" style={{ display: 'flex', flexDirection: 'column',borderColor:'black',borderWidth:'1px'}}>
                <div class='flex'><div>
                <h1 style={{fontSize:'40px',fontFamily:'Canela Text Bold',marginLeft:'20px'}} className='w-[100%]'>TRACK YOUR POSE</h1>
                    <div>
                        <br></br>
                        <p style={{fontSize:'20px', fontFamily:'Canela Text', marginRight:'100px', marginLeft:'30px', justifyContent:'left'}} className='flex-initial text-black font-light text-justify'>
                        Poor posture often results in injuries. Track and improve your posture with our advanced pose detection algorithm to enhance your form and prevent injuries.
                        </p>
                        <h1 style={{fontSize:'30px', fontFamily:'Canela Text', marginRight:'100px', marginLeft:'30px'}} className='flex-initial text-black font-light text-justify underline'>Lets get started!</h1>
                    </div>
                    </div>
                    <img
                        src={ poor_push_up }
                        style={imageStyle1}
                        width="300px"
                        height="300px"
                        alt='stock_ppxushup_gif'
                       
                        className='hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-50 duration-300'
                    />
            </div>
            </div>
            <br></br>
            <br></br>
            <div className="bg-gray-200 p-4 h-[50%] rounded-lg" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
            <div class='flex'>
            <img
                        src={ barbell_squat_temp }
                        style={imageStyle2}
                        width="400px"
                        height="400px"
                        alt='stock_pushup_gif'
                        className='hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-50 duration-300'

                        />
                        <div>
                <h1 style={{fontSize:'40px',fontFamily:'Canela Text Bold'}} className='w-[100%] text-white text-center border-solid'>COMPETE NOW</h1>
                <br></br>
                <br></br>
                        
                        <div>
                            <p style={{fontSize:'20px', fontFamily:'Canela Text', marginRight:'100px', marginLeft:'30px', justifyContent:'left'}} className='flex-initial text-white font-light text-justify'>
                                In a competitive environment, utilizing pose detection techniques can significantly enhance both performance and safety. By accurately analyzing body movements, pose detection can provide athletes and fitness enthusiasts with real-time feedback on their form and technique.
                            </p>
                            <br></br>
                            <h1 style={{fontSize:'30px', fontFamily:'Canela Text', marginRight:'100px', marginLeft:'30px', justifyContent:'left'}} className='flex-initial text-white font-light text-justify underline'>Compete!</h1>
                        </div>
                    </div>
                    </div>
>>>>>>> pranav
            </div>
        </div>
    </div>
  )
}

export default Home