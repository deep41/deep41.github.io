import { contactData } from '../../data/contact';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-100">Let’s talk</h2>
        <p className="text-zinc-400 mb-8">
          Have an idea to build, a product to refine, or a team to empower? I’d love to hear from you.
        </p>
        <a
          href={`mailto:${contactData.email}`}
          className="inline-block bg-emerald-600 text-black px-5 py-3 rounded hover:bg-emerald-500"
        >
          {contactData.email}
        </a>
      </div>
    </section>
  );
}


