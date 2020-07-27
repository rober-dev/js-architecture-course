// Vendor libs
import React from 'react';
import Link from 'next/link';

// Component definition
const HomePage = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href='/movies'>
        <a href='/movies'>Películas</a>
      </Link>
    </div>
  );
};

// Exportation
export default HomePage;
