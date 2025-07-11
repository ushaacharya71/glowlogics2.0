import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="w-full bg-[#ff6e0c] text-black px-6 md:px-16 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Glowlogics <br /> Solutions
            </h2>

            <div className="overflow-hidden rounded-2xl shadow-lg border border-black max-w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62221.787564953855!2d77.59426133913958!3d12.916607633426603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15005309cf71%3A0x2f15b757ea19a355!2sGlowlogics%20Solutions!5e0!3m2!1sen!2sin!4v1751121448545!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Right Columns */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 text-sm">
            {/* Column 1: Contact Info */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">S:</p>
                <ul className="space-y-1">
                  <li><a href="#" className="underline">Instagram</a></li>
                  <li><a href="#" className="underline">Behance</a></li>
                  <li><a href="#" className="underline">Facebook</a></li>
                  <li><a href="#" className="underline">LinkedIn</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1">L:</p>
                <ul className="space-y-1 break-words">
                  <li><a href="#" className="underline">Shree Narayana Tower, HSR Layout</a></li>
                  <li><a href="#" className="underline">Outer Ring Rd</a></li>
                  <li><a href="#" className="underline">Jakkasandra, 1st Block Koramangala</a></li>
                  <li><a href="#" className="underline">Bengaluru, Karnataka 560034</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1">E:</p>
                <a href="mailto:hr@glowlogics.in" className="underline">hr@glowlogics.in</a>
              </div>

              <div>
                <p className="font-semibold mb-1">P:</p>
                <a href="tel:+919620294767" className="underline">+91 9620294767</a>
              </div>
            </div>

            {/* Column 2: Menu */}
            <div className="space-y-4">
              <p className="font-semibold mb-1">M:</p>
              <ul className="space-y-1">
                <li><a href="#" className="underline">Home</a></li>
                <li><a href="#" className="underline">Services</a></li>
                <li><a href="#" className="underline">Our Work</a></li>
                <li><a href="#" className="underline">About Us</a></li>
                <li><a href="#" className="underline">Insights</a></li>
                <li><a href="#" className="underline">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div className="space-y-4">
              <p className="font-semibold mb-1">Explore:</p>
              <ul className="space-y-1">
                <li><a href="#" className="underline">Careers</a></li>
                <li><a href="#" className="underline">Blog</a></li>
                <li><a href="#" className="underline">Partners</a></li>
                <li><a href="#" className="underline">Press Kit</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="text-center sm:text-left">
              <p className="font-semibold mb-2">Subscribe to our newsletter:</p>
              <form className="flex flex-col gap-2 w-full max-w-xs mx-auto sm:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-black text-white text-xs rounded-md hover:bg-gray-800">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-black/20 pt-6 text-sm">
          <p className="text-center">
           © GlowLogics Solutions All Rights Reserved{" "}
            <Link to="/legal-terms" className="underline"> Legal Terms</Link> |{" "}
            <Link to="/privacy-policy" className="underline">Privacy Policy</Link>
          </p>
          <p className="text-center">Website by Glowlogics</p>
        </div>
      </div>
    </section>
  );
}
