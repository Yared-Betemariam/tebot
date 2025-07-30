"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import MenuSheet from "./MenuSheet";
import { useUser } from "@/modules/auth/hooks";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const navLinks = [
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Support",
    href: "/support",
  },
  {
    name: "Docs",
    href: "/docs",
  },
];

const Header = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const [currentHref, setCurrentHref] = useState("");

  useEffect(() => {
    // Only run on client
    setCurrentHref(window.location.href);
  }, [pathname]);

  return (
    <header className="z-50 w-full h-[5rem]">
      <nav className="wrapper flex items-center h-full gap-12">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={cn(
                  "opacity-80 font-normal transition-all hidden md:block duration-300 cursor-pointer",
                  {
                    "text-primary":
                      currentHref.includes(item.href) || pathname === item.href,
                  }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center ml-auto gap-6">
          <div className="relative ml-auto md:hidden h-10 w-10 rounded-xl">
            <MenuSheet />
          </div>

          {/* Auth related */}
          {!user ? (
            <Link href="/signin">
              <Button size={"lg"} className="text-base!">
                Signin
              </Button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <Button variant={"outline"} size={"lg"} className="text-base!">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
