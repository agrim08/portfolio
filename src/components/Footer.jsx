import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="mt-20 border border-stone-50/10 p-5 w-full rounded-xl mx-2 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-center">
        <div className="text-4xl text-white hidden md:flex">AGRIM GUPTA</div>
      </div>
      <div className="flex items-center justify-center gap-8 mt-0 xsm:mt-8 md:mt-0">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
