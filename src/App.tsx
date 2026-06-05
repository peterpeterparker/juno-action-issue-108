import { initSatellite } from "@junobuild/core";
import { useEffect } from "react";
import { functions } from "./declarations/satellite/satellite.api.ts";

function App() {
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true,
        },
      }))();
  }, []);

  const test = async () => {
    const {id} = await functions.helloWorld();
    console.log("---->", id.toText());
  }

  return (
    <div className="relative isolate min-h-[100dvh]">
      <main className="mx-auto max-w-(--breakpoint-2xl) px-8 py-16 md:px-24 [@media(min-height:800px)]:min-h-[calc(100dvh-128px)]">
        <h1 className="text-5xl font-extrabold md:pt-16 md:text-6xl dark:text-white">
          Welcome to Juno
        </h1>

        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-8">
          <button className="dark:bg-white px-8 py-2 w-fit" onClick={test}>Test</button>
        </div>
      </main>
    </div>
  );
}

export default App;
