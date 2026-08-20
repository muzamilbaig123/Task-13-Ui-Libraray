const templates = [
  {
    title: "Landing Page",
    desc: "Hero, features, CTA  fully responsive starter.",
    tag: "Free",
  },
  {
    title: "Dashboard",
    desc: "Sidebar layout with cards, stats, and tables.",
    tag: "Free",
  },
  {
    title: "Auth Pages",
    desc: "Login, Register, and Forgot Password screens.",
    tag: "Soon",
  },
  {
    title: "Portfolio",
    desc: "Minimal personal portfolio with project showcase.",
    tag: "Soon",
  },
];

const TemplatesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">
          Templates
        </span>
        <h1 className="text-4xl font-bold text-[var(--text-color)]">
          Kickstart your project
        </h1>
        <p className="text-gray-400 text-lg">
          Pre-built page templates using EaseUI components copy, paste, ship.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {templates.map(({ title, desc, tag }) => (
          <div
            key={title}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col gap-3 hover:border-indigo-400 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[var(--text-color)]">
                {title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${tag === "Soon" ? "bg-gray-100 dark:bg-gray-800 text-gray-400" : "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500"}`}
              >
                {tag}
              </span>
            </div>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;