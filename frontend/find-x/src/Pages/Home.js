import React from 'react';
import LandingScreen from '../components/LandingScreen';
import LoginButton from '../components/LoginButton';
import Leaderboard from '../components/Leaderboard';

const Home = () => {
  return (
    <div className="absolute top-16 right-0 bottom-0 bg-gray-100 flex">
      <div className="w-3/10 bg-white">
        <Leaderboard />
      </div>
      <div className="w-7/10 bg-gray-200 p-4">
        {/* Right Division */}
        <h1 className="text-xl font-bold mb-4">Right Division</h1>
        <p>This is the right division content.</p>
        {/* Example Table */}
        <h1>Lorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum Lorem ipsum v v Lorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum v v</h1>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Header 1</th>
              <th className="border px-4 py-2">Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Data 1</td>
              <td className="border px-4 py-2">Data 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home