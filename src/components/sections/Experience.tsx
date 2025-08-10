import { experienceData } from '../../data/experience';

export default function Experience() {
  const EXPERIENCE = experienceData;
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-zinc-100">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE.map((e) => (
            <article key={e.role} className="border border-zinc-800 rounded-lg p-6 bg-zinc-950/60 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-zinc-100">{e.role}</h3>
                <span className="text-sm text-zinc-500">{e.period}</span>
              </div>
              <p className="text-zinc-400 mb-3">{e.org}</p>
              <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


