import Image from "next/image";
const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image 
    src={'/avatarportfo.png'}
  
    width={737}
    height={670}
    alt =''
    className="translate-z-0 w-full h-full"
    />
  </div>;
};

export default Avatar;
