import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill, RiFacebookCircleFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link target="_blank" href='https://facebook.com/Leoz666' className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/20 text-white/70 hover:text-blue-500 border border-white/10 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
        <RiFacebookCircleFill />
      </Link>
      <Link target="_blank" href='https://github.com/justPassingByte' className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 text-white/70 hover:text-white border border-white/10 hover:border-white/50 hover:-translate-y-1 transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link target="_blank" href='https://linkedin.com/' className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-sky-500/20 text-white/70 hover:text-sky-500 border border-white/10 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300">
        <RiLinkedinBoxFill />
      </Link>
      <Link target="_blank" href='https://discord.com/users/ngusitink' className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-[#5865F2]/20 text-white/70 hover:text-[#5865F2] border border-white/10 hover:border-[#5865F2]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative">
        <FaDiscord />
        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs bg-[#5865F2] text-white px-2 py-1 rounded-md pointer-events-none">
          ngusitink
        </div>
      </Link>
    </div>
  );
};

export default Socials;
