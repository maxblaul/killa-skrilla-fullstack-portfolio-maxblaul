import React, { useState } from 'react';
import Navigation from '../Nav';
import About from '../About';
import Contact from '../Contact';  // Fix the typo in the import statement
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a
            className='navbar-item'
            rel='noopener noreferrer'  // Fix the rel attribute
            target='_blank'
            href='https://github.com/maxblaul?tab=repositories'
          >
            <span className='content is-large'>Max Blaul</span>
          </a>
        </div>
      </nav>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <div>{renderPage()}</div>  {/* Remove the unnecessary argument */}
      </main>
    </div>
  );
}

export default Header;
