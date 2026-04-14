import { projects } from "@/data/projects";
import VinylCard from "@/components/vinyl-card";

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-[var(--background)] px-6 py-10 flex flex-col gap-8">
      {/* Page header */}
      <div className="border-b border-[var(--border)] pb-6">
        <p className="font-space text-xs text-[var(--accent)] tracking-widest mb-2">
          // what i&apos;ve built
        </p>
        <h1 className="font-bebas text-7xl tracking-widest text-[var(--text)]">
          Projects
        </h1>
        <p className="font-space text-xs text-[var(--text)] opacity-50 mt-2 tracking-widest">
          {projects.length} records in the collection
        </p>
      </div>

      {/* Vinyl grid */}
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <VinylCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
