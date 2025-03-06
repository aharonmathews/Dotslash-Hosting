import Welcome from "./components/welcome";
import Countdown from "./components/countdown";
import Gallery from "./components/gallery";


export default function Home() {
  return (
    <>
    <div className="flex flex-col w-full gap-10">
      <Welcome/>
      <Countdown/>
      <Gallery/>
    </div>
    </>
  );
}
