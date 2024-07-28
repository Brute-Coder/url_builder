"use client";
import Hero from "@/components/hero";
import { use, useEffect, useState } from "react";


export default function Home() {
  const [counter, setCounter] = useState();

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/urlBuilder/countBuild/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCounter(data.count);
      });
  }, []);

  return (
    <div className=" h-screen w-screen  flex justify-center items-center">
      <Hero />
      {counter != 0 && (
        <div className=" absolute   bottom-10  hidden md:block">
          <p className="dark:text-white text-black mt-1 text-base items-center flex justify-center">
            Total URLs Built  <ArrowRightIcon />
            <span className="text-2xl text-cyan-600 mr-4">{counter}</span>
          </p>
        </div>
      )}
    </div>
  );
}


function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}