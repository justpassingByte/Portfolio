import Link from "next/link";
import Social from '../components/Socials'
import { RxLayers } from 'react-icons/rx'

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={'/'}>
            <div className="flex items-center text-3xl font-bold tracking-tighter">
              Thang
              <span className="text-accent ml-1 font-light flex items-center gap-1">
                Nguyen
                <RxLayers className="text-[22px] ml-1 opacity-80" />
              </span>
            </div>
          </Link>
          <Social />
        </div>
      </div>
    </header>
  )
};

export default Header;
