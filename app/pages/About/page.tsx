import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between px-8 py-16">
      {/* Content Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          About Me
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Hi, I&apos;m Ricardo Paredes, a passionate professional bridging
          technology and creativity. With a background in full-stack
          development, digital marketing, and cybersecurity, I am dedicated to
          helping individuals and businesses thrive in the digital era.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          My journey began with a deep fascination for technology and its
          potential to solve real-world problems. Over the years, I&apos;ve
          honed my skills in various domains, from web development to ethical
          hacking, always driven by a desire to learn and grow.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          I believe in the power of creativity and technology to transform
          lives. Whether it&apos;s through building innovative solutions,
          optimizing digital strategies, or exploring new ways to engage with
          technology, I am committed to making a positive impact.
        </p>
        <Link
          href="/pages/Contact"
          className="bg-white text-black py-2 px-4 rounded-md text-lg font-semibold transition-all hover:bg-gray-200"
        >
          Get In Touch
        </Link>
      </div>

      {/* Back to Home Link */}
      <div className="flex flex-col items-center space-y-4 mt-8">
        <Link
          href="/"
          className="text-lg md:text-xl lg:text-2xl font-medium transition-all hover:text-gray-400"
        >
          Back to Home
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
};

export default About;
