import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import { LangContext } from "../App";

function Timeline() {
  const lang = React.useContext(LangContext);
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 pl-2 mx-auto max-w-screen-xl">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.title}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={lang === "EN" ? item.details : item.details_jp}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
