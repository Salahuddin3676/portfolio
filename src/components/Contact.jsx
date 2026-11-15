import { useState } from "react";
import { contactItems, socialLinks } from "../data";

const hrefFor = (item) => {
  if (item.title === "Mail") return `mailto:${item.info}`;
  if (item.title.startsWith("Contact")) return `tel:${item.info.replace(/\s/g, "")}`;
  return null;
};

const Contact = () => {
  const [copied, setCopied] = useState("");

  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      setCopied("");
    }
  };

  return (
    <section id="contact" className="border-t border-[#e7e7e2] py-16 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl font-medium leading-tight sm:text-6xl">
          Let's talk
        </h2>
        <p className="mt-4 text-base leading-7 text-[#5f5f5a]">
          Frontend-focused Full-Stack Developer based in Bangalore, India.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
        {contactItems.map((item) => {
          const href = hrefFor(item);
          const body = (
            <>
              <span className="text-xl text-[#1c1c1c]">{item.icon}</span>
              <span className="text-xs uppercase tracking-wide text-[#8a8a84]">
                {item.title}
              </span>
              <span className="text-sm leading-5">{item.info}</span>
            </>
          );

          return href ? (
            <a
              key={item.id}
              href={href}
              onClick={() => copy(item.info)}
              className="flex flex-col items-center gap-2 rounded-3xl border border-[#e7e7e2] bg-white px-4 py-6 text-center"
            >
              {body}
              {copied === item.info && (
                <span className="text-xs text-[#6d6d68]">Copied</span>
              )}
            </a>
          ) : (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 rounded-3xl border border-[#e7e7e2] bg-white px-4 py-6 text-center"
            >
              {body}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={link.title}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d9d4] bg-white text-lg"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
