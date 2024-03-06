import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-sm">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-indigo-800 text-white rounded-l px-4 py-3 focus:outline-none"
              />
              <button className="bg-indigo-700 rounded-r px-4 py-3">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="my-8 bg-indigo-800" />
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-sm">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
