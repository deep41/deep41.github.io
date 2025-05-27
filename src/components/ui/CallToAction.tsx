interface CallToActionProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const CallToAction = ({ title, description, linkText, linkUrl }: CallToActionProps) => {
  return (
    <div className="rounded-lg glass-card p-6 shadow-md border border-blue-400/30">
      <h2 className="mb-3 text-2xl font-semibold text-white">{title}</h2>
      <p className="mb-4 text-gray-300">{description}</p>
      <a
        href={linkUrl}
        className="inline-flex items-center rounded-md highlight-blue px-4 py-2 text-white transition-all hover:bg-blue-500/20 interactive-hover"
      >
        {linkText}
      </a>
    </div>
  );
};

export default CallToAction; 