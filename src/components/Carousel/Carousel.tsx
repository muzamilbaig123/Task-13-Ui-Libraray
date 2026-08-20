import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

const Carousel = ({ items, className }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-xl", className)}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-full">
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-color)] border border-gray-200 dark:border-gray-700 text-[var(--text-color)] hover:border-indigo-400 transition-colors"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-color)] border border-gray-200 dark:border-gray-700 text-[var(--text-color)] hover:border-indigo-400 transition-colors"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-200",
              i === current ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-600",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Carousel };
