import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";
import ComponentDemo from "../ComponentsDemo";

const TooltipPage = () => {
  const code = `import { Tooltip } from "dev-ease-ui";

<Tooltip content="Hello there!" position="top">
  <Button>Hover me</Button>
</Tooltip>`;

  return (
    <ComponentDemo code={code}>
      <div className="flex flex-wrap gap-6 items-center justify-center p-10">
        {(["top", "bottom", "left", "right"] as const).map((pos) => (
          <Tooltip key={pos} content={`Position: ${pos}`} position={pos}>
            <Button variant="outline" size="sm">
              {pos}
            </Button>
          </Tooltip>
        ))}
      </div>
    </ComponentDemo>
  );
};

export default TooltipPage;
