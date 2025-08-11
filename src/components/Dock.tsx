import { Github, Linkedin, Mail } from 'lucide-react';

const items = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/deep41' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/deep41' },
  { icon: Mail, label: 'Email', href: 'mailto:deepak.rajendran123@gmail.com' },
];

export default function Dock({ embedded = false }: { embedded?: boolean }) {
  if (embedded) {
    return (
      <div className="pt-2">
        <div className="flex flex-wrap gap-2">
          {items.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group rounded border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
            >
              <Icon className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20">
      <div className="backdrop-blur bg-black/60 border border-zinc-800 shadow-lg rounded-full px-3 py-1.5 flex gap-1">
        {items.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="group rounded-full px-3 py-2 hover:bg-zinc-900 transition-colors flex items-center gap-2"
            aria-label={label}
          >
            <Icon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
            <span className="hidden sm:inline text-sm text-zinc-300 group-hover:text-emerald-200">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}


