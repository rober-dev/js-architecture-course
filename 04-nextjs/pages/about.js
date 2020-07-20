// Vendor libs
import Link from 'next/link';

// About page definition
const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <Link href='/'>
          <a>Index</a>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
