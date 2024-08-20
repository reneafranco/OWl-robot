// pages/index.js
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main
      lassName="relative bg-black-100 flex justify-center
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
    >
      <div className="max-w7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Hero />
      </div>
    </main>
  );
}
