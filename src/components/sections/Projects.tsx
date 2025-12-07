import { useEffect, useMemo, useRef, useState } from 'react';

// Utility to check if we're on mobile
const isMobile = () => window.innerWidth < 768;
import { projectsData, type Project } from '../../data/projects';

type ExtendedProject = Project & {
  highlights?: string[];
  role?: string;
  period?: string;
  demo?: string;
  repo?: string;
};

export default function Projects() {
  const PROJECTS: ExtendedProject[] = useMemo(() => projectsData as ExtendedProject[], []);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Skip arrow key navigation on mobile
      if (isMobile()) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx((i) => (i + 1) % PROJECTS.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [PROJECTS.length]);

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const selected = container.querySelector<HTMLButtonElement>(`[data-index="${activeIdx}"]`);
    if (selected) {
      selected.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  const activeProject = PROJECTS[activeIdx];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Selected Work</h2>
        </div>

        <div className="grid grid-cols-12 gap-2 md:gap-6">
          {/* Left: list of projects */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div
              ref={listRef}
              role="listbox"
              aria-label="Projects list"
              className="max-h-[300px] md:max-h-[65vh] overflow-auto pr-1"
            >
              {PROJECTS.map((p, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={p.title}
                    data-index={idx}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex w-full items-center gap-3 px-3 py-3 md:px-2.5 md:py-2 font-mono text-sm transition-colors rounded-md
                      ${isActive ? 'bg-emerald-900/15 text-emerald-300' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 active:bg-zinc-900/50'}`}
                  >
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${isActive ? 'bg-emerald-500/80' : 'bg-zinc-700'}`} />
                    <span className="truncate">{p.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: active project details */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 md:border-l md:border-zinc-800 md:pl-6">
            <div className="max-h-[400px] md:max-h-[65vh] overflow-auto pr-2">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{activeProject.title}</h3>
                  <div className="mt-1 text-xs text-zinc-500">
                    {activeProject.role && <span className="mr-2">{activeProject.role}</span>}
                    {activeProject.period && <span className="">{activeProject.period}</span>}
                  </div>
                </div>
                <span className="text-[10px] text-zinc-500">{activeIdx + 1} / {PROJECTS.length}</span>
              </div>

              {activeProject.desc && (
                <div className="mb-6">
                  <div className="mb-2 text-xs uppercase tracking-wider text-zinc-500">Summary</div>
                  <p className="whitespace-pre-wrap text-zinc-300">{activeProject.desc}</p>
                </div>
              )}

              {(activeProject.tags?.length ?? 0) > 0 && (
                <div className="mb-6">
                  <div className="mb-2 text-xs uppercase tracking-wider text-zinc-500">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags!.map((t) => (
                      <span key={t} className="rounded bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(activeProject.highlights?.length ?? 0) > 0 && (
                <div className="mb-6">
                  <div className="mb-2 text-xs uppercase tracking-wider text-zinc-500">Highlights</div>
                  <ul className="list-disc space-y-1 pl-5 text-zinc-300">
                    {activeProject.highlights!.map((h: string, i: number) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(activeProject.demo || activeProject.repo) && (
                <div className="mb-2">
                  <div className="mb-2 text-xs uppercase tracking-wider text-zinc-500">Links</div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {activeProject.demo && (
                      <a className="text-emerald-300 hover:text-emerald-200 underline" href={activeProject.demo} target="_blank" rel="noreferrer">Demo</a>
                    )}
                    {activeProject.repo && (
                      <a className="text-emerald-300 hover:text-emerald-200 underline" href={activeProject.repo} target="_blank" rel="noreferrer">Repo</a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

          
      </div>
    </section>
  );
}


