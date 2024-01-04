import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m <span className="text-primary">Kaem</span>
      </h1>
      <p className="mt-3 text-x1">
        <span className="text-x2 text-green-600">"SAWATDEE"</span>
        <span className="text-x5">Check out my projects!</span>
      </p>

      <h2 className="mt-24 font-blod text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-green-400 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                className="object-cover rounded-t-lg h-[200px] border border-gray-500 "
              />
            )}

            <div className="mt-2 font-extrabold bg-green-400 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
