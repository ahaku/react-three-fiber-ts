import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => (meshRef.current.rotation.y += delta));

  return (
    <>
      <color args={["#3178c6"]} attach="background" />
      <OrbitControls />

      <mesh ref={meshRef} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default App;
