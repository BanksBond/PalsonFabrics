import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Data for map markers (locations)
const markers = [
  {
    name: "Location 1",
    coordinates: [-122.4194, 37.7749],
    city: "San Francisco, USA",
  },
  { name: "Location 2", coordinates: [-0.1276, 51.5074], city: "London, UK" },
  { name: "Location 3", coordinates: [2.3522, 48.8566], city: "Paris, France" },
  {
    name: "Location 4",
    coordinates: [144.9631, -37.8136],
    city: "Melbourne, AUS",
  },
];

const WorldMap = () => {
  return (
    <div className="w-full h-auto">
      <h2 className="text-4xl font-bold mb-4">What People Say About Us?</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* <div className="lg:w-1/2">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
            Contact Us
          </button>
        </div> */}

        {/* Map Container */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
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
              <Marker key={name} coordinates={coordinates}>
                <circle r={10} fill="#3e4d9d" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={-20}
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {city}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
