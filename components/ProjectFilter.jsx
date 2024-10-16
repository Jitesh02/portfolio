"use Client"

import { projects } from "@/constants/project";
import { useEffect } from "react"

const ProjectFilter = ({ setFiltered, activeCategory, setActiveCategory }) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) => project.category?.includes(activeCategory));
    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <>
      <div className="flex gap-5 my-10">
        <button
          className={activeCategory == "all" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : 'text-white'}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        <button
          className={activeCategory == "fs" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : 'text-white'}
          onClick={() => setActiveCategory("fs")}
        >
          Full Stack
        </button>
        <button
          className={activeCategory == "react" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : 'text-white'}
          onClick={() => setActiveCategory("react")}
        >
          React
        </button>
        <button
          className={activeCategory == "vanilla" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : 'text-white'}
          onClick={() => setActiveCategory("vanilla")}
        >
          HTML/CSS/JS
        </button>
      </div>
    </>
  );
};

export default ProjectFilter