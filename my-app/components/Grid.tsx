"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { projectItem, projectTile, writtenItem } from "@/app/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
          >
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
