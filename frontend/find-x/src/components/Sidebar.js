import React from 'react'

const Sidebar = () => {
  return (
    <React.Fragment>
        <aside className="bg-gray-700 text-white w-64 h-screen p-4 fixed left-0 top-16 z-10">
            <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel turpis feugiat, posuere eros in, congue nunc. Integer vel dolor nec tortor tincidunt convallis.</p>
            <p>Praesent viverra, justo a aliquet dapibus, purus ligula facilisis leo, vitae auctor lacus nulla vel dolor. Donec vel dignissim tortor.</p>
            <p>Phasellus scelerisque vehicula quam a auctor. Sed vel lectus vitae lorem ultricies fermentum a nec augue.</p>
        </aside>
    </React.Fragment>
  )
}

export default Sidebar;