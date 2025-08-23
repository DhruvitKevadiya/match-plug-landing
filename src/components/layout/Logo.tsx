import React from "react";
import { twMerge } from "tailwind-merge";

const Logo = ({ className }: { className?: string }) => {
  return (
    <img src="/logo.png" alt="logo" className={twMerge(" w-11", className)} />
  );
};

export default Logo;
