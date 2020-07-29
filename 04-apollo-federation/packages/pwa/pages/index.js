// Vendor libs
import React from 'react';
import Link from 'next/link';

// Material-UI components
import Button from '@material-ui/core/Button';

// Component definition
const HomePage = () => {
  return (
    <div>
      <h1>Hello world</h1>

      <div>
        <Link href='/movies'>
          <a href='/movies'>Películas</a>
        </Link>
      </div>

      <div>
        <Link href='/products/list'>
          <a href='/products/list'>Productos</a>
        </Link>
      </div>

      <div>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
      </div>
    </div>
  );
};

// Exportation
export default HomePage;
