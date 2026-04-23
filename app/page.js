import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Slogan from "./_components/Slogan";
import Distribution from "./_components/Distribution";
import Advertising from "./_components/Advertising";
import Footer from "./_components/Footer";
import BackToTop from "./_components/BackToTop";

export default function Home() {
  return (
    <>
      <BackToTop />
      <Header />
      <Banner />
      <Slogan />
      <Distribution />
      <Advertising />
      <Footer />
    </>
  );
}
