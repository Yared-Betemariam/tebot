import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoIosCheckmark } from "react-icons/io";

const PricingCards = () => {
  const packages = [
    {
      title: "Pro",
      price: 25,
      desc: "Great for startups needing a simple, professional website to establish their online presence.",
      features: [
        "Up to 3 custom pages",
        "Responsive, static design",
        "Basic website design and SEO",
        "Free subdomain & hosting",
      ],
    },
    {
      title: "Premium",
      price: 225,
      desc: "For growing businesses that want a custom website to enhance branding and user experience.",
      features: [
        "Unlimited custom pages",
        "Responsive, advanced design",
        "Branding & identity integration",
        "SEO optimization",
        "Free subdomain & hosting",
      ],
    },
    {
      title: "Custom",
      price: 2225,
      desc: "For large enterprises needing complex solutions, custom apps, and full support.",
      features: [
        "Custom design & development",
        "Web apps & integrations",
        "Ongoing support & maintenance",
        "Advanced security & scalability",
        "SEO & performance optimization",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6">
      {packages.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col gap-6 bg-white rounded-md relative min-w-[14rem] p-6 border-color"
          )}
        >
          <div className="flex flex-col gap-3">
            <h1
              className={cn(
                "text-4xl md:text-5xl text-primary tracking-tighter font-medium max-w-[8ch]"
              )}
            >
              {item.title}
            </h1>
            <p className="text-lg">{item.desc}</p>
          </div>
          <div className="flex flex-col">
            <span className="opacity-75 text-lg">Price starting at</span>
            <span className="text-5xl">${item.price.toLocaleString()}</span>
          </div>
          <ul className="flex flex-col text-base">
            {item.features.map((list, j) => (
              <li key={`${i}${j}`} className="list-inside">
                <IoIosCheckmark className="inline size-5 mr-2 text-primary" />{" "}
                {list}
              </li>
            ))}
          </ul>
          <Link href="#contact">
            <Button size="lg" className="rounded text-lg w-full">
              Get started
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default PricingCards;
