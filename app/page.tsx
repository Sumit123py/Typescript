import GridImagesAnimation from "./components/GridImagesAnimation";
import HeroText from "./components/HeroText";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <main className="w-full">
        <Navbar />
        <HeroText />
        <GridImagesAnimation/>
      </main>
    </div>
  );
}
