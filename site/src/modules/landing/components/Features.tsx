"use client";

import { cn } from "@/lib/utils";
import { Database, Globe, Link, Star } from "lucide-react";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: Star,
      title: "Create with words",
      desc: "Leverage the power of AI to enhance your trading decisions. Get insights, predictions",
    },
    {
      title: "Built-in Database",
      icon: Database,
      desc: "Leverage the power of AI to enhance your trading decisions. Get insights, predictions",
    },
    {
      title: "Automatic Deployment",
      icon: Globe,
      desc: "Leverage the power of AI to enhance your trading decisions. Get insights, predictions",
    },
    {
      title: "Integrations",
      icon: Link,
      desc: "Leverage the power of AI to enhance your trading decisions. Get insights, predictions",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
      {features.map((item) => (
        <div
          key={item.title}
          className={cn(
            "flex flex-col gap-6 bg-gradient-to-tl from-primary/15 backdrop-blur-lg rounded-xl p-4 to-transparent"
          )}
        >
          {/* <div className="h-full w-full max-w-[50%] rounded-2xl bg-gradient-to-br from-primary/50 to-secondary/50 backdrop-blur-3xl p-10 flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className={cn("object-cover")}
            />
          </div> */}
          {/* <div className="flex flex-col justify-center gap-4 flex-1 p-8 px-10"> */}
          <item.icon className="size-12 text-primary" />
          <p className={"h3"}>{item.title}</p>
          <p className="body">{item.desc}</p>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};
export default Features;
