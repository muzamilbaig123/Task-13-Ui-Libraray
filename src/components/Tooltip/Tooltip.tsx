import { useState } from "react";
import { cn } from "@/libs/utils";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  children: React.ReactNode;
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-gray-800 dark:border-t-gray-200 border-x-transparent border-b-transparent",
  bottom:
    "bottom-full left-1/2 -translate-x-1/2 border-b-gray-800 dark:border-b-gray-200 border-x-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-gray-800 dark:border-l-gray-200 border-y-transparent border-r-transparent",
  right:
    "right-full top-1/2 -translate-y-1/2 border-r-gray-800 dark:border-r-gray-200 border-y-transparent border-l-transparent",
};

const Tooltip = ({
  content,
  position = "top",
  children,
  className,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={cn(
            "absolute z-50 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap",
            "bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900",
            "animate-fadeIn",
            positionClasses[position],
            className,
          )}
        >
          {content}
          <span className={cn("absolute border-4", arrowClasses[position])} />
        </div>
      )}
    </div>
  );
};

export { Tooltip };
