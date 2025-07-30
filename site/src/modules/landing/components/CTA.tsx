import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="wrapper">
      <section className="flex flex-col py-16 px-6 gap-10">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h2 className="h2 text-center">Ready to have your own bot</h2>
          <p className="body max-w-4xl text-center">
            Get started using Tebot to make telegram bots for free, today.
          </p>
          <Button size={"lg"} className="border-2 text-lg h-14 px-8">
            Get Started for Free <ArrowRight className="size-5 inline ml-2" />
          </Button>
        </div>
      </section>
    </section>
  );
};
export default CTA;
