import { logos } from '@/data/home.data'
import { Marquee } from '../ui/marquee'
import Image from 'next/image'

function MarqueeSection() {
  return (
    <section className="py-8 sm:py-10 md:py-12 h-fit bg-background landing transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6 md:mb-8 text-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-primary uppercase tracking-wide">
          Trusted by 20+ institutions and brands
        </p>
      </div>
      {/* Marquee  */}
      <Marquee className="[--duration:25s] [--gap:1.5rem] sm:[--gap:2rem] md:[--gap:3rem]" pauseOnHover>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center px-2 sm:px-4 md:px-6"
          >
            <Image
              src={logo.url}
              alt={logo.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain scale-125 md:scale-200"
              width={80}
              height={80}
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default MarqueeSection