import Welcome from "./components/welcome";
import Countdown from "./components/countdown";
import Gallery from "./components/gallery";
import CollaborateSection from "./components/CollaborateSection";
import Events from "./components/events";
import Footer from "./components/footer";
import Tshirt from "./components/Tshirt";
import NotJustAFest from "./components/NotJustAFest";
import Navbar from "./components/navbar";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-10 overflow-hidden bg-black">
        
        <Navbar/>
        <Landing />
        <Welcome />
        <Countdown />
        <Events />
        <NotJustAFest />
        <Tshirt />
        <Gallery />
        <CollaborateSection />
        <Footer />
      </div>
    </>
  );
}
