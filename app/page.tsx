import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between px-8 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          Ricardo Paredes
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8">
          Bridging Technology and Creativity to Empower Your Digital Presence
        </p>
        <Link
          href="/About"
          className="bg-white text-black py-2 px-4 rounded-md text-lg font-semibold transition-all hover:bg-gray-200"
        >
          Learn More About Me
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-4">
        <Link
          href="pages/About"
          className="text-lg md:text-xl lg:text-2xl font-medium transition-all hover:text-gray-400"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-lg md:text-xl lg:text-2xl font-medium transition-all hover:text-gray-400"
        >
          Projects
        </Link>
        <Link
          href="pages/Contact"
          className="text-lg md:text-xl lg:text-2xl font-medium transition-all hover:text-gray-400"
        >
          Contact
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-8">
        <a
          href="https://www.facebook.com/RicardoParedes711/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-gray-400"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/Rickypg711"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-gray-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/ricardoparedes711/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-gray-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.tiktok.com/@ricardoparedes0711"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-gray-400"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
