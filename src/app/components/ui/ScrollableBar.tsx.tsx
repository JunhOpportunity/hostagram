"use client";

import { SimpleUser } from "@/model/user";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "../Avatar";

export const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 576 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function ScrollableBar({
  following,
}: {
  following: SimpleUser[];
}) {
  return (
    <>
      <Carousel
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
        <ul className="w-full flex gap-2">
          {following.map((user) => (
            <li key={user.username}>
              <Link
                className="w-20 flex flex-col justify-center items-center"
                href={`/user/${user.username}`}
              >
                <Avatar image={user.image} size="big" highlight={true} />
                <p className="w-full text-sm text-center text-ellipsis ">
                  {user.username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Carousel>
    </>
  );
}
