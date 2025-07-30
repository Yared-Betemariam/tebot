import Footer from "@/modules/landing/components/Footer";
import Header from "@/modules/landing/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 h-full relative">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
