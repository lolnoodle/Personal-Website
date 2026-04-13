import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-[var(--background)] px-6 py-10 flex flex-col gap-8">
      {/* Page header */}
      <div className="border-b border-[var(--border)] pb-6">
        <p className="font-space text-xs text-[var(--accent)] tracking-widest mb-2">
          what i have built
        </p>
        <h1 className="font-bebas text-7xl tracking-widest text-[var(--text)]">
          Projects
        </h1>
        <p className="font-space text-xs text-[var(--text)] opacity-50 mt-2 tracking-widest">
          {projects.length} records in the collection
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className="border border-[var(--border)] bg-[var(--background2)] flex overflow-hidden"
          >
            {/* Sleeve */}
            <div className="flex-1 p-5 flex flex-col justify-between min-h-[140px]">
              <div>
                <h2 className="font-bebas text-2xl tracking-widest text-[var(--text)] leading-none mb-3">
                  {project.title}
                </h2>
                <div className="flex flex-col gap-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`font-space text-[10px] tracking-widest ${
                        index === 0
                          ? "text-[var(--accent)]"
                          : "text-[var(--text)] opacity-40"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}. {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="font-space text-[10px] text-[var(--text)] opacity-30 tracking-widest mt-4">
                {project.year}
              </span>
            </div>

            {/* Vinyl disc */}
            <div className="flex items-center justify-center p-4 border-l border-[var(--border)]">
              <div
                className="w-16 h-16 rounded-full border border-[var(--border)] bg-[var(--background3)] flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle, #222 28%, #111 29%, #1a1a1a 58%, #111 59%)",
                }}
              >
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] opacity-70" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
