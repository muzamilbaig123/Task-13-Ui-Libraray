const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">
          About
        </span>
        <h1 className="text-4xl font-bold text-[var(--text-color)]">
          What is EaseUI?
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          EaseUI is an open-source React + TypeScript component library built
          for developers who want beautiful, animated, and accessible UI
          components without the hassle.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-[var(--text-color)]">
          Why EaseUI?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Developer First",
              desc: "Clean APIs, full TypeScript support, and sensible defaults.",
            },
            {
              title: "Animation Ready",
              desc: "GSAP-powered entrance and hover animations built in.",
            },
            {
              title: "Theme Aware",
              desc: "Light and dark mode work automatically via CSS variables.",
            },
            {
              title: "Open Source",
              desc: "MIT licensed  free to use, modify, and distribute.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col gap-2 hover:border-indigo-400 transition-colors duration-200"
            >
              <h3 className="font-semibold text-[var(--text-color)]">
                {title}
              </h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-[var(--text-color)]">
          Built With
        </h2>
        <ul className="flex flex-wrap gap-3">
          {[
            "React 18",
            "TypeScript 5.8",
            "Vite 7",
            "Tailwind CSS 4",
            "GSAP",
            "Radix UI",
            "Redux Toolkit",
          ].map((tech) => (
            <li
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm border border-gray-200 dark:border-gray-700 text-gray-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
