import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about" className="relative">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.3] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Bento Grid */}
      <BentoGrid className='relative z-10 ml-6'>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
