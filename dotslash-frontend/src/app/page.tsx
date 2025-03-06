import Welcome from "./components/welcome";
import Countdown from "./components/countdown";
import Gallery from "./components/gallery";
import CollaborateSection from "./components/CollaborateSection";
import Events from "./components/events";
export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-10">
        <Welcome />
        <Countdown />
        <Events/>
        <Gallery/>
        <CollaborateSection />
      </div>
    </>
  );
}
