import { useNavigate } from "react-router";
import { Button } from "@/components/Button";
import { Zap, Palette, Code2, Blocks } from "lucide-react";

const features = [
  {
    icon: <Zap size={20} />,
    title: "GSAP Animations",
    desc: "Smooth entrance and hover animations out of the box.",
  },
  {
    icon: <Palette size={20} />,
    title: "Dark Mode Ready",
    desc: "Every component respects your theme automatically.",
  },
  {
    icon: <Code2 size={20} />,
    title: "TypeScript First",
    desc: "Fully typed APIs with CVA variant support.",
  },
  {
    icon: <Blocks size={20} />,
    title: "Composable",
    desc: "Built with Radix Slot  works with any element.",
  },
];

const stats = [
  { label: "Components", value: "8+" },
  { label: "Variants", value: "30+" },
  { label: "Animations", value: "10+" },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-20">
      {/* Hero */}
      <section className="flex flex-col gap-6 items-start">
        <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">
          UI Component Library
        </span>
        <h1 className="text-5xl font-bold leading-tight text-[var(--text-color)]">
          Build faster with <br />
          <span className="text-indigo-500">EaseUI</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          A modern React + TypeScript component library with GSAP animations,
          dark mode, and Tailwind CSS ready to drop into any project.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/components/button")}
        >
          Get Started
        </Button>
      </section>

      {/* Stats */}
      <section className="flex gap-12">
        {stats.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-indigo-500">{value}</span>
            <span className="text-sm text-gray-400">{label}</span>
          </div>
        ))}
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 
                       bg-[var(--bg-color)] flex flex-col gap-3
                       hover:border-indigo-400 transition-colors duration-200"
          >
            <span className="text-indigo-500">{icon}</span>
            <h3 className="font-semibold text-[var(--text-color)]">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
