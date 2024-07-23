"use client"
import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams for server components

const HeaderSection = ({ tagline }) => {
  const { coursename } = useParams(); // Retrieve coursename from the URL

  return (
    <div>
      <h1>{coursename}</h1>
      <p>{tagline}</p>
    </div>
  );
};

export default HeaderSection;