import Image from "next/image";

export default function HeroText() {
  return (
    <div className="text-black w-full h-[600px]  grid place-items-center">
      <div className="flex flex-col items-center w-[50%] gap-6">
        <div className="bg-black text-white flex items-center gap-2 p-2 rounded-xl">
          <Image
            src="/triangle.svg"
            width={30}
            height={30}
            alt="triangle"
            className="bg-gray-500 p-1 rounded-sm"
          />
          <p>Best Framer Component Library Plugin</p>
        </div>
        <h1 className="text-6xl font-semibold text-center text-pretty">
          The Ultimate Framer UI kit and Design System
        </h1>
        <p className="text-gray-400 text-center text-pretty">
          Frameblox is the ultimate Framer UI kit, design system, and component
          library. Build and launch your website faster, save countless hours,
          and elevate your website.
        </p>
        <p className="text-gray-500 text-sm text-center text-pretty">300+ components, 700+ sections, 50+ pages, and more coming.</p>
        <div className="flex items-center gap-4">
          <button type="button" className="flex items-center gap-2 border-1 cursor-pointer border-gray-200 px-6 py-3 rounded-xl">
            <Image
              src="/9JllXi9JWw6MHtZORnbtXZhCpE.png"
              width={20}
              height={20}
              alt="triangle"
            />
            Component Library
          </button>
          <button type="button" className="gap-2 border-1 border-blue-200 hover:bg-blue-500 hover:shadow-xl cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl">Get all access</button>
        </div>
      </div>
    </div>
  );
}
