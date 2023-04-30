import React from 'react';
import Sidebar from '../components/Sidebar__MainPages';
import Content from '../components/Content__MainPage';

interface MainPageProps { }

const MainPage: React.FC<MainPageProps> = ({ }) => {
  return (
    <section className="bg-[#eeeeee] h-screen w-full flex md:gap-x-6 lg:grid lg:grid-cols-12 relative">
      <Sidebar />
      <Content />
    </section>
  );
};

export default MainPage;
