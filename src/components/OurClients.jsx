import styled from "styled-components";
import DottedMap from "dotted-map/without-countries";
import mapJson from "../mapJson.json";
import { useEffect, useState } from "react";

const pinsMeta = [
  {
    data: {
      name: "Mumbai",
      country: "India",
    },
    lat: 19.076,
    lng: 72.8777,
    svgOptions: {
      color: "#3A589B",
      radius: 0.6,
    },
  },
  {
    data: {
      name: "Ahmedabad",
      country: "India",
    },
    lat: 22.3094,
    lng: 72.1362,
    svgOptions: {
      color: "#3A599D",
      radius: 0.6,
    },
  },
  {
    data: {
      name: "Dubai",
      country: "UAE",
    },
    lat: 25.2048,
    lng: 55.2708,
    svgOptions: {
      color: "#38589C",
      radius: 0.6,
    },
  },
  {
    data: {
      name: "Muscat",
      country: "Oman",
    },
    lat: 23.588,
    lng: 58.3829,
    svgOptions: {
      color: "#3C5B9E",
      radius: 0.6,
    },
  },
  {
    data: {
      name: "Riyadh",
      country: "Saudi",
    },
    lat: 24.7136,
    lng: 46.6753,
    svgOptions: {
      color: "#3A579C",
      radius: 0.6,
    },
  },
  {
    data: {
      name: "New York",
      country: "USA",
    },
    lat: 40.7128,
    lng: -74.006,
    svgOptions: {
      color: "#3B5A9E",
      radius: 0.6,
    },
  },
  {
    data: {
      name: "Delhi",
      country: "India",
    },
    lat: 28.6139,
    lng: 77.209,
    svgOptions: {
      color: "#3a599c",
      radius: 0.6,
    },
  },
];

const colorIdentifier = [
  "#3A589B",
  "#3A599D",
  "#38589C",
  "#3C5B9E",
  "#3A579C",
  "#3B5A9E",
  "#3A599C",
];

export default function OurClients() {
  const map = new DottedMap({ map: mapJson });
  pinsMeta.forEach((p) => map.addPin(p));

  const rawSvg = map.getSVG({
    radius: 0.22,
    color: "#aaaaaaff",
    shape: "circle",
    backgroundColor: "#f3f4f6",
  });

  let idx = -1;
  const svgWithAttrs = rawSvg.replace(/<circle([^>]*)\/>/g, (_, attrs) => {
    idx++;
    const fillMatch = attrs.match(/fill="([^"]*)"/);
    const fillValue = fillMatch ? fillMatch[1] : "";

    if (colorIdentifier.includes(fillValue.toUpperCase())) {
      const pinIndex = colorIdentifier.findIndex(
        (val) => val === fillValue.toUpperCase()
      );
      const { name = "", country = "" } = pinsMeta[pinIndex]?.data || {};
      return `
        <circle${attrs}
          class="pin"
          data-name="${name}"
          data-country="${country}">
        </circle>
      `;
    }
    return `<circle${attrs}></circle>`;
  });

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    country: "",
  });

  useEffect(() => {
    const container = document.querySelector(".svg");
    if (!container) return;

    const handleMouseOver = (e) => {
      const name = e.target.getAttribute("data-name");
      const country = e.target.getAttribute("data-country");

      if (name && country) {
        setTooltip({
          visible: true,
          x: e.pageX + 10,
          y: e.pageY - 10,
          name,
          country,
        });
      }
    };

    const handleMouseMove = (e) => {
      setTooltip((prev) => ({
        ...prev,
        x: e.pageX + 10,
        y: e.pageY - 10,
      }));
    };

    const handleMouseOut = () => {
      setTooltip((prev) => ({ ...prev, visible: false }));
    };

    container.querySelectorAll(".pin").forEach((pin) => {
      pin.addEventListener("mouseover", handleMouseOver);
      pin.addEventListener("mousemove", handleMouseMove);
      pin.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      container.querySelectorAll(".pin").forEach((pin) => {
        pin.removeEventListener("mouseover", handleMouseOver);
        pin.removeEventListener("mousemove", handleMouseMove);
        pin.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <Wrapper>
      <div className="svg" dangerouslySetInnerHTML={{ __html: svgWithAttrs }} />
      {tooltip.visible && (
        <Tooltip style={{ left: tooltip.x, top: tooltip.y }}>
          <strong>{tooltip.name}</strong>
          <div>{tooltip.country}</div>
        </Tooltip>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 20px;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .pin {
    transition: r 0.2s ease, stroke-width 0.2s ease, fill-opacity 0.2s ease;
    cursor: pointer;
    fill-opacity: 0.8;
  }

  .pin:hover {
    r: 0.6;
    stroke: #fff;
    stroke-width: 0.05;
    fill-opacity: 1;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: linear-gradient(145deg, #1e1e2f, #2b2b45);
  color: #f1f1f1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  pointer-events: none;
  white-space: nowrap;
  z-index: 999;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35), 0 0 8px rgba(106, 90, 205, 0.25);
  transform: translate(-50%, -100%) scale(0.95);
  opacity: 0;
  animation: fadeInScale 0.25s ease-out forwards;

  strong {
    display: block;
    font-weight: 600;
    color: #a6c1ee;
    margin-bottom: 4px;
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: translate(-50%, -100%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -100%) scale(1);
    }
  }
`;
