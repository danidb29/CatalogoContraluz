import React from "react";
import { Carousel } from "./Carousel";
import images from "./images.json";
import { Valores } from "./Valores";

export const Inicio = () => {
  return (
    <div>
      <Carousel images={images.slides} />
      <Valores valor={"mision"} num={1} />
      <Valores valor={"vision"} num={2} />
      <Valores valor={"somos"} num={3} />
    </div>
  );
};
