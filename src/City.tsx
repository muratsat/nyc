const MIN_POSITION = -200;
const MAX_POSITION = 200;
const AMPLITUDE = Math.abs(MAX_POSITION - MIN_POSITION);
const MAX_BUILDINGS = 30;

const buildings: JSX.Element[] = [];
for (let i = 0; i < MAX_BUILDINGS; i++) {
  const item = (
    <mesh
      key={i}
      position={[
        Math.random() * AMPLITUDE + MIN_POSITION,
        0,
        Math.random() * AMPLITUDE + MIN_POSITION,
      ]}
      scale={[20, Math.random() * 300 + 100, 20]}
    >
      <boxGeometry
        attach="geometry"
        args={[1, 1, 1]} /*ref={ref => ref && ref.translate(0, 0.5, 0)}*/
      />
      <meshPhongMaterial attach="material" color="gray" flatShading={true} />
    </mesh>
  );
  buildings.push(item);
}

export default function City() {
  return (
    <>
      <mesh position={[0, -950, 0]}>
        <sphereGeometry args={[1000, 100, 100]} />
        <meshPhongMaterial attach="material" color="gray" flatShading={true} />
      </mesh>
      {buildings}
    </>
  );
}
