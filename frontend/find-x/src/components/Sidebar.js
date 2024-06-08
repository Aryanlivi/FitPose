import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-gray-700 text-white w-32 h-screen p-4 fixed left-0 top-16 z-10">
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curabitur vel turpis feugiat, posuere eros in, congue nunc.</p>
            <p>Integer vel dolor nec tortor tincidunt convallis.</p>
        </div>
    </div>
  )
}

export default Sidebar;