import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-16">
      {/* Content Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Contact Me
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Feel free to reach out to me via email or through the contact form
          below.
        </p>
        <form
          action="mailto:pardesricardog@gmail.com"
          method="post"
          encType="text/plain"
          className="flex flex-col items-center space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full max-w-md p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full max-w-md p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full max-w-md p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          />
          <button
            type="submit"
            className="bg-white text-black py-2 px-4 rounded-md text-lg font-semibold transition-all hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 flex space-x-6">
        <a
          href="https://www.facebook.com/RicardoParedes711/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-gray-400"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/yourprofile" // Replace with actual Twitter URL if available
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

      {/* Back to Home Link */}
      <div className="absolute bottom-8 flex flex-col items-center space-y-4">
        <Link
          href="/"
          className="text-lg md:text-xl lg:text-2xl font-medium transition-all hover:text-gray-400"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
