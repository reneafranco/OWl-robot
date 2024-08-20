// pages/index.js
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main>
      <h1>Mi Proyecto Spline en Next.js</h1>
      <Spline
        scene="https://prod.spline.design/iVFfKSjg8whvJclY/scene.splinecode"
        style={{ width: "100%", height: "100vh" }}
      />
    </main>
  );
}
