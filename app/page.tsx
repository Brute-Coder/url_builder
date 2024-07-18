"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Urlbuilder } from "@/components/urlbuilder";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className=" h-screen w-screen  flex justify-center items-center">
      <div className=" absolute  top-10 right-10 flex flex-col  items-center">
        <Switch onClick={toggleTheme} />
        <p className="dark:text-white text-black mt-1 text-sm">
          {theme === "light" ? "dark" : "light"}{" "}
        </p>
      </div>
      <Urlbuilder />
    </div>
  );
}
