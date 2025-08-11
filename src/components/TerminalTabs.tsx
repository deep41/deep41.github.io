import { useEffect, useMemo, useState } from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import About from './sections/About';
import Contact from './sections/Contact';

type TabKey = 'intro' | 'projects' | 'work' | 'about' | 'contact';

export default function TerminalTabs() {
  const tabs = useMemo(
    () => [
      { key: 'intro' as TabKey, label: 'Intro', element: <Hero /> },
      { key: 'about' as TabKey, label: 'About', element: <About /> },
      { key: 'work' as TabKey, label: 'Work', element: <Experience /> },
      { key: 'projects' as TabKey, label: 'Projects', element: <Projects /> },
      { key: 'contact' as TabKey, label: 'Contact', element: <Contact /> },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState<number>(0);

  // Initialize from URL hash and keep in sync with back/forward
  useEffect(() => {
    const keys = tabs.map((t) => t.key);
    const applyFromHash = () => {
      const h = (window.location.hash || '').replace(/^#/, '');
      const idx = Math.max(0, keys.indexOf(h as TabKey));
      setActiveIdx(idx === -1 ? 0 : idx);
    };
    applyFromHash();
    const onHash = () => applyFromHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [tabs]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveIdx((i) => {
          const next = (i + 1) % tabs.length;
          const key = tabs[next].key;
          if (window.location.hash.replace(/^#/, '') !== key) {
            window.location.hash = `#${key}`;
          }
          return next;
        });
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveIdx((i) => {
          const next = (i - 1 + tabs.length) % tabs.length;
          const key = tabs[next].key;
          if (window.location.hash.replace(/^#/, '') !== key) {
            window.location.hash = `#${key}`;
          }
          return next;
        });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tabs.length]);

  return (
    <div className="relative z-10 h-full">
      <div className="mx-auto max-w-6xl h-full px-3 md:px-6">
        <div className="flex h-full flex-col rounded-lg border border-zinc-800 bg-black/60 shadow-lg">
          <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 pr-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500/80" aria-hidden />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden />
              </div>
              <div role="tablist" aria-label="Terminal Tabs" className="flex gap-1 overflow-x-auto">
                {tabs.map((t, idx) => (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={activeIdx === idx}
                    onClick={() => {
                      setActiveIdx(idx);
                      if (window.location.hash.replace(/^#/, '') !== t.key) {
                        window.location.hash = `#${t.key}`;
                      }
                    }}
                    className={`whitespace-nowrap rounded border px-2 py-1 text-xs transition-colors
                      ${activeIdx === idx
                        ? 'border-emerald-700 bg-emerald-900/30 text-emerald-300'
                        : 'border-transparent bg-transparent text-zinc-300 hover:text-emerald-200'}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:block text-[10px] text-zinc-500">
              Use 
              <span className="mx-1 inline-flex items-center rounded border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs">←</span>
              and
              <span className="mx-1 inline-flex items-center rounded border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs">→</span>
              to switch tabs
            </div>
          </div>

          <div className="relative min-h-0 grow overflow-auto pb-12 p-2 md:p-4">
            {tabs[activeIdx].element}
            {['work','projects'].includes(tabs[activeIdx].key) && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 border-t border-zinc-800 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
                <div className="px-4 py-2 text-center text-[10px] text-zinc-500">
                  Use <span className="mx-1 inline-flex items-center rounded border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs">↑</span> and <span className="mx-1 inline-flex items-center rounded border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs">↓</span> to navigate
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


