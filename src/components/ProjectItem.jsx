import React from "react";

function ProjectItem(props) {
  const { title, imgUrl, stack, link, desc } = props;

  return (
    <div className="border border-stone-900 dark:border-white rounded-sm overflow-hidden max-h-fit opacity-100 transition duration-300 ease-in-out hover:opacity-80">
      <a href={link} target="_blank">
        <img
          src={imgUrl}
          alt="Project"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>

      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>

        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border border-stone-900 rounded-md dark:border-white"
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
        <p className="max-w-xs max-h-max mt-4 text-md text-start">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
