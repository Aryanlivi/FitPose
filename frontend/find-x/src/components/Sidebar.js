import React from 'react'

const Sidebar = () => {
  return (
    <div 
        style={{ marginTop: '10px', height: '100vh', borderRadius: '50px',marginLeft:'5px', textAlign: 'center' }} 
        className="bg-gray-700 text-white w-32 p-4 fixed left-0 top-16 z-10"
    >
        <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
        <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
    </div>
  )
}

export default Sidebar;