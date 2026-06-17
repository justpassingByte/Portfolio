import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`) || pathname.startsWith(`${path}[`);
  };

  return (
    <nav className="fixed bottom-0 z-50 mt:auto flex h-max w-full items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      <div className="px4 flex h-[80px] w-full items-center justify-between bg-white/10 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:gap-y-10 xl:rounded-full xl:px-0 xl:text-xl">
        {navData.map((link) => (
          <Link
            className={`${isActive(link.path) ? 'text-accent' : ''} group relative flex items-center transition-all duration-300 hover:text-accent`}
            key={link.path}
            href={link.path}
          >
            <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
              <div className="relative flex items-center rounded-[3px] bg-white p-[6px] text-primary">
                <div className="text-[12px] font-semibold capitalize leading-none">{link.name}</div>
                <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white" />
              </div>
            </div>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
