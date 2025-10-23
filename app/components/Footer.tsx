import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="Vin_logo.png"
              alt="Vincent Learning Hub Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <h2 className="text-xl font-bold text-white">Vincent Learning Hub</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering learners through innovation, creativity, and digital skills.  
            Together we <span className="text-blue-400">Empower, Innovate, Lead.</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#header" className="hover:text-blue-400">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com/Owera_Vincent" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/+2540748885844" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com/VOwerah254" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/vincentowerah" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@mr.owera" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Vincent Learning Hub. All rights reserved.  
        </p>
      </div>
    </footer>
  );
}
