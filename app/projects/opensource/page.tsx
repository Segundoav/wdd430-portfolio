import { Project } from "@/lib/projects-db";

async function getOpenSourceProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects?type=opensource", {
    cache: "no-store",
  });
  return res.json();
}

export default async function OpenSourcePage() {
  const projects = await getOpenSourceProjects();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Open Source Projects</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Here are my open source contributions.
      </p>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border rounded p-4">
            <h2 className="font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}