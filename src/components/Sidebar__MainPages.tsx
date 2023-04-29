import React from 'react';
import gemLogo from '../assets/gem-logo.png'

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = ({ }) => {
  return (
    <div className="col-span bg-[#0081c2] p-4 text-center">
      <img src={gemLogo} alt="" className='mx-auto' />
    </div>
  );
};

export default Sidebar;
