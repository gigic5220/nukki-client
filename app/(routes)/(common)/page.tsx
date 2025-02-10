'use client';

import NukkiFeedComponent from "@/app/_component/home/NukkiFeedComponent";
import NukkiFeed2Component from "@/app/_component/home/NukkiFeed2Component";

export default function HomePage() {


  return (
      <div
        className={'flex flex-col items-center scroll-x w-screen'}
      >
          <NukkiFeed2Component/>
          <NukkiFeedComponent/>
      </div>
  );
}