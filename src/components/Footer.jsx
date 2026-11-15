import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="border-t border-[#e7e7e2]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium">Ghazi Salahuddin</p>
          <p className="mt-1 text-sm text-[#6d6d68]">
            Frontend-focused Full-Stack Developer
          </p>
        </div>
        <div className="flex items-center gap-4 text-lg">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.title}
              className="text-[#1c1c1c]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
