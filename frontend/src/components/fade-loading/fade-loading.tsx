"use client";

import React from "react";

interface FadeLoadingProps {
  isLoading: boolean;
}

const FadeLoading = ({ isLoading }: FadeLoadingProps) => {
  return (
    isLoading && (
      <div className="z-[9999] fixed w-screen h-screen bg-black/35 flex-center">
        <div className="loader"></div>
      </div>
    )
  );
};

export default FadeLoading;
