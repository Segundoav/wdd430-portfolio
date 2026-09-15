import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/lib/projects-db";

// GET /api/projects
// GET /api/projects?type=opensource
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  try {
    let result = projects;

    if (type) {
      result = projects.filter((project) => project.type === type);
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}