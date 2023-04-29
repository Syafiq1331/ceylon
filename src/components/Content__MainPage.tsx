import React from 'react';
import gemLogo from '../assets/main-gem.png'
import { Link } from 'react-router-dom';

interface ContentProps { }

const Content: React.FC<ContentProps> = ({ }) => {
  return (
    <div className="col-span-11 px-32">
      <div className='mt-20'>
        <p className='text-4xl text-center -mb-12 font-semibold tracking-[1rem] text-[#ffef8d]'>ceylon gem collective </p>
        <img src={gemLogo} className='mx-auto' />
      </div>
      <div className='rounded-xl bg-white w-4/5 absolute bottom-0'>
        <div>
          <div className="absolute top-12 right-12 p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='flex gap-x-24 py-[15rem] justify-center'>
            <div>
              <h3 className='uppercase font-semibold text-xl text-center'>20.1 carat natural saphire</h3>
              <Link to={'/product'}>
                <img src={gemLogo} className='w-60 mx-auto' />
              </Link>
            </div>
            <div>
              <h3 className='uppercase font-semibold text-xl text-center'>20.1 carat natural saphire</h3>
              <Link to={'/product'}>
                <img src={gemLogo} className='w-60 mx-auto' />
              </Link>
            </div>
            <div>
              <h3 className='uppercase font-semibold text-xl text-center'>20.1 carat natural saphire</h3>
              <Link to={'/product'}>
                <img src={gemLogo} className='w-60 mx-auto' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
