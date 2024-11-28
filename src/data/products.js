const products = [
  {
    id: 1,
    name: "Mountain",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/alpine.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Mountain",
        content: "100% Polyester",
        weight: "450 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "40,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",

        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",

        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",

        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "L17v=,9r$noN^nImIns=}xI-W--X",
  },
  {
    id: 2,
    name: "Atmosphere",
    image: "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/aura.png",
    colors: [
      {
        name: "Aloe",
        color: "#97341F",
        image: "https://nexgenfabrics.com/wp-content/uploads/2022/09/au01.png",
      },
      {
        name: "Berry",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au02.png",
      },
      {
        name: "Steel Blue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au03.png",
      },
      {
        name: "Deep Blue",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au04.png",
      },
      {
        name: "Slate",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au05.png",
      },
      {
        name: "Bruise",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au06.png",
      },
      {
        name: "Dark Brown",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au07.png",
      },
      {
        name: "Light Yellow",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au08.png",
      },
      {
        name: "Burnt Orange",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au09.png",
      },
      {
        name: "Maroon",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au10.png",
      },
      {
        name: "Mahogany",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au11.png",
      },
      {
        name: "Charcoal",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au12.png",
      },
      {
        name: "Tan",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au13.png",
      },
      {
        name: "Latte",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au14.png",
      },
      {
        name: "Pale Grey",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au15.png",
      },
      {
        name: "Cloudy Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au16.png",
      },
      {
        name: "Dove Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au17.png",
      },
      {
        name: "Granite",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/au18.png",
      },
    ],
    specs: [
      {
        range: "Atmosphere",
        content: "100% Polyester",
        weight: "350 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "80,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
          "ASTM E-84 Class 1 or A",
        ],
      },
    ],
    blurhash: "L16[8WIU-;xu~qRjM{Rj?bWBRjxu",
  },
  {
    id: 3,
    name: "Joy",
    image: "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/bliss.png",
    colors: [
      {
        name: "Medium Blue",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl105.jpg",
      },
      {
        name: "Electric Blue",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl107.jpg",
      },
      {
        name: "Deep Blue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl108-scaled.jpg",
      },
      {
        name: "Dark Blue",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl109.jpg",
      },
      {
        name: "Deep Navy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl111.jpg",
      },
      {
        name: "Beige",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl112.jpg",
      },
      {
        name: "Silver",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl113.jpg",
      },
      {
        name: "Light Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl116.jpg",
      },
      {
        name: "Off-White",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl117.jpg",
      },
      {
        name: "Chocolate",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl124.jpg",
      },
      {
        name: "Dark Green",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl127.jpg",
      },
      {
        name: "Yellow",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl132.jpg",
      },
      {
        name: "Bright Green",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl133.jpg",
      },
      {
        name: "Burgundy",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl137.jpg",
      },
      {
        name: "Red",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl140.jpg",
      },
      {
        name: "Dark Orange",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl141.jpg",
      },
      {
        name: "Violet",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl144.jpg",
      },
      {
        name: "Jet Black",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl145.jpg",
      },
      {
        name: "Scarlet",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl206.jpg",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl207.jpg",
      },
      {
        name: "Rust",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl215.jpg",
      },
      {
        name: "Khaki",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl221.jpg",
      },
      {
        name: "Hot Pink",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl301.jpg",
      },
      {
        name: "Bright Yellow",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl302.jpg",
      },
      {
        name: "Mocha",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl303.jpg",
      },
      {
        name: "Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl304.jpg",
      },
      {
        name: "Orange",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl305.jpg",
      },
      {
        name: "Sparkle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl306.jpg",
      },
      {
        name: "Charcoal",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl307.jpg",
      },
      {
        name: "Taupe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl308.jpg",
      },
      {
        name: "Light Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl309.jpg",
      },
      {
        name: "Gunmetal",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl310.jpg",
      },
      {
        name: "Ruite",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/02/bl311.jpg",
      },
    ],
    specs: [
      {
        range: "Joy",
        content: "100% Polyester",
        weight: "375 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "80,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LA6]F]WByFo#%%V;oykEp0V@tSo#",
  },
  {
    id: 4,
    name: "Metal",
    image: "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/brass.png",
    colors: [
      {
        name: "Golden",
        color: "#97341F",
        image: "https://nexgenfabrics.com/wp-content/uploads/2022/09/bs101.png",
      },
      {
        name: "Oak Brown",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs102.png",
      },
      {
        name: "Copper",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs103.png",
      },
      {
        name: "Golden Yellow",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs104.png",
      },
      {
        name: "Light Orange",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs105.png",
      },
      {
        name: "Park Green",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs106.png",
      },
      {
        name: "Pine Brown",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs107.png",
      },
      {
        name: "Electric Blue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs108.png",
      },
      {
        name: "Natural Green",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs109.png",
      },
      {
        name: "Aloe Green",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs110.png",
      },
      {
        name: "Soft Peach",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs111.png",
      },
      {
        name: "Light Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs112.png",
      },
      {
        name: "Acorn Brown",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs113.png",
      },
      {
        name: "Canyon Brown",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs114.png",
      },
      {
        name: "Radiant",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs115.png",
      },
      {
        name: "Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs116.png",
      },
      {
        name: "Buff",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs117.png",
      },
      {
        name: "Deep Blue",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs118.png",
      },
      {
        name: "Dusty Beige",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs119.png",
      },
      {
        name: "Asphalt Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/bs120.png",
      },
    ],
    specs: [
      {
        range: "Metal",
        content: "100% Polyester",
        weight: "500 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "60,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LCGu]Pxs_1oe~nIWDlM|t6xt9HM|",
  },
  {
    id: 5,
    name: "Dacron",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/dacron.png",
    colors: [
      {
        name: "Mocha",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn103.jpg",
      },
      {
        name: "Beige",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn112.jpg",
      },
      {
        name: "Mint Green",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn114.jpg",
      },
      {
        name: "Light Grey",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn116.jpg",
      },
      {
        name: "Off-White",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn117.jpg",
      },
      {
        name: "Light Brown",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn123.jpg",
      },
      {
        name: "Bright Yellow",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn129.jpg",
      },
      {
        name: "Jet Black",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn145.jpg",
      },
      {
        name: "Chocolate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn146.jpg",
      },
      {
        name: "Earthy Brown",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn154.jpg",
      },
      {
        name: "Hot Pink",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn156.jpg",
      },
      {
        name: "Electric Blue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn202.jpg",
      },
      {
        name: "Violet",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn204.jpg",
      },
      {
        name: "Scarlet",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn206.jpg",
      },
      {
        name: "Ruite",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn208.jpg",
      },
      {
        name: "Granada",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn210.jpg",
      },
      {
        name: "Deep Blue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn212.jpg",
      },
      {
        name: "Mars",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn213.jpg",
      },
      {
        name: "Pink",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn214.jpg",
      },
      {
        name: "Rust",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2021/08/dn215.jpg",
      },
    ],
    specs: [
      {
        range: "Polyester",
        content: "100% Polyester",
        weight: "400 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "40,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Wipe clean using a damp cloth. Upholstery Shampoo.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LBJk4Dt6~pD%~VbID%V@M{t7IVoJ",
  },
  {
    id: 6,
    name: "Floss",
    image: "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/floss.png",
    colors: [
      {
        name: "Light Grey",
        color: "#97341F",
        image: "https://nexgenfabrics.com/wp-content/uploads/2022/09/fs101.png",
      },
      {
        name: "Taupe",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs102.png",
      },
      {
        name: "Olive Green",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs103.png",
      },
      {
        name: "Golden Green",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs104.png",
      },
      {
        name: "Acorn Brown",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs105.png",
      },
      {
        name: "Cedar Brown",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs106.png",
      },
      {
        name: "Mint Green",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs107.png",
      },
      {
        name: "Earthy Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs108.png",
      },
      {
        name: "Solitude",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs109.png",
      },
      {
        name: "Icy Grey",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs110.png",
      },
      {
        name: "Smoky Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs111.png",
      },
      {
        name: "Bold Red",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs112.png",
      },
      {
        name: "Pale Pink",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs113.png",
      },
      {
        name: "Light Beige",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs114.png",
      },
      {
        name: "Violet",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs115.png",
      },
      {
        name: "Burnt Violet",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs116.png",
      },
      {
        name: "Radiant",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs117.png",
      },
      {
        name: "Purple",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs118.png",
      },
      {
        name: "Deep Blue",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs119.png",
      },
      {
        name: "Dark Blue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs120.png",
      },
      {
        name: "Bright Orange",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs121.png",
      },
      {
        name: "Scarlet",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs122.png",
      },
      {
        name: "Reddish Pink",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs123.png",
      },
      {
        name: "Bright Red",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/fs124.png",
      },
    ],
    specs: [
      {
        range: "Floss",
        content: "100% Polyester",
        weight: "525 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "80,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Wipe clean using a damp cloth or upholstery shampoo.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LAKF:6,F|{WV}GNuE|WoNuo1NufP",
  },
  {
    id: 7,
    name: "Evergreen",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/juniper.png",
    colors: [
      {
        name: "Off-White",
        color: "#97341F",
        image: "https://nexgenfabrics.com/wp-content/uploads/2022/09/ju101.png",
      },
      {
        name: "Beige",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju102.png",
      },
      {
        name: "Dusty Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju103.png",
      },
      {
        name: "Olive Green",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju104.png",
      },
      {
        name: "Light Brown",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju105.png",
      },
      {
        name: "Violet",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju106.png",
      },
      {
        name: "Tangerine",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju107.png",
      },
      {
        name: "Burnt Orange",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju108.png",
      },
      {
        name: "Soft Pink",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju109.png",
      },
      {
        name: "Grayish Beige",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju120.png",
      },
      {
        name: "Slate Gray",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju121.png",
      },
      {
        name: "Warm Gray",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju122.png",
      },
      {
        name: "Charcoal Gray",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju123.png",
      },
      {
        name: "Jet Black",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju124.png",
      },
      {
        name: "Tan",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju125.png",
      },
      {
        name: "Medium Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju126.png",
      },
      {
        name: "Dark Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju127.png",
      },
      {
        name: "Bold Red",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju128.png",
      },
      {
        name: "Peach",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju129.png",
      },
      {
        name: "Cocoa",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju130.png",
      },
      {
        name: "Light Blue",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju131.png",
      },
      {
        name: "Soft Green",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju132.png",
      },
      {
        name: "Bronze",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju133.png",
      },
      {
        name: "Deep Green",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju134.png",
      },
      {
        name: "Sunflower Yellow",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju135.png",
      },
      {
        name: "Deep Blue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/09/ju136.png",
      },
    ],
    specs: [
      {
        range: "Evergreen",
        content: "100% Polyester",
        weight: "290 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "60,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "L8ECtQ?bM{ay%MWBj[xt~pWBt7of",
  },
  {
    id: 8,
    name: "Prairie",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/kansas.png",
    colors: [
      {
        name: "Peach",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka101.png",
      },
      {
        name: "Sheer White",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka102.png",
      },
      {
        name: "Dark Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka103.png",
      },
      {
        name: "Medium Brown",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka104.png",
      },
      {
        name: "Golden Yellow",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka105.png",
      },
      {
        name: "Light Gray",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka106.png",
      },
      {
        name: "Cream",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka107.png",
      },
      {
        name: "Taupe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka108.png",
      },
      {
        name: "Light Beige",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka109.png",
      },
      {
        name: "Warm Yellow",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka110.png",
      },
      {
        name: "Bright Green",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka111.png",
      },
      {
        name: "Earthy Green",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka112.png",
      },
      {
        name: "Navy Blue",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka113.png",
      },
      {
        name: "Olive Green",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka114.png",
      },
      {
        name: "Dark Green",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka115.png",
      },
      {
        name: "Hue",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka116.png",
      },
      {
        name: "Grey Tint",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka117.png",
      },
      {
        name: "True Blue",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka118.png",
      },
      {
        name: "Deep Teal",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka119.png",
      },
      {
        name: "Dark Green",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka120.png",
      },
      {
        name: "Fresh Green",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka121.png",
      },
      {
        name: "Rich Green",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka122.png",
      },
      {
        name: "Warm Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka123.png",
      },
      {
        name: "Cool Gray",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka124.png",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka125.png",
      },
      {
        name: "Dark Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka126.png",
      },
      {
        name: "Rustic Red",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka127.png",
      },
      {
        name: "Earthy Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka128.png",
      },
      {
        name: "Soft Brown",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2022/10/ka129.png",
      },
    ],
    specs: [
      {
        range: "Prairie",
        content: "100% Polyester",
        weight: "400 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "60,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, Wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LCIg$Q~W-p%2kCj[M{of?HWVRjs:",
  },
  {
    id: 9,
    name: "Opulence",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/luxury.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Opulence",
        content: "100% Polyester",
        weight: "450 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "40,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Wipe clean using a damp cloth. Upholstery Shampoo.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "L9Dna0yTWBkTIDtPRkMz??RRWCtP",
  },
  {
    id: 10,
    name: "Indigenous",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/native.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Indigenous",
        content: "100% Polyester",
        weight: "500 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "80,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
          "ASTM E-84 Class 1 or A",
        ],
      },
    ],
    blurhash: "L9J?otxY~8R+IrNIxYs.xYoeE4t5",
  },
  {
    id: 11,
    name: "Nexus",
    image: "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/nexus.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Nexus",
        content: "75% PVC / 25% Polyester",
        weight: "800 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "200,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Spots can be dried off using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
        ],
      },
    ],
    blurhash: "LSJ6Js3+5p}:j[a}bHo1WXf7a|az",
  },
  {
    id: 12,
    name: "Ultra",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/xtreme.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Ultra",
        content: "100% Polyester",
        weight: "375 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "80,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        antimicrobial_antifungal: "AATCC 147",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "ASTM E84 (Adhered) Class 1 or A",
          "ASTM E84 (Un-adhered) Class 1 or A",
          "ASTM E84 Class- 1 or A",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
          "BS EN: 1021 Part 1 and 2",
        ],
      },
    ],
    blurhash: "LK3TX9kZf-f5jqj^f5f5kvfhfhf5",
  },
  {
    id: 13,
    name: "Plexus",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-13.40.02-1.jpg",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Plexus",
        content: "100% Polyester",
        weight: "500 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "60,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        antimicrobial_antifungal: "AATCC 147",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "L8Gu,l00%N~q0000RP.8%1-;xuIU",
  },
  {
    id: 14,
    name: "Soft",
    image: "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/plush.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Soft",
        content: "100% Polyester",
        weight: "500 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "60,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        antimicrobial_antifungal: "AATCC 147",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "L9Knbuxv%M-p4mj[xuof~qM{IUM{",
  },
  {
    id: 15,
    name: "Comfort",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/solace.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Comfort",
        content: "100% Polyester",
        weight: "525 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "80,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Wipe clean using a damp cloth or Upholstery Shampoo.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LFCjen?w%Nxv-=t7M{Ri%OaxRhj]",
  },
  {
    id: 16,
    name: "Fragrant",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/tuberose.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Fragrant",
        content: "100% Polyester",
        weight: "300 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "60,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        antimicrobial_antifungal: "AATCC 147",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "L75kkmX9pfkYoHa#krbwkrVWi]Vr",
  },
  {
    id: 17,
    name: "Velvet",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/velluto.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Velvet",
        content: "100% Polyester",
        weight: "500 Grams / Meter +5%",
        width: "54″ inches +2%",
        abrasion_resistance: "40,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "L55j2Dt-tlkC*JWBo}aeyXR5Vsae",
  },
  {
    id: 18,
    name: "Velour",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/velour.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Velour",
        content: "100% Polyester",
        weight: "500 Grams / Meter +5%",
        width: "54 inches ±2%",
        abrasion_resistance: "40,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        anti_microbial: "AATCC 147",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LBI0+3=K=KbH|{NubHS2$Psoa|Nu",
  },
  {
    id: 19,
    name: "Fuzzy",
    image:
      "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/woolly.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Fuzzy",
        content: "80% Wool / 20% Polyester",
        weight: "550 Grams / Meter +5%",
        width: "54 inches ±2%",
        abrasion_resistance: "25,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        anti_microbial: "AATCC 147",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
        cleaning: "Vacuum regularly, wipe clean using a damp cloth",
        nrc_value:
          "Acoustic Properties – Noise Reduction Coefficient Up to 0.9",
      },
    ],
    blurhash: "LGLliH=goN,]$laxjuoM}JS1JOsp",
  },
  {
    id: 20,
    name: "Enthusiasm",
    image: "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/zest.png",
    colors: [
      {
        name: "Sour",
        color: "#97341F",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae101.webp",
      },
      {
        name: "RedFuchsia",
        color: "#FF00FF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae102.webp",
      },
      {
        name: "Rose",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae103.webp",
      },
      {
        name: "Tangerine",
        color: "#FFA500",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae104.webp",
      },
      {
        name: "Burgundy",
        color: "#800020",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae105.webp",
      },
      {
        name: "Apricot",
        color: "#FBCEB1",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae106.webp",
      },
      {
        name: "Beige",
        color: "#F5F5DC",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae107.webp",
      },
      {
        name: "Blond",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae108.webp",
      },
      {
        name: "Wood",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae109.webp",
      },
      {
        name: "Copper",
        color: "#B87333",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae110.webp",
      },
      {
        name: "Aloe",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae111.webp",
      },
      {
        name: "Natural",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae112.webp",
      },
      {
        name: "Olive",
        color: "#808000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae113.webp",
      },
      {
        name: "Yellow",
        color: "#FFFF00",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae114.webp",
      },
      {
        name: "Golden",
        color: "#FFD700",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae115.webp",
      },
      {
        name: "Mist",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae116.webp",
      },
      {
        name: "Dusky",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae117.webp",
      },
      {
        name: "Ivory",
        color: "#FFFFF0",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae118.webp",
      },
      {
        name: "Ashen",
        color: "#B2BEB5",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae119.webp",
      },
      {
        name: "Dove",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae120.webp",
      },
      {
        name: "Navy",
        color: "#191970",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae121.webp",
      },
      {
        name: "Azure",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae122.webp",
      },
      {
        name: "Sooty",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae123.webp",
      },
      {
        name: "Ebony",
        color: "#000000",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae124.webp",
      },
      {
        name: "Sky",
        color: "#007FFF",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae125.webp",
      },
      {
        name: "Sophisticated",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae126.webp",
      },
      {
        name: "Slate",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae127.webp",
      },
      {
        name: "Elegant Grey",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae128.webp",
      },
      {
        name: "Stone Castle",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae129.webp",
      },
      {
        name: "Utopia",
        color: "#FFC0CB",
        image:
          "https://www.nexgenfabrics.com/wp-content/uploads/2023/02/ae130.webp",
      },
    ],
    specs: [
      {
        range: "Enthusiasm",
        content: "100% Polyester",
        weight: "500 Grams / Meter +5%",
        width: "54″ +2%",
        abrasion_resistance: "60,000 Cycles",
        colour_fastness: "WET: 4, DRY: 5",
        suitable_for: "Vertical Paneling & Seating",
        anti_microbial: "AATCC 147",
        colour_matching:
          "Batch to Batch Variation in shade may occur within commercial tolerances.",
        cleaning: "Vacuum regularly, wipe clean using a damp cloth",
        flammability: [
          "BS EN: 1021 Part 1 and 2",
          "BS 5852 Ignition Source 5 (Crib 5)",
          "Cal TB 117- (2013)",
          "NFPA 260/ UFAC Class1",
          "NFPA 701",
          "BS 5867 Part 2 Type B",
        ],
      },
    ],
    blurhash: "LDHek1_3~pj[M{t7Rjt7%Mj[IUof",
  },
];

export default products;
