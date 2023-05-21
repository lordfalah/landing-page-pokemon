import React from "react";
import ImgLoad from "../../icon/ImgLoad";
import Skeleton from "./Skeleton";
import { useInView } from "react-intersection-observer";

const SkeletonCard = ({ pok, className }) => {
  const addClass = className ? className : "";
  const {
    ref: card,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    rootMargin: "300px",
    triggerOnce: false,
  });

  return (
    <div
      ref={card}
      className={`transition ease-in-out duration-500 ${
        inView
          ? "translate-y-36 sm:translate-y-52 !opacity-100"
          : "translate-y-full !opacity-0 !delay-[0ms]"
      } bg-white rounded-md p-8 shadow-lg relative ${addClass} sticky top-0`}
    >
      <ImgLoad
        className={`absolute left-0 right-0 -top-16 mx-auto w-32 h-32 animate-pulse transition ease-in-out duration-500 delay-500 ${
          inView ? "translate-y-0" : "-translate-y-[40%]"
        }`}
      />

      <div className="flex flex-col gap-6 items-center mt-24 sm:mt-20 md:mt-28 lg:mt-24 xl:mt-20 2xl:mt-28">
        <Skeleton className="h-3">{pok?.name}</Skeleton>
        <Skeleton className="w-4/5 h-3"></Skeleton>
        <div className="flex justify-center items-center gap-8 w-full">
          <Skeleton className="w-1/4 h-3"></Skeleton>
          <Skeleton className="w-1/4 h-3"></Skeleton>
        </div>
      </div>

      <div className="w-full my-10">
        <Skeleton className="mx-auto w-11/12 py-6"></Skeleton>
      </div>

      <div className="w-full space-y-4">
        <div className="flex w-full items-start">
          <div className="flex w-full flex-col gap-2.5">
            <Skeleton className="h-2.5 w-2/5"></Skeleton>
            <Skeleton className="h-2.5 w-1/2"></Skeleton>
          </div>

          <div className="flex w-full flex-col gap-2.5 items-center">
            <Skeleton className="h-2.5 w-2/5"></Skeleton>
            <Skeleton className="h-2.5 w-1/2"></Skeleton>
          </div>

          <div className="flex w-full flex-col gap-2.5 items-end">
            <Skeleton className="h-2.5 w-2/5"></Skeleton>
            <Skeleton className="h-2.5 w-1/2"></Skeleton>
          </div>
        </div>
        <Skeleton className="w-full h-1.5 my-auto"></Skeleton>
        <div className="flex w-full">
          <div className="flex w-full flex-col items-center gap-2.5">
            <Skeleton className="h-2.5 w-2/5"></Skeleton>
            <Skeleton className="h-2.5 w-1/2"></Skeleton>
          </div>

          <div className="flex w-full flex-col items-center gap-2.5">
            <Skeleton className="h-2.5 w-2/5"></Skeleton>
            <Skeleton className="h-2.5 w-1/2"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
