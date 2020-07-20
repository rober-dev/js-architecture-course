// Vendor libs
import Link from 'next/link';

// Custom libs
import Header from '../components/header';
import Footer from '../components/footer';

// Home page definition
const IndexPage = () => {
  const alertHandler = () => {
    alert('ok makey');
  };

  return (
    <div>
      <Header />
      <h1>Hello world</h1>
      <button onClick={() => alertHandler()}>Alerta</button>
      <div>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
