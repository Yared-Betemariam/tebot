import Footer from "@/modules/landing/components/Footer";
import Header from "@/modules/landing/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 h-full relative">
        <span className="absolute size-[16rem] bg-radial from-primary/30 to-cyan-600/10 rounded- blur-[80px] top-[20rem] -translate-y-1/2 left-1/3 -translate-x-1/2" />
        <span className="absolute size-[16rem] bg-radial from-secondary/30 to-orange-600/10 rounded-full blur-[80px] bottom-[20rem] -translate-y-1/2 right-1/4 -translate-x-1/2" />
        <span className="absolute size-[12rem] bg-radial from-emerald-600/30 to-violet-600/10 rounded blur-[80px] bottom-[20rem] translate-y-1/2 right-2/5 translate-x-1/2" />
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
