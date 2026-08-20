import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const layoutVariants = cva("w-full mx-auto px-6", {
  variants: {
    variant: {
      default: "bg-[var(--bg-color)] text-[var(--text-color)]",
      card: "bg-[var(--card-bg)] text-[var(--text-color)] rounded-xl border border-gray-200 dark:border-gray-700",
      centered:
        "flex flex-col items-center text-center bg-[var(--bg-color)] text-[var(--text-color)]",
    },
    size: {
      sm: "max-w-xl py-10",
      md: "max-w-3xl py-16",
      lg: "max-w-5xl py-20",
      full: "max-w-full py-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface LayoutProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {}

const Layout = ({
  className,
  variant,
  size,
  children,
  ...props
}: LayoutProps) => {
  return (
    <div
      className={cn(layoutVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Layout, layoutVariants };
