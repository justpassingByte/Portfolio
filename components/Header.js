import Image from "next/image";
import Link from "next/link";
import Social from '../components/Socials'
const Header = () => {
  return (<header className="absolute z-30 w-full items-center px-16 xl:px-0
  xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={'/'}>
          <div className="flex items-center text-4xl">
            Thang
            <span className="text-accent ml-2 flex items-center">
              Nguyen
              <Image src="/icons8-portfolium-50.png" width={50} height={48} alt="" className="ml-2" />
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
