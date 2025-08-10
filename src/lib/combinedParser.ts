export type SocialLink = { label: string; href: string };
export type Project = { title: string; desc?: string; tags?: string[] };
export type ExperienceItem = { role: string; org?: string; period?: string; points: string[] };

export interface CombinedData {
  hero?: { greeting?: string; tagline?: string; availability?: string };
  social?: SocialLink[];
  about?: string[]; // paragraphs
  experience?: ExperienceItem[];
  education?: string[];
  certifications?: string[];
  skills?: { frontend?: string[]; backend?: string[]; cloud?: string[] };
  projects?: Project[];
  contact?: { email?: string; location?: string };
}

const heading = (line: string) => /^#{1,6}\s+/.test(line);
const hLevel = (line: string) => (line.match(/^#+/)?.[0].length ?? 0);
const clean = (s: string) => s.trim().replace(/^[-*]\s+/, '').replace(/^\*\*|\*\*$/g, '');

export function parseCombined(md: string): CombinedData {
  const lines = md.split(/\r?\n/);
  const data: CombinedData = {};
  let section: string | null = null;
  let subsection: string | null = null;
  let aboutParas: string[] = [];
  const social: SocialLink[] = [];
  const experience: ExperienceItem[] = [];
  const projects: Project[] = [];
  const education: string[] = [];
  const certs: string[] = [];
  const skills: CombinedData['skills'] = { frontend: [], backend: [], cloud: [] };
  const contact: CombinedData['contact'] = {};

  let currentExp: ExperienceItem | null = null;
  let currentProj: Project | null = null;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();
    if (line === '') continue;

    if (heading(line)) {
      const level = hLevel(line);
      const title = line.replace(/^#{1,6}\s+/, '').trim();
      if (level === 2) {
        section = title.toLowerCase();
        subsection = null;
        currentExp = null; currentProj = null;
        continue;
      }
      if (level === 3) {
        subsection = title.toLowerCase();
        continue;
      }
    }

    // HOME
    if (section === 'home') {
      data.hero ||= {};
      if (subsection === 'hero') {
        // parse bullet points like "- Greeting: ..."
        const m = line.match(/^[-*]\s*(\w[\w ]*):\s*(.+)$/);
        if (m) {
          const key = m[1].toLowerCase();
          const val = m[2].trim();
          if (key.startsWith('greeting')) data.hero.greeting = val;
          else if (key.startsWith('tagline')) data.hero.tagline = val;
          else if (key.startsWith('availability')) data.hero.availability = val;
        }
      } else if (subsection === 'social links' || subsection === 'social') {
        const m = line.match(/^[-*]\s*([^:]+):\s*(\S.+)$/);
        if (m) social.push({ label: m[1].trim(), href: m[2].trim() });
      }
      continue;
    }

    // ABOUT
    if (section === 'about') {
      if (!subsection) {
        // paragraphs until next subsection/section
        if (!line.startsWith('-')) aboutParas.push(raw.trim());
      } else if (subsection === 'work experience') {
        const roleLine = line.match(/^[-*]\s*(.+?)\s+—\s+(.+?)\s*\((.+)\)$/);
        if (roleLine) {
          if (currentExp) experience.push(currentExp);
          currentExp = { role: roleLine[1].trim(), org: roleLine[2].trim(), period: roleLine[3].trim(), points: [] };
        } else if (line.startsWith('-') || line.startsWith('*')) {
          // nested bullet -> point
          currentExp ||= { role: 'Experience', points: [] } as ExperienceItem;
          currentExp.points.push(clean(line));
        }
      } else if (subsection === 'education') {
        if (line.startsWith('-')) education.push(clean(line));
      } else if (subsection?.startsWith('cert')) {
        if (line.startsWith('-')) certs.push(clean(line));
      } else if (subsection?.startsWith('skills')) {
        const m = line.match(/^[-*]\s*(Frontend|Backend|Cloud.*?):\s*(.+)$/i);
        if (m) {
          const key = m[1].toLowerCase();
          const items = m[2].split(/,\s*/);
          if (key.startsWith('front')) skills.frontend = items;
          else if (key.startsWith('back')) skills.backend = items;
          else if (key.startsWith('cloud')) skills.cloud = items;
        }
      }
      continue;
    }

    // PROJECTS
    if (section === 'projects') {
      const titleMatch = line.match(/^[-*]\s*(.+)$/);
      if (titleMatch && !titleMatch[1].includes(':')) {
        if (currentProj) projects.push(currentProj);
        currentProj = { title: titleMatch[1].trim() };
      } else if (line.startsWith('-')) {
        const m = line.match(/^[-*]\s*(Description|Tech|Links):\s*(.+)$/i);
        if (m && currentProj) {
          const key = m[1].toLowerCase();
          const val = m[2].trim();
          if (key === 'description') currentProj.desc = val;
          if (key === 'tech') currentProj.tags = val.split(/,\s*/);
        }
      }
      continue;
    }

    // CONTACT
    if (section === 'contact') {
      const m = line.match(/^[-*]?\s*(Direct email|Location):\s*(.+)$/i);
      if (m) {
        const key = m[1].toLowerCase();
        if (key.includes('email')) contact.email = m[2].trim();
        if (key.includes('location')) contact.location = m[2].trim();
      }
    }
  }

  if (currentExp) experience.push(currentExp);
  if (currentProj) projects.push(currentProj);

  if (aboutParas.length) data.about = aboutParas.filter(Boolean);
  if (social.length) data.social = social;
  if (experience.length) data.experience = experience;
  if (projects.length) data.projects = projects;
  if (education.length) data.education = education;
  if (certs.length) data.certifications = certs;
  if (skills) data.skills = skills;
  if (Object.keys(contact).length) data.contact = contact;

  return data;
}


