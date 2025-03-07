import Welcome from "./components/welcome";
import Countdown from "./components/countdown";
import Gallery from "./components/gallery";
import CollaborateSection from "./components/CollaborateSection";
import Events from "./components/events";
import Footer from "./components/footer";
import Promo from "./components/promo";
export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-10 overflow-hidden">
        <Welcome />
        <Countdown />
        <Events/>
        <Promo/>
        <Gallery/>
        <CollaborateSection />
        <Footer />
      </div>
    </>
  );
}
