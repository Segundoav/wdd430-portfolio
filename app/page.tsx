
import About from "@/components/About";

import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      
      <div className="max-w-4xl mx-auto p-6 text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Insurance & Development Professional Portfolio
        </h2>
        <p className="text-gray-600 mt-2">
          Technological solutions applied to the insurance brokerage and advisory sector.
        </p>
      </div>
      <About />
      <Projects />
      
    </main>
  );
}