"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ScrollBar } from "@/lib/constants";
import Link from "next/link";

export default function HomeScrollBar() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {ScrollBar.map((slide) => (
            <CarouselItem key={slide.description} className="flex items-center">
              <div>
                <img src={slide.image} alt="Image not shown" />
              </div>
              <div>
                <h1>{slide.heading}</h1>
                <h3>{slide.name}</h3>
                <p>{slide.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm flex justify-center">
        <div className="flex object-cover items-center">
          <img src="./previousarrow.png" alt="" className="-mr-3" />
          <img src="./homeline.png" alt="" className="mr-2" />
          <img src="./dot.png" alt="" />
        </div>
        <div className="p-2">slide {current}</div>
        <div className="flex items-center">
          <img src="./dot.png" alt="" />
          <img src="./homeline.png" alt="" className="ml-2" />
          <img src="./nextarrow.png" alt="" className="-ml-2" />
        </div>
      </div>
    </div>
  );
}
