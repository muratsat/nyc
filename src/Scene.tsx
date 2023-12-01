import { Canvas } from "@react-three/fiber";
import { MapControls, Sky } from "@react-three/drei";
import Ocean from "./Ocean";
import City from "./City";
import { DEG2RAD } from "three/src/math/MathUtils.js";

export default function Scene() {
  return (
    <Canvas camera={{ position: [100, 100, 0], far: 5000 }}>
      <fog attach="fog" args={["#678da8", 0.002, 1000]} />
      <directionalLight position={[1, 1, 1]} color="#ffffff" />
      <directionalLight
        position={[-1000, -10, -1000]}
        color="#fffff"
        intensity={10}
      />
      <ambientLight color="#444444" />
      <MapControls
        minDistance={100}
        maxDistance={600}
        maxPolarAngle={80 * DEG2RAD}
      />
      <Ocean />
      <City />
      <Sky
        distance={450000}
        sunPosition={[-1000, 10, -1000]}
        inclination={0}
        azimuth={0.25}
      />
    </Canvas>
  );
}
