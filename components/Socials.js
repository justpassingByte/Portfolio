import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill, RiFacebookCircleFill } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link target="_blank" href='https://facebook.com/Leoz666' className="hover:text-accent transition-all duration-300">
        <RiFacebookCircleFill />
      </Link>
      <Link target="_blank" href='https://github.com/justPassingByte' className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link target="_blank" href='https://linkedin.com/in/yourprofile' className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
