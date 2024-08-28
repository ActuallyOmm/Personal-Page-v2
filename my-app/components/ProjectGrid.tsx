"use client";
import React from "react";
import { BentoGrid, ExtendedBentoGridItem } from "./ui/bento-grid";
import { projectItem } from "@/app/data";
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full">
        {projectItem.map((item) => (
          <ExtendedBentoGridItem
            key={item.id}
            title={item.Project_Name}
            description={item.Project_Description}
            skills={item.Skills}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
