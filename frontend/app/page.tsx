import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

    </main>
  );
}