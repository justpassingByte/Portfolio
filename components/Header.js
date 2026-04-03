import Link from "next/link";
import Social from '../components/Socials'
import { RxLayers } from 'react-icons/rx'

import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={'/'}>
            <div className="flex items-center gap-3 group">
              <Image 
                src="/favicon.png" 
                width={36} 
                height={36} 
                alt="Logo" 
                className="rounded-md group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300" 
              />
              <div className="text-2xl font-bold tracking-widest uppercase" style={{fontFamily: 'Share Tech Mono'}}>
                Thang<span className="text-[#10B981] ml-2">Nguyen</span>
              </div>
            </div>
          </Link>
          <Social />
        </div>
      </div>
    </header>
  )
};

export default Header;
