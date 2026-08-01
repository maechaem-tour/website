"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  title: string;
};

export default function TourGallery({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        <Image
          src={selectedImage}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={cn(
              "relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:h-24 sm:w-32",
              selectedImage === image
                ? "border-accent shadow-md"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="128px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
