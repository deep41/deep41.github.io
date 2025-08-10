import { projectsData } from '../../data/projects';

export default function Projects() {
  const PROJECTS = projectsData;
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Selected Work</h2>
          <p className="text-zinc-400">A few projects I loved building.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="border border-zinc-800 rounded-lg p-6 bg-zinc-950/60 shadow-sm hover:shadow-lg hover:bg-zinc-900/60 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-zinc-100">{p.title}</h3>
              {p.desc && <p className="text-zinc-400 mb-4">{p.desc}</p>}
              <div className="flex flex-wrap gap-2">
                {(p.tags ?? []).map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded border border-zinc-800 bg-zinc-900 text-zinc-300">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


