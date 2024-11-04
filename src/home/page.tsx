'use client';

import { Heart, MessageCircle, UserCheck } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/footer/footer';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];


export default function HomePage() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="relative min-h-screen" style={{ backgroundImage: "url('/images/couple_image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <nav className="container border-gray-300">
      {/* <ContainerWrapper> */}
        <div className="container flex justify-between items-center py-4 px-5">
          <Link to="/">
            {/* <img src={Logo} alt="Logo" className="h-[5rem] w-[5rem]" /> */}
            <h2 className="container text-2xl font-serif sm:pl-0 md:pl-20 text-black">Boom Boom</h2>

          </Link>

          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="h-8 w-8 text-gray-800" /> : <FaBars className="h-8 w-8 text-gray-800" />}
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`text-lg font-medium hover:text-pink-500 p-2 ${
                  pathname === link.href ? "text-black" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center gap-5 mt-5 p-5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`${
                  pathname === link.href ? "text-black" : "text-gray-900"
                } text-lg hover:bg-gray-100 p-3 hover:text-pink-500 rounded-lg`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        )}
      {/* </ContainerWrapper> */}
    </nav>
      </header>
      <main className="absolute bottom-0 left-0 right-0 pt-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              The dating app <br />
              designed to be deleted™
            </h1>
          </div>
        </div>
      </main>
      <section id="features" className="py-20 bg-white my-35">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Boom Boom?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-12 h-12 text-pink-600" />, title: "Smart Matching", description: "Our AI-powered algorithm finds your perfect match." },
              { icon: <MessageCircle className="w-12 h-12 text-pink-600" />, title: "Secure Messaging", description: "Chat safely with potential matches in our secure environment." },
              { icon: <UserCheck className="w-12 h-12 text-pink-600" />, title: "Verified Profiles", description: "All profiles are verified to ensure authentic connections." },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {[
              { step: 1, title: "Create a Profile", description: "Sign up and tell us about yourself" },
              { step: 2, title: "Browse Matches", description: "Explore profiles of potential matches" },
              { step: 3, title: "Connect", description: "Start chatting and build connections" },
              { step: 4, title: "Meet", description: "Take your connection to the real world" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-pink-600 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl text-pink-100 mb-8">Download Boom Boom today and start your journey to meaningful connections.</p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Download Now
          </button>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  )
}