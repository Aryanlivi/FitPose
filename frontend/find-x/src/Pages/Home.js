import React from 'react';
import LandingScreen from '../components/LandingScreen';
import LoginButton from '../components/LoginButton';

const Home = () => {
  return (
    <>
        <div className='flex border-solid border-2 border-sky-500 '>
            <div className='flex justify-center items-center'>
                <LandingScreen />
            </div>
            <div className='flex justify-right items-right'>
                <LoginButton />
            </div>
        </div>
    </>
  )
}

export default Home