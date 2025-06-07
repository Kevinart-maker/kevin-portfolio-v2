import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import ProjectSlider from "./components/layout/ProjectSlider";
import About from "./components/layout/About";
import Works from "./components/layout/Works";

export default function Home() {
  return (
    <main className="bg-[var(--background)] px-1 md:px-[2rem]">
      <div className="w-full h-[10px] bg-[var(--background)]"/>
      <Navbar />

      <div className='flex flex-col'>
        <Header />
        <ProjectSlider />

        <About />

        {/* <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text w-fit p-2 rounded-[1rem] bg-[#868686]">
              Kendrick Lamar - GNX
            </p>
          }
        /> */}
        
        {/* <div className="flex flex-col gap-4">
          <Awards />
          <Works />
        </div> */}
        <Works />
      </div>


    </main>
  );
}