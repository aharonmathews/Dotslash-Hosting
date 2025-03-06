import Welcome from "./components/welcome";
import Countdown from "./components/countdown";
export default function Home() {
  return (
    <>
    <div className="flex flex-col w-full gap-10">
      <Welcome/>
      <Countdown/>
    </div>
    </>
  );
}
