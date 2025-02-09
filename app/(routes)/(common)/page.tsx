'use client';

import NukkiFeedComponent from "@/app/_component/home/NukkiFeedComponent";

export default function HomePage() {


  return (
      <div
        className={'flex flex-col items-center scroll-x'}
      >
          <NukkiFeedComponent/>
          <NukkiFeedComponent/>
          <NukkiFeedComponent/>
      </div>
  );
}