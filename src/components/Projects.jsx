import React from "react";
import data from "../data/project";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((p) => (
          <ProjectItem
            key={p.id}
            title={p.title}
            imgUrl={p.imgUrl}
            stack={p.stack}
            desc={p.desc}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
