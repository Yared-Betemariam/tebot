/* eslint-disable react/no-unescaped-entities */
"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { navLinks } from "./Header";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-zinc-950 text-white py-6 pt-24 relative shadow-md">
      <div className="rounded-b-[5rem] bg-white h-16 top-0 inset-x-0 absolute" />
      <section className="wrapper flex-col items-center justify-center md:flex-row flex py-12 md:items-start md:justify-between text-center md:text-start gap-12">
        <div className="flex flex-col items-center md:items-start gap-5">
          <Logo light />
          <span className=" max-w-[18rem]">
            Create, Test and Depoly Fully Functional Telegram Bots with ai in
            minutes.
          </span>
          <span className="text-sm opacity-75 font-normal">
            Copyright &copy;. {date.getFullYear()} All rights reserved.
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-end md:ml-auto">
          <p className="text-base font-semibold tracking-wider opacity-40 mb-3">
            LINKS
          </p>
          <div className="flex flex-col items-center md:items-end gap-3">
            <Link
              key={"Feedback"}
              target="_blank"
              href={"https://insigh.to/b/snicod"}
              className={"hover:opacity-80 font-medium text-base"}
            >
              Feedback
            </Link>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={"hover:opacity-80 font-medium text-base"}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-end">
          <p className="text-base font-semibold tracking-wider opacity-40 mb-1">
            LEGAL
          </p>
          {[
            { name: "Terms of services", href: "/terms" },
            { name: "Privacy policy", href: "/privacy-policy" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:opacity-80 font-medium text-base"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};
export default Footer;
