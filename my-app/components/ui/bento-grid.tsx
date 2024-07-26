import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import { swiperItem } from "@/app/data";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-auto grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | string[] | React.ReactNode;
  img?: string;
  imgClassName?: string;
}) => {
  // Utility function to convert \n to <br />
  const convertNewlinesToBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const convertArrayToButton = (items: string[]) => {
    return items.map((item, index) => (
      <ButtonsCard
        key={index}
        className="h-6 w-auto animate-none items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        {item}
      </ButtonsCard>
    ));
  };

  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between",
        className
      )}
    >
      {img && (
        <div
          className={cn(
            "relative flex flex-col justify-center items-center",
            imgClassName
          )}
        >
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="Bento item image"
            className={cn(" flex justify-center items-center rounded-xl")}
          />
        </div>
      )}
      {/* For animation {group-hover/bento:translate-x-2 transition duration-200} */}
      <div className="">
        {title && title !== "" && (
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
        )}
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 ">
          {typeof description === "string" ? (
            convertNewlinesToBreaks(description)
          ) : Array.isArray(description) ? (
            <div className="flex flex-wrap gap-2">
              {convertArrayToButton(description)}
            </div>
          ) : description === null ? (
            <div>
              <Swiper
                key={1}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-lg"
              >
                {swiperItem.map((project) => (
                  <SwiperSlide
                    key={project.id}
                    className="flex flex-col items-center justify-center w-full h-full dark:bg-black p-4"
                  >
                    <Image
                      className="justify-center items-center sm:w-full sm:h-32 rounded-xl "
                      src="/back.jpg"
                      alt=""
                      width="1024"
                      height="1024"
                    />
                    <h2 className=" underline font-bold break-words">
                      {project.Project_Name}
                    </h2>
                    <p className="">{project.Project_Description}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
