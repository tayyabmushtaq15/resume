import React from 'react';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;