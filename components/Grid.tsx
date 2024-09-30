import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({title, description, className, img, imgClassName, titleClassName, spareImg, id}, idx) => (
          <BentoGridItem
            key={idx}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            id={id}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
