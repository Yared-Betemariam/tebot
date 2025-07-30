import CTA from "@/modules/landing/components/CTA";
import FAQ from "@/modules/landing/components/FAQ";
import PricingCards from "@/modules/landing/components/PricingCards";

const Page = () => {
  return (
    <>
      <section className="flex flex-col gap-4 wrapper py-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="h2">Pricing</h1>
          <p>Start for free. Upgrade as you go.</p>
        </div>
        <PricingCards />
      </section>
      <FAQ />
      <CTA />
    </>
  );
};
export default Page;
