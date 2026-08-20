import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";

const ComponentLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
  ];

  return (
    <div className="flex min-h-screen text-[var(--text-color)] bg-[var(--bg-color)]">
      <aside
        className={`
          w-64 p-6 flex flex-col bg-[var(--bg-color)]
          border-r border-gray-200 dark:border-gray-700
          fixed md:static top-0 left-0 h-full z-20
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
        `}
      >
        <h2 className="text-md font-bold mb-6">Components</h2>
        <ul className="flex flex-col gap-2">
          {components.map((item) => (
            <li
              onClick={() => navigate(item.toLowerCase())}
              key={item}
              className={`cursor-pointer text-md hover:translate-x-1 transition-all duration-200 ease-in-out
                hover:text-[var(--text-color)]
                ${
                  location.pathname === `/components/${item.toLowerCase()}`
                    ? "text-[var(--text-color)] font-medium"
                    : "text-gray-400"
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 md:ml-0 ml-0 overflow-auto h-screen p-6">
        <button
          className="md:hidden mb-4 text-[var(--text-color)]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;
