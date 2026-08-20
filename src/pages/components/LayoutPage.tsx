import { Layout } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";

const LayoutPage = () => {
  const code = `import { Layout } from "dev-ease-ui";

<Layout variant="card" size="md">
  Your content here
</Layout>`;

  return (
    <ComponentDemo code={code}>
      <div className="flex flex-col gap-6">
        {(["default", "card", "centered"] as const).map((variant) => (
          <Layout key={variant} variant={variant} size="sm">
            <p className="text-sm text-gray-400">variant="{variant}"</p>
            <p className="text-[var(--text-color)]">
              Layout content goes here.
            </p>
          </Layout>
        ))}
      </div>
    </ComponentDemo>
  );
};

export default LayoutPage;
