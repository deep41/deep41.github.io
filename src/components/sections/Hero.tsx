import { ArrowRight } from 'lucide-react';
import { heroData } from '../../data/hero';
import Dock from '../Dock';

export default function Hero() {
  const { greeting, tagline } = heroData;
  return (
    <section id="top" className="relative pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100">
              {tagline}
            </h1>
            <p className="text-lg text-zinc-400 max-w-prose">
              {greeting}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-emerald-600 text-black px-4 py-2 rounded hover:bg-emerald-500">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-2 rounded hover:bg-zinc-800">
                Contact
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg bg-zinc-900 border border-zinc-800 shadow-inner" />
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="text-8xl">🖥️</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <Dock embedded />
      </div>
    </section>
  );
}


