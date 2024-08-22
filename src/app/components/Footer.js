import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are a passionate team dedicated to providing innovative solutions and services. Our mission is to exceed your expectations and deliver top-notch results.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/About" className="text-white">About</Link></li>
              <li><Link href="/Services" className="text-white">Services</Link></li>
              <li><Link href="/Contact" className="text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              123 Main Street,<br />
              City, Country<br />
              Email: info@example.com<br />
              Phone: +123 456 7890
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-dark text-center p-3">
        <div className="container">
          <a href="#" className="text-white me-4"><FaFacebookF /></a>
          <a href="#" className="text-white me-4"><FaTwitter /></a>
          <a href="#" className="text-white me-4"><FaLinkedinIn /></a>
          <a href="#" className="text-white"><FaInstagram /></a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
