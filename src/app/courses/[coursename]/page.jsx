'use client'
import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams for server components
import HeaderSection from '../../../component/Courses/header-section';

const Page = () => {
  const { coursename } = useParams(); // Retrieve coursename from the URL

  return (
    <div>
      <HeaderSection coursename={coursename} tagline= "Join our DS courses" />
    </div>
  );
};

export default Page;

