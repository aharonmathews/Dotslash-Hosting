import Welcome from "./components/welcome";
import Countdown from "./components/countdown";
export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full">\
      <Welcome/>
      <Countdown/>
      You can start working here
    </div>
    </>
  );
}
