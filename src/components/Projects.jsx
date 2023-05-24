import React from "react";
import data from "../data/project";
import ProjectItem from "./ProjectItem";
import Title from "./Title";
import { LangContext } from "../App";

function Projects() {
  const lang = React.useContext(LangContext);
  return (
    <div className="flex flex-col items-start justify-between max-w-max mx-auto">
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((p) => (
          <ProjectItem
            key={p.id}
            title={p.title}
            imgUrl={p.imgUrl}
            stack={p.stack}
            desc={lang === "EN" ? p.desc : p.desc_jp}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
