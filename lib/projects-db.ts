export type Project = {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Autocare Essentials",
    description:
      "A web development project tailored for automobile accessories, streamlining user experience and inventory presentation.",
    type: "school",
    tags: ["Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Insurance Brokerage Portal",
    description:
      "Digital solution framework focused on optimizing insurance quotation processes and client policy management.",
    type: "school",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Open Source Contribution Tracker",
    description:
      "A small tool to log and showcase contributions made to open source repositories.",
    type: "opensource",
    tags: ["Next.js", "GitHub API"],
  },
];