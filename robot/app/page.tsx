// pages/index.js
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-clip">
      <div className="">
        <Hero />
      </div>
    </main>
  );
}
