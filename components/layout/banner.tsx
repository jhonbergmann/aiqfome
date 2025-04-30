'use client'

import {useState, useEffect} from 'react'

import Image from '@/components/layout/image'

type Banner = {
  id: string
  src: string
  alt: string
}

type BannerProps = {
  banners: Banner[]
}

export default function Banner({banners}: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[130px] w-full">
        {banners.map((banner, index) => (
          <div key={banner.id} className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={banner.src} alt={banner.alt} className="h-[130px] w-full object-cover" width={0} height={0} sizes="100vw" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  )
}
