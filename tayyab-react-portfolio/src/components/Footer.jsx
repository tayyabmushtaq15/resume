import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-6 text-gray-600 text-sm mt-8">
      <p>&copy; {new Date().getFullYear()} Tayyab Mushtaq. All rights reserved.</p>
    </footer>
  );
}

export default Footer;