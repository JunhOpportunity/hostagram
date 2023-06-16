"use client";

import { User } from "@/model/user";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "./Avatar";

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function FollowingCarousel({
  following,
}: {
  following: User[];
}) {
  return (
    <>
      <Carousel
        className="py-[20px] px-[10px] border border-slate-300 rounded-md "
        arrows={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        centerMode={false}
        transitionDuration={1500}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {following.map((user) => (
          <div className="flex flex-col justify-center items-center" key={user.name}>
            <Avatar image={user.image} size="big" highlight={true} />
            <h3 className="text-bold">{user.name}</h3>
          </div>
        ))}
      </Carousel>
    </>
  );
}
