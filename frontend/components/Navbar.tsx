export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">

      <h1 className="text-2xl font-bold">
        AI Business Assistant
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#" className="hover:text-white transition">
          Home
        </a>

        <a href="#" className="hover:text-white transition">
          Features
        </a>

        <a href="#" className="hover:text-white transition">
          Contact
        </a>
      </div>

    </nav>
  );
}