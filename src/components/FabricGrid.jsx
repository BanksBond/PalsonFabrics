import { useState } from "react";
import { Blurhash } from "react-blurhash";

const FabricGrid = () => {
  const [loaded, setLoaded] = useState({
    fabric1: false,
    fabric2: false,
    fabric3: false,
  });

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Fabric 1 */}
      <div className="relative w-full h-full">
        {!loaded.fabric1 && (
          <Blurhash
            hash="LDEntu174owb5XIW}+tR-OWWERIW"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            resolutionX={32}
            resolutionY={32}
            width="100%"
            height="100%"
            punch={1}
          />
        )}
        <img
          src="assets/img/fabrics-background.jpg"
          alt="Fabric 1"
          className={`w-full h-full object-cover rounded-lg ${
            loaded.fabric1 ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          onLoad={() => setLoaded((prev) => ({ ...prev, fabric1: true }))}
        />
      </div>

      {/* Fabric 2 */}
      <div className="relative w-full h-full row-span-2">
        {!loaded.fabric2 && (
          <Blurhash
            hash="L3D5fi]B2D$6;+A@,Zwy|fwzJkA;"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            resolutionX={32}
            resolutionY={32}
            width="100%"
            height="100%"
            punch={1}
          />
        )}
        <img
          src="assets/img/close-up-smooth-red-fabric.jpg"
          alt="Fabric 2"
          className={`w-full h-full object-cover rounded-lg ${
            loaded.fabric2 ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          onLoad={() => setLoaded((prev) => ({ ...prev, fabric2: true }))}
        />
      </div>

      {/* Fabric 3 */}
      <div className="relative w-full h-full">
        {!loaded.fabric3 && (
          <Blurhash
            hash="L1C,AL[H01D%Tz+[t,x[4TMJITMe"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            resolutionX={32}
            resolutionY={32}
            width="100%"
            height="100%"
            punch={1}
          />
        )}
        <img
          src="assets/img/colorful-knitted-fabric-art-background.jpg"
          alt="Fabric 3"
          className={`w-full h-full object-cover rounded-lg  ${
            loaded.fabric3 ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          onLoad={() => setLoaded((prev) => ({ ...prev, fabric3: true }))}
        />
      </div>
    </div>
  );
};

export default FabricGrid;
