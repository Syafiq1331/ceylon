import { FiSearch } from "react-icons/fi";
import React from 'react';
import gemBlue from '../assets/gemIcon/gem_blue.png'
import gemGreen from '../assets/gemIcon/gem_green.png'
import gemPurple from '../assets/gemIcon/gem_purple.png'
import gemRed from '../assets/gemIcon/gem_red.png'
import gemYellow from '../assets/gemIcon/gem_yellow.png'
import gemLogo from '../assets/gem-logo.png'

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = ({ }) => {
  const gems = [gemBlue, gemGreen, gemPurple, gemRed, gemYellow]

  return (
    <div className="lg:col-span bg-[#0081c2] p-4 text-center">
      <img src={gemLogo} alt="" className='mx-auto' />
      <div className="border-t my-8"></div>
      {
        gems.map((item, key) => (
          <img src={item} key={key} alt="" className='mx-auto my-4' />
        ))
      }

      <div className="border-b w-full flex justify-center my-8">
        <h1 className="text-4xl text-white py-4"><FiSearch /></h1>
      </div>
    </div>
  );
};

export default Sidebar;
