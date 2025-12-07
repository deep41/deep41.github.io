import { useEffect, useMemo, useState } from 'react';
import { Menu } from 'lucide-react';

// Utility to check if we're on mobile
const isMobile = () => window.innerWidth < 768;

// Utility to check if we're on very small screens
const isVerySmall = () => window.innerWidth < 700;
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
      // Skip arrow key navigation on mobile
      if (isMobile()) return;

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile()) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile()) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile() || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - next tab
      const next = (activeIdx + 1) % tabs.length;
      setActiveIdx(next);
      if (window.location.hash.replace(/^#/, '') !== tabs[next].key) {
        window.location.hash = `#${tabs[next].key}`;
      }
    } else if (isRightSwipe) {
      // Swipe right - previous tab
      const next = (activeIdx - 1 + tabs.length) % tabs.length;
      setActiveIdx(next);
      if (window.location.hash.replace(/^#/, '') !== tabs[next].key) {
        window.location.hash = `#${tabs[next].key}`;
      }
    }
  };

  return (
    <div className="relative z-10 h-full">
      <div className="mx-auto flex h-full max-w-6xl px-3 md:px-6">
        <div
          className="flex h-full min-h-0 flex-1 flex-col rounded-lg border border-zinc-800 bg-black/60 shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 pr-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500/80" aria-hidden />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden />
              </div>
              {isVerySmall() ? (
                <div className="relative mobile-menu-container">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:text-emerald-200 transition-colors border border-zinc-600 rounded"
                    aria-label="Toggle menu"
                  >
                    <span className="text-sm font-medium">{tabs[activeIdx].label}</span>
                    <Menu className="w-4 h-4" />
                  </button>
                  {mobileMenuOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50 min-w-[120px]">
                      {tabs.map((t, idx) => (
                        <button
                          key={t.key}
                          onClick={() => {
                            setActiveIdx(idx);
                            setMobileMenuOpen(false);
                            if (window.location.hash.replace(/^#/, '') !== t.key) {
                              window.location.hash = `#${t.key}`;
                            }
                          }}
                          className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                            activeIdx === idx
                              ? 'bg-emerald-900/30 text-emerald-300'
                              : 'text-zinc-300 hover:bg-zinc-800 hover:text-emerald-200'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div role="tablist" aria-label="Terminal Tabs" className="flex gap-1 md:gap-1 overflow-x-auto">
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
                      className={`whitespace-nowrap rounded border px-3 py-2 md:px-2 md:py-1 text-sm md:text-xs transition-colors min-w-0 flex-shrink-0
                        ${activeIdx === idx
                          ? 'border-emerald-700 bg-emerald-900/30 text-emerald-300'
                          : 'border-transparent bg-transparent text-zinc-300 hover:text-emerald-200 active:bg-zinc-900/50'}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden md:block text-[10px] text-zinc-500">
              Use
              <span className="mx-1 inline-flex items-center rounded border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs">←</span>
              and
              <span className="mx-1 inline-flex items-center rounded border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs">→</span>
              to switch tabs
            </div>
          </div>

          <div className="relative min-h-0 grow overflow-auto pb-12 p-1 md:p-2">
            {tabs[activeIdx].element}
            {['work','projects'].includes(tabs[activeIdx].key) && !isMobile() && (
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


