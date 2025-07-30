import CTA from "@/modules/landing/components/CTA";
import Features from "@/modules/landing/components/Features";

const Page = () => {
  return (
    <>
      <section className="flex wrapper flex-col py-20 gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="h2">What should you choose Tebot.</h1>
          <p>Start for free. Upgrade as you go.</p>
        </div>
        <Features />
      </section>
      <CTA />
    </>
  );
};
export default Page;
