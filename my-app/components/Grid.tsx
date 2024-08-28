"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { projectTile, writtenItem } from "@/app/data";
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full">
        {writtenItem.map((item) => (
          <BentoGridItem
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.desc}
            className={item.className}
            imgClassName={item.classNameImg}
          />
        ))}
        {projectTile.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.desc}
          ></BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
