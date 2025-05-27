import ReactMarkdown from 'react-markdown';

const aboutContent = `# About Me

I'm a passionate software developer with a keen interest in building innovative solutions that make a difference. My journey in tech has been driven by curiosity and a desire to create applications that are not only functional but also provide exceptional user experiences.

With expertise in full-stack development and a strong foundation in modern technologies, I approach each project as an opportunity to learn and grow while delivering robust solutions that meet business needs.

## Work Experience

### Research, GenAI
**NC State University** • *2024 - Present*

- Developed a RAG AI chatbot to analyze course evaluations of students, adopted by 30+ professors.
- Integrated prompt management into Langfuse, enabling easy prompt switching and performance tracking.
- Optimized RAG pipeline, boosting accuracy by 30% through efficient file ingestion and retrieval improvement.

### Software Engineer
**GE HealthCare (contractor)** • *2022 - 2024*

- Transitioned a monolithic frontend application to micro frontends, achieving a 90% reduction in load time.
- Collaborated on migrating services to EKS, enhancing CI/CD efficiency and boosting delivery.
- Wrote 250+ of Angular tests and patched vulnerabilities, reducing risks by 12%, boosting system stability.
- Built a faster HTML5 time series viewer, speeding annotation and labelling by 40% with seamless integration.
- Authored guidebooks on cloud migration for the adoption of in-house solutions built on EKS.
- Engineered a data ingestion layer to connect legacy systems, enabling secure ingestion of medical images.

### Software Developer
**Freelance** • *2019 - 2021*

- Architected cross-platform [Flutter social media app](https://qr1.be/16PB) with real-time chat, infinite feed, online/offline data sync.
- Engineered a scalable multi-tenant system, boosting onboarding speed by 50% while ensuring data security.
- Implemented user privacy settings and data protection measures in full compliance with CCPA regulation.

## Education

### Master of Computer Science
**North Carolina State University** • *Aug 2023 - May 2025*

### Bachelor's of Computer Science and Engineering
**MS Ramaiah Institute of Technology** • *Aug 2015 - July 2019*

## Certifications

- **Kubernetes Certified Administrator & Developer** (2022)

## Skills & Technologies

### Frontend
- React / Next.js
- TypeScript
- Tailwind CSS
- Angular

### Backend
- Node.js
- Python
- Java
- PostgreSQL

### Cloud & DevOps
- AWS
- Kubernetes
- Docker
- CI/CD`;

const AboutWithMarkdown = () => {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-16">
      <div className="glass-card border-white/20 rounded-lg p-8 lg:p-12">
        <ReactMarkdown 
          className="markdown-about prose prose-lg max-w-none"
          components={{
            h1: ({children}) => (
              <h1 className="text-4xl font-bold text-highlight mb-8">
                {children}
              </h1>
            ),
            h2: ({children}) => (
              <h2 className="text-2xl font-bold text-white mb-6 mt-12 first:mt-0">
                {children}
              </h2>
            ),
            h3: ({children}) => (
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                {children}
              </h3>
            ),
            p: ({children}) => (
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                {children}
              </p>
            ),
            ul: ({children}) => (
              <ul className="space-y-2 mb-6 ml-4">
                {children}
              </ul>
            ),
            li: ({children}) => (
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>{children}</span>
              </li>
            ),
            a: ({href, children}) => (
              <a 
                href={href} 
                className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 hover:decoration-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            strong: ({children}) => (
              <strong className="text-white font-semibold">
                {children}
              </strong>
            ),
            em: ({children}) => (
              <em className="text-gray-400 italic">
                {children}
              </em>
            ),
            hr: () => (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-8"></div>
            ),
            // Custom styling for work experience entries
            blockquote: ({children}) => (
              <div className="border-l-4 border-blue-400/50 pl-6 my-6 bg-white/5 rounded-r-lg py-4">
                {children}
              </div>
            ),
          }}
        >
          {aboutContent}
        </ReactMarkdown>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="rounded-lg glass-card p-6 shadow-md border border-blue-400/30">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Interested in my work?
            </h2>
            <p className="mb-4 text-gray-300">
              Check out my latest projects and see what I've been building.
            </p>
            <a
              href="/projects"
              className="inline-flex items-center rounded-md highlight-blue px-4 py-2 text-white transition-all hover:bg-blue-500/20 interactive-hover"
            >
              View Projects →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithMarkdown; 