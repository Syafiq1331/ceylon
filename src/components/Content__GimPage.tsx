import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import Logo from '../assets/gem-logo.png';
import MainGem from '../assets/main-gem.png';
import iconOne from '../assets/icon_one.png';
import iconTwo from '../assets/icon_two.png';
import { Link } from 'react-router-dom';

interface ContentProps { }

const Content: React.FC<ContentProps> = ({ }) => {
  return (
    <div className="col-span-11">
      <div className='py-32 flex items-start gap-x-[10rem]'>
        <Link to={'/'} className='border bg-[#fff286] w-32 rounded-r-lg py-4 px-10'>
          <h3 className='text-4xl'><FiArrowLeft /></h3>
          <p className='uppercase font-semibold mt-1'>back</p>
        </Link>
        <div className='bg-white rounded-lg p-12 border-2 border-white-500 w-full flex mr-32 gap-x-4'>
          <div className='w-1/2'>
            <div className='flex justify-between items-center'>
              <div>
                <img src={iconOne} className='mx-auto' />
                <p className='uppercase font-semibold text-center -mt-3'>360 view</p>
              </div>
              <div className='w-1/2'>
                <h3 className='text-3xl text-center font-semibold mb-2'>20.1 CARAT</h3>
                <div className="h-1 w-full bg-[#bebebe] rounded-xl">
                  <div className="h-1 bg-[#007ebd] w-24" style={{
                    width: '90%'
                  }}></div>
                  <div className='flex text-[12px] mt-1 justify-between'>
                    <p className='uppercase tracking-tighter'>normal</p>
                    <p className='uppercase tracking-tighter'>high quality</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={iconTwo} className='mx-auto' />
                <p className='uppercase font-semibold text-center -mt-3'>certificate</p>
              </div>
            </div>
            <img src={MainGem} alt="" />
          </div>
          <div className='text-[#5c5b5b] w-1/2 flex gap-x-10 '>
            <div className='h-full w-[2px] bg-[#5c5b5b]'></div>
            <div>
              <h3 className='text-[#2c2c2c] text-4xl font-semibold mb-2'>HEADLINE ABOUT THE GEM</h3>
              <p className='uppercase leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos architecto dolorum laboriosam eum ullam omnis sapiente alias quis vitae sunt repellat ab dolores accusantium placeat adipisci, est beatae atque vel?</p>
              <div className='w-full h-[2px] my-4 bg-[#5c5b5b]'></div>
              <p className='mt-2'>IDENTIFICATION</p>
              <h2 className='text-2xl font-semibold ]'>NATURAL SAPHIRE</h2>
              <p className='mt-2'>DIMENSIONS</p>
              <h2 className='text-2xl font-semibold'>15.18 x 12.58 x 10.46[MM]</h2>
              <p className='mt-2'>COLOR</p>
              <h2 className='text-2xl font-semibold'>VIVID TO DEEP BLUE</h2>
              <p className='mt-2'>CUT</p>
              <h2 className='text-2xl font-semibold'>STEP/STEP [5]</h2>
              <div className='w-full h-[2px] my-4 bg-[#5c5b5b]'></div>
              <div className='bg-[#007ebd] py-4 px-8 rounded-xl flex gap-x-6 items-center'>
                <img src={Logo} className='w-16' />
                <h3 className='text-[#fff286] font-bold text-3xl'>MAKE AN OFFER</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
