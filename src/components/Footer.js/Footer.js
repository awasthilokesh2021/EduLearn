import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Left Side - Contact & Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">EduLearn</h3>
          <p>Empowering learners with high-quality online education.</p>
          <p className="mt-2 text-gray-400">Email: support@edulearn.com</p>
        </div>

        {/* Right Side - FAQ Link */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/faq" className="text-gray-300 hover:text-blue-400 transition">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact Us</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


