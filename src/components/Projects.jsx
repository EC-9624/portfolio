import React from "react";
import data from "../data/project";
import ProjectItem from "./ProjectItem";
import Title from "./Title";

function Projects() {
  return (
    <div className="flex flex-col max-w-full mx-auto">
      <Title>Projects</Title>
      <div className="flex  flex-col md:flex-row items-start justify-center max-w-full mx-auto">
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
    </div>
  );
}

export default Projects;
