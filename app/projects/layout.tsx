import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <nav className="mb-6 space-x-4 text-blue-600 dark:text-blue-400 font-medium">
        <Link href="/projects" className="hover:underline">Overview</Link> |{' '}
        <Link href="/projects/opensource" className="hover:underline">Open Source</Link> |{' '}
        <Link href="/projects/school" className="hover:underline">School</Link>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}