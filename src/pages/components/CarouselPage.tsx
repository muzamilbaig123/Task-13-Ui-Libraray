import { Carousel } from "@/components/Carousel";
import ComponentDemo from "../ComponentsDemo";

const CarouselPage = () => {
  const items = [
    <div className="h-48 bg-indigo-500 rounded-xl flex items-center justify-center text-white text-xl font-semibold">
      Slide 1
    </div>,
    <div className="h-48 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl font-semibold">
      Slide 2
    </div>,
    <div className="h-48 bg-pink-500 rounded-xl flex items-center justify-center text-white text-xl font-semibold">
      Slide 3
    </div>,
  ];

  const code = `import { Carousel } from "dev-ease-ui";

<Carousel items={[
  <div>Slide 1</div>,
  <div>Slide 2</div>,
  <div>Slide 3</div>,
]} />`;

  return (
    <ComponentDemo code={code}>
      <Carousel items={items} className="max-w-lg" />
    </ComponentDemo>
  );
};

export default CarouselPage;
