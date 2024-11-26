import Link from "next/link";
import React from "react";
import { PiDotsNine } from "react-icons/pi";

const socialLinks = [
  {
    link: "www.linkedin.com/in/nazidul-islam-9a002127b",
    name: "LinkedIn",
  },
  {
    link: "https://github.com/nazidul",
    name: "GitHub",
  },
  {
    link: "https://www.facebook.com/profile.php?id=100093593830779",
    name: "Facebook",
  },
];

const quickLinks = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/contact",
    name: "Contact",
  },
  {
    link: "/skills",
    name: "Skills",
  },
  {
    link: "/about",
    name: "About",
  },
];

const Footer = () => {
  return (
    <footer
      className={`relative mt-10 overflow-hidden bg-neutral pt-10 text-neutral-content`}
    >
      <div className="container-center grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* <div></div> */}
        <div>
          <h3 className="mb-3 text-xl font-semibold">Contact Info</h3>
          <ul className="text-base opacity-80">
            <li>
              <a
                href="mailto:nazidul96@gmail.com"
                className="block py-1 transition-all duration-150 hover:text-primary"
              >
                nazidul96@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+880-1580592278"
                className="block py-1 transition-all duration-150 hover:text-primary"
              >
                +880-1580592278
              </a>
            </li>
            <li className="block cursor-pointer py-1 transition-all duration-150 hover:text-primary">
              Savar, Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">Social Media</h3>
          <ul className="text-base opacity-80">
            {socialLinks.map((link) => (
              <li key={link.link}>
                <a
                  href={link.link}
                  className="block py-1 transition-all duration-150 hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">Quick Links</h3>
          <ul className="text-base opacity-80">
            {quickLinks.map((link) => (
              <li key={link.name} className="">
                <Link
                  href={link.link}
                  className="block py-1 transition-all duration-150 hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gray-900 py-8 text-center lg:py-6">
        <p className="text-center">
          © {new Date().getFullYear()}, Developed by MD NAZIDUL ISLAM. All re-writes. open-source
          reserved.
        </p>
      </div>

      <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-primary bg-opacity-50 blur-xl"></div>

      <div className="dots-wrapper absolute -right-24 top-1/2 flex -translate-y-1/2 rotate-90 items-center space-x-[-7px] text-4xl text-primary text-opacity-60">
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          <PiDotsNine />
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          <PiDotsNine />
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          <PiDotsNine />
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          <PiDotsNine />
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          <PiDotsNine />
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          <PiDotsNine />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
