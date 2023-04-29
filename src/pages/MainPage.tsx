import React from 'react';
import Sidebar from '../components/Sidebar__MainPages';
import Content from '../components/Content__MainPage';

interface MainPageProps { }

const MainPage: React.FC<MainPageProps> = ({ }) => {
  return (
    <section className="bg-[#eeeeee] h-screen grid grid-cols-12 relative">
      <Sidebar />
      <Content />
    </section>
  );
};

export default MainPage;
