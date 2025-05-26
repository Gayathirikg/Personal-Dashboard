export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4 flex justify-center gap-6">
        <a href="#profile" className="hover:underline">Profile</a>
        <a href="#academics" className="hover:underline">Academics</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#optional" className="hover:underline">More</a>
      </nav>
    );
  }