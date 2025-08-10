import { aboutData } from '../../data/about';

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-100">About</h2>
        <div className="space-y-4">
          {aboutData.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg text-zinc-300 leading-8">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}


