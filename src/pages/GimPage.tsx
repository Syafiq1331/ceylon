import React from 'react';
import Content from "../components/Content__GimPage"
import Sidebar from "../components/Sidebar"

interface GimpPageProps { }

const GimpPage: React.FC<GimpPageProps> = ({ }) => {
  return (
    <div className="bg-[#eeeeee] h-screen grid grid-cols-12">
      <Sidebar />
      <Content />
    </div>
  );
};

export default GimpPage;
