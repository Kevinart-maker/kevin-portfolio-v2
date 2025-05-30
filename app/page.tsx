import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Awards from "./components/layout/Awards";
import Works from "./components/layout/Works";

export default function Home() {
  return (
    <main className="bg-[var(--background)] px-1 md:px-[2rem]">
      <div className="w-full h-[10px] bg-[var(--background)]"/>
      <Navbar />

      <div className='flex flex-col'>
        <Header />

        {/* <div className="flex flex-col gap-4">
          <Awards />
          <Works />
        </div> */}
      </div>


    </main>
  );
}