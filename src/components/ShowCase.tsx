"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HomeHeader } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function ShowCase() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <Carousel
        plugins={[plugin.current]}
        className="shrink-0 flex flex-col items-center"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="object-cover min-w-screen h-148 grow-0 flex items-center shrink-0">
          {HomeHeader.map((slide) => (
            <CarouselItem key={slide.image} className="">
              {pathname === "/" ? (
                <img src={slide.image} alt="slide image" />
              ) : null}
            </CarouselItem>
          ))}
        </CarouselContent>

        <div
          className="bg-white w-35 h-15 flex flex-col items-center rounded-t-full
         relative -mt-15 overflow-hidden grow-0"
        >
          <h1 className="relative -mb-6 p-2">Scroll Down</h1>

          <img
            src="./downArrow.gif"
            alt="down arrow"
            className="w-20 h-14 -mb-3"
          />
        </div>
      </Carousel>
    );
  }
  return null;
}
