import React from "react";
import { Carousel } from "../index";

export default {
  title: "Carousel"
};

const images = [
  "https://picsum.photos/id/866/600/400",
  "https://picsum.photos/id/237/600/400",
  "https://picsum.photos/id/238/600/400",
  "https://picsum.photos/id/239/600/400"
];

export const carousel = () => <Carousel images={images} />;
