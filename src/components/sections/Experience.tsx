import { useEffect, useMemo, useRef, useState } from 'react';

// Utility to check if we're on mobile
const isMobile = () => window.innerWidth < 768;
import { experienceData, type ExperienceItem } from '../../data/experience';

export default function Experience() {
  const EXPERIENCE: ExperienceItem[] = useMemo(() => experienceData, []);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Skip arrow key navigation on mobile
      if (isMobile()) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx((i) => (i + 1) % EXPERIENCE.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((i) => (i - 1 + EXPERIENCE.length) % EXPERIENCE.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [EXPERIENCE.length]);

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const selected = container.querySelector<HTMLButtonElement>(`[data-index="${activeIdx}"]`);
    if (selected) selected.scrollIntoView({ block: 'nearest' });
  }, [activeIdx]);

  const active = EXPERIENCE[activeIdx];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Experience</h2>
        </div>

        <div className="grid grid-cols-12 gap-2 md:gap-6">
          {/* Left list */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div
              ref={listRef}
              role="listbox"
              aria-label="Experience list"
              className="max-h-[300px] md:max-h-[65vh] overflow-auto pr-1"
            >
              {EXPERIENCE.map((e, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={`${e.role}-${e.org ?? idx}`}
                    data-index={idx}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex w-full items-center gap-3 px-3 py-3 md:px-2.5 md:py-2 font-mono text-sm transition-colors rounded-md
                      ${isActive ? 'bg-emerald-900/15 text-emerald-300' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 active:bg-zinc-900/50'}`}
                  >
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${isActive ? 'bg-emerald-500/80' : 'bg-zinc-700'}`} />
                    <span className="truncate">{e.org ?? e.role}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right details with single demarker */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 md:border-l md:border-zinc-800 md:pl-6">
            <div className="max-h-[400px] md:max-h-[65vh] overflow-auto pr-2">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{active.role}</h3>
                  <div className="mt-1 text-xs text-zinc-500">
                    {active.period && <span>{active.period}</span>}
                  </div>
                </div>
                <span className="text-[10px] text-zinc-500">{activeIdx + 1} / {EXPERIENCE.length}</span>
              </div>

              {active.points?.length > 0 && (
                <div className="mb-6">
                  <div className="mb-2 text-xs uppercase tracking-wider text-zinc-500">Highlights</div>
                  <ul className="list-disc space-y-1 pl-5 text-zinc-300">
                    {active.points.map((pt: string, i: number) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}


