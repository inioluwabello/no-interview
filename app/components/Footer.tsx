import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://web.facebook.com/profile.php?id=61565477773867" className="text-white hover:text-gray-400"><FaFacebookF /></a>
          <a href="https://x.com/noointerview" className="text-white hover:text-gray-400"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/no-interview/" className="text-white hover:text-gray-400"><FaLinkedinIn /></a>
          <a href="https://instagram.com/nointerview_official/" className="text-white hover:text-gray-400"><FaInstagram /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} No Interview. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
