// import { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

// const markers = [
//   { name: "Location 1", coordinates: [55.2708, 25.2048], city: "Dubai, UAE" },
//   { name: "Location 2", coordinates: [58.5562, 23.61], city: "Muscat, Oman" },
//   {
//     name: "Location 3",
//     coordinates: [46.6753, 24.7136],
//     city: "Riyadh, Saudi Arabia",
//   },
//   { name: "Location 4", coordinates: [72.8777, 19.076], city: "Mumbai, India" },
//   {
//     name: "Location 5",
//     coordinates: [70.8022, 22.3094],
//     city: "Gujarat, India",
//   },
//   {
//     name: "Location 6",
//     coordinates: [-74.006, 40.7128],
//     city: "New York, USA",
//   },
// ];

// const OurClients = () => {
//   const [hoveredMarker, setHoveredMarker] = useState(null);

//   const handleMouseEnter = (name) => {
//     setHoveredMarker(name);
//   };

//   const handleMouseLeave = () => {
//     setHoveredMarker(null);
//   };

//   return (
//     <div className="w-full h-auto flex items-center">
//       {/* Map Container */}
//       <div className="w-[80%] mt-6 ml-auto mr-auto lg:mt-0">
//         <ComposableMap projectionConfig={{ scale: 200 }}>
//           {/* Geographies: Renders the world map */}
//           <Geographies geography="/features.json">
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill="#EAEAEC"
//                   stroke="#D6D6DA"
//                 />
//               ))
//             }
//           </Geographies>

//           {/* Markers for locations */}
//           {markers.map(({ name, coordinates, city }) => (
//             <Marker
//               key={name}
//               coordinates={coordinates}
//               onMouseEnter={() => handleMouseEnter(name)}
//               onMouseLeave={handleMouseLeave}
//             >
//               {/* Marker Circle */}
//               <circle
//                 r={10}
//                 fill="#3e4d9d"
//                 stroke="#fff"
//                 strokeWidth={2}
//                 className="transition-transform duration-200 ease-in-out transform hover:scale-125"
//               />

//               {/* Comic Chat Bubble on Hover */}
//               {hoveredMarker === name && (
//                 <g className="pointer-events-none">
//                   {/* Bubble Rect */}
//                   <rect
//                     x={-50}
//                     y={-70}
//                     rx={10}
//                     ry={10}
//                     width={100}
//                     height={40}
//                     fill="white"
//                     stroke="#3e4d9d"
//                     strokeWidth={2}
//                     className="drop-shadow-lg"
//                   />
//                   {/* Bubble Tail (Triangle) */}
//                   <polygon
//                     points="-10,-30 10,-30 0,-15"
//                     fill="white"
//                     stroke="#3e4d9d"
//                     strokeWidth={2}
//                   />
//                   {/* City Name Text */}
//                   <text
//                     x={0}
//                     y={-45}
//                     textAnchor="middle"
//                     style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//                   >
//                     {city}
//                   </text>
//                 </g>
//               )}
//             </Marker>
//           ))}
//         </ComposableMap>
//       </div>
//     </div>
//   );
// };

// export default OurClients;

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const markers = [
  { name: "Location 1", coordinates: [55.2708, 25.2048], city: "Dubai, UAE" },
  { name: "Location 2", coordinates: [58.5562, 23.61], city: "Muscat, Oman" },
  {
    name: "Location 3",
    coordinates: [46.6753, 24.7136],
    city: "Riyadh, Saudi Arabia",
  },
  { name: "Location 4", coordinates: [72.8777, 19.076], city: "Mumbai, India" },
  {
    name: "Location 5",
    coordinates: [70.8022, 22.3094],
    city: "Gujarat, India",
  },
  {
    name: "Location 6",
    coordinates: [-74.006, 40.7128],
    city: "New York, USA",
  },
];

const OurClients = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMouseEnter = (name) => {
    setHoveredMarker(name);
  };

  const handleMouseLeave = () => {
    setHoveredMarker(null);
  };

  return (
    <div className="w-full h-auto flex items-center">
      {/* Map Container */}
      <div className="w-[80%] mt-6 ml-auto mr-auto lg:mt-0">
        <ComposableMap projectionConfig={{ scale: 200 }}>
          {/* Geographies: Renders the world map */}
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>

          {/* Markers for locations */}
          {markers.map(({ name, coordinates, city }) => (
            <Marker
              key={name}
              coordinates={coordinates}
              onMouseEnter={() => handleMouseEnter(name)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Animated Marker Circle */}
              <motion.circle
                r={10}
                fill="#3e4d9d"
                stroke="#fff"
                strokeWidth={2}
                className="transition-transform duration-200 ease-in-out"
                whileHover={{ scale: 1.5, rotate: 360 }} // Scale and rotate on hover
                transition={{ duration: 0.2, type: "spring" }}
              />

              {/* Comic Chat Bubble on Hover */}
              {hoveredMarker === name && (
                <motion.g
                  className="pointer-events-none"
                  initial={{ opacity: 0, y: -10 }} // Initial state
                  animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
                  exit={{ opacity: 0, y: -10 }} // Exit animation
                  transition={{ duration: 0.3 }} // Animation duration
                >
                  {/* Calculate bubble width based on city name length */}
                  {(() => {
                    const padding = 20; // Horizontal padding for the bubble
                    const textWidth = city.length * 8; // Approximate width of the text
                    const bubbleWidth = Math.max(textWidth + padding, 100); // Minimum width of 100
                    return (
                      <>
                        {/* Bubble Rect */}
                        <rect
                          x={-bubbleWidth / 2}
                          y={-70}
                          rx={10}
                          ry={10}
                          width={bubbleWidth}
                          height={40}
                          fill="white"
                          stroke="#3e4d9d"
                          strokeWidth={2}
                          className="drop-shadow-lg"
                        />
                        {/* Bubble Tail (Triangle) */}
                        <polygon
                          points="-10,-30 10,-30 0,-15"
                          fill="white"
                          stroke="#3e4d9d"
                          strokeWidth={2}
                        />
                        {/* City Name Text */}
                        <text
                          x={0}
                          y={-45}
                          textAnchor="middle"
                          style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                        >
                          {city}
                        </text>
                      </>
                    );
                  })()}
                </motion.g>
              )}
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default OurClients;
