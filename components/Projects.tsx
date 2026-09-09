export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project Card 1 */}
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Autocare Essentials</h4>
          <p className="text-gray-600 mb-4">
            A web development project tailored for automobile accessories, streamlining user experience and inventory presentation.
          </p>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">Next.js / TypeScript</span>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Insurance Brokerage Portal</h4>
          <p className="text-gray-600 mb-4">
            Digital solution framework focused on optimizing insurance quotation processes and client policy management.
          </p>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">React / Tailwind CSS</span>
        </div>

      </div>
    </section>
  );
}