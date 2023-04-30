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
    <div className="lg:col-span-11">
      <div className='lg:py-12 flex items-start lg:gap-x-[10rem]'>
        <Link to={'/'} className='border bg-[#fff286] lg:w-32 rounded-r-lg my-6 md:py-4 md:px-10 px-4 py-2'>
          <h3 className='md:text-4xl text-xl flex justify-center md:block'><FiArrowLeft /></h3>
          <p className='uppercase font-semibold md:mt-1'>back</p>
        </Link>
        <div className='bg-white rounded-lg my-6 lg:p-12 md:p-6 p-3 border-2 border-white-500 w-full flex lg:flex-nowrap flex-wrap mx-2 md:mr-32 md:gap-x-4'>
          <div className='lg:w-1/2 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <img src={iconOne} className='mx-auto md:w-10 w-8' />
                <p className='uppercase font-semibold md:text-sm text-[10px] text-center md:-mt-3'>360 view</p>
              </div>
              <div className='w-1/2'>
                <h3 className='lg:text-3xl md:text-xl text-center font-semibold mb-2'>20.1 CARAT</h3>
                <div className="h-1 md:w-full w-3/4 mx-auto bg-[#bebebe] rounded-xl">
                  <div className="h-1 bg-[#007ebd] w-24" style={{
                    width: '90%'
                  }}></div>
                  <div className='flex lg:text-[12px] text-[8px] mt-1 justify-between'>
                    <p className='uppercase tracking-tighter'>normal</p>
                    <p className='uppercase tracking-tighter'>high quality</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={iconTwo} className='mx-auto md:w-10 w-8' />
                <p className='uppercase font-semibold md:text-sm text-[10px] text-center md:-mt-3'>certificate</p>
              </div>
            </div>
            <img src={MainGem} alt="" className='md:w-60 lg:w-full my-6 mx-auto' />
          </div>
          <div className='text-[#5c5b5b] lg:w-1/2 w-full flex gap-x-10 '>
            <div className='h-full hidden lg:block w-[2px] bg-[#5c5b5b]'></div>
            <div>
              <h3 className='text-[#2c2c2c] lg:text-4xl text-2xl font-semibold lg:mb-2'>HEADLINE ABOUT THE GEM</h3>
              <p className='uppercase text-[12px] lg:leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos architecto dolorum laboriosam eum ullam omnis sapiente alias quis vitae sunt repellat ab dolores accusantium placeat adipisci, est beatae atque vel?</p>
              <div className='w-full h-[2px] lg:my-4 my-2 bg-[#5c5b5b]'></div>
              <p className='mt-2'>IDENTIFICATION</p>
              <h2 className='lg:text-2xl text-md font-semibold ]'>NATURAL SAPHIRE</h2>
              <p className='mt-2'>DIMENSIONS</p>
              <h2 className='lg:text-2xl text-md font-semibold'>15.18 x 12.58 x 10.46[MM]</h2>
              <p className='mt-2'>COLOR</p>
              <h2 className='lg:text-2xl text-md font-semibold'>VIVID TO DEEP BLUE</h2>
              <p className='mt-2'>CUT</p>
              <h2 className='lg:text-2xl text-md font-semibold'>STEP/STEP [5]</h2>
              <div className='w-full h-[2px] lg:my-4 my-2 bg-[#5c5b5b]'></div>
              <div className='bg-[#007ebd] py-4 px-8 rounded-xl flex gap-x-6 items-center'>
                <img src={Logo} className='w-16' />
                <h3 className='text-[#fff286] font-bold lg:text-3xl md:text-2xl text-lg'>MAKE AN OFFER</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
