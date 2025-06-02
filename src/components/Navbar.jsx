function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <span className="font-bold text-xl">My Portfolio</span>
        <div className="space-x-4 sm:space-x-6 lg:space-x-8">
          <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="/about" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="/projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="/skills" className="hover:text-blue-400 transition duration-300">Skills</a>
          <a href="/Certifications" className="hover:text-blue-400 transition duration-300">Certifications</a>
          <a href="/Interests" className="hover:text-blue-400 transition duration-300">Interests</a>
          <a href="/Testimonials" className="hover:text-blue-400 transition duration-300">Testimonials</a>
          <a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;