"use client";
import React, { useState } from "react";
import router, { useRouter } from "next/navigation";

function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
): (...args: T) => void {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: T) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

interface Props {
  programs: {
    code: number;
    name: string;
    isStage: number;
    cat: string;
    isGrp: number;
    publish: number;
    ctp: number;
  }[];
}

const Programs = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const router = useRouter();
  const delayedSearch = debounce((term: string) => {
    router.push(`/programs?search=${term}`);
  }, 1000);

  return (
    <div>
      <label className="flex gap-1 justify-center cursor-pointer w-full">
        <input
          type="text"
          className="rounded-full px-3 h-10
               border-yellow border-dashed border-2 w-full"
          placeholder="Search Candidates Here"
          onChange={(e) => delayedSearch(e.target.value)}
          required
        />
        <div className="bg-yellow rounded-full w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            className="m-auto mt-3 "
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </label>
      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {props.programs.map((c, index) => (
          // <div className='p-2 '>
          //     {c.name}
          // </div >
          <div
            className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start "
            key={index}
            onClick={()=> router.push(`/programs/${c.code}`)}
          >
            <h1 className="px-2 py-1 bg-brown inline rounded-lg text-white font-semibold">
              {c.code}
            </h1>
            <div className="line-clamp-2 border-2 h-16 p-3 my-2 border-primary flex cursor-pointer items-center justify-center rounded-xl border-dashed w-full">
              <p className="line-clamp-2 text-center">{c.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
