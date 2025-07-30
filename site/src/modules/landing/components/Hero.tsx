"use client";

import ChatInput from "@/modules/chat/components/ChatInput";
import { PartyPopper } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="flex-1 flex items-center relative">
        <section className="wrapper flex py-32 flex-col items-center gap-12">
          <div className="flex relative flex-col items-center gap-6 w-full text-center">
            <p className=" backdrop-blur-lg rounded-full flex items-center gap-2 px-3 pl-1.5 py-1.5 border">
              <span className="size-8 aspect-square rounded-full bg-primary/10 flex items-center justify-center">
                <PartyPopper className="text-primary size-5" />
              </span>
              Get 30 messages for free?{" "}
              <Link
                href={"/signin"}
                className="underline underline-offset-2 text-blue-700"
              >
                Signin
              </Link>
            </p>
            <h1
              className={
                "text-5xl md:text-6xl max-w-[16ch] font-semibold leading-[1.1] relative tracking-tighter"
              }
            >
              Anyone can <em>Build</em> Telegram{" "}
              <span className="text-primary font-bold brightness-75">Bots</span>{" "}
              now!
            </h1>
            <p className="max-w-[36ch]">
              Tebot allows you to create and depoly fully functional telegram
              bots with ai.
            </p>
            <ChatInput isHeroSection />
          </div>
        </section>
      </section>
    </>
  );
};
export default Hero;
