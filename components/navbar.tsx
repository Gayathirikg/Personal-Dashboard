export default function Navbar() {
    return (
      <nav className="flex flex-wrap gap-4 px-6 py-4 bg-gray-100 text-blue-700 font-medium shadow">
    <a href="#profile" className="hover:underline">Profile</a>
    <a href="#academics" className="hover:underline">Academics</a>
    <a href="#skills" className="hover:underline">Skills</a>
    <a href="#hobbies" className="hover:underline">More</a>
  </nav>

    );
  }