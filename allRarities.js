const rarities = [
    // Class: Basic
    { name: "Common", probability: 5, color: "white", font: "sans-serif", class: "Basic" }, // 1 in 2
    { name: "Uncommon", probability: 12, color: "lime", font: "sans-serif", class: "Basic" }, // 1 in 4 
    { name: "Good", probability: 20, color: "gray", font: "sans-serif", class: "Basic" }, // 1 in 8
    { name: "Rare", probability: 30, color: "dodgerblue", font: "sans-serif", class: "Basic" }, // 1 in 16
  
    // Class: Advanced
    { name: "Epic", probability: 64, color: "crimson", font: "sans-serif", class: "Advanced" }, // 1 in 32
    { name: "Crystallized", probability: 200, color: "darkorchid", font: "sans-serif", class: "Advanced" }, // 1 in 64
    { name: "Divine", probability: 300, color: "khaki", font: "sans-serif", class: "Advanced" }, // 1 in 128
    { name: "Metallic", probability: 400, color: "silver", font: "sans-serif", class: "Advanced" }, // 1 in 150
    { name: "Freezing", probability: 500, color: "paleturquoise", font: "sans-serif", class: "Advanced" }, // 1 in 256
    { name: "Windful", probability: 550, color: "mediumturquoise", font: "sans-serif", class: "Advanced" }, // 1 in 300
    { name: "Ruby", probability: 600, color: "indianred", font: "sans-serif", class: "Advanced" }, // 1 in 350
    { name: "Emerald", probability: 600, color: "greenyellow", font: "sans-serif", class: "Advanced" }, // 1 in 500
    { name: "Gilded", probability: 750, color: "chocolate", font: "sans-serif", class: "Advanced" }, // 1 in 512
    { name: "Jackpot", probability: 777, color: "yellow", font: "sans-serif", class: "Advanced" }, // 1 in 777
    { name: "Sapphire", probability: 850, color: "navy", font: "sans-serif", class: "Advanced" }, // 1 in 800
    { name: "Aquamarine", probability: 1200, color: "aqua", font: "sans-serif", class: "Advanced" }, // 1 in 900
  
    // Class: Specialized
    { name: "Diaboli", probability: 2000, color: "firebrick", font: "sans-serif", class: "Specialized" }, // 1 in 1,004
    { name: "Precious", probability: 2048, color: "dodgerblue", font: "sans-serif", class: "Specialized" }, // 1 in 1,024
    { name: "Undefined", probability: 3000, color: "dimgray", font: "sans-serif", class: "Specialized" }, // 1 in 1,111
    { name: "Magnetic", probability: 4096, color: "deeppink", font: "sans-serif", class: "Specialized" }, // 1 in 2,048
    { name: "Sidereum", probability: 4500, color: "blueviolet", font: "sans-serif", class: "Specialized" }, // 1 in 4,096
  
  // Class: Galactic
    { name: "Solar", probability: 6000, color: "darkorange", font: "sans-serif", class: "Galactic" }, // 1 in 5,000
    { name: "Lunar", probability: 6000, color: "darkslateblue", font: "sans-serif", class: "Galactic" }, // 1 in 5,000
    { name: "Starlight", probability: 7000, color: "azure", font: "sans-serif", class: "Galactic" }, // 1 in 5,000
    { name: "Astral", probability: 7500, color: "blue", font: "sans-serif", class: "Galactic" }, // 1 in 6,900
  
    
  
  
    // Class: Exotic
    { name: "Undead", probability: 10000, color: "green", font: "sans-serif", class: "Exotic" }, // 1 in 10,000
    { name: "Comet", probability: 12000, color: "gainsboro", font: "sans-serif", class: "Exotic" }, // 1 in 12,000
    { name: "Diaboli - Overkill", probability: 12800, color: "indianred", font: "sans-serif", class: "Exotic" }, // 1 in 12,800
    { name: "Permafrost", probability: 24500, color: "mediumaquamarine", font: "sans-serif", class: "Exotic" }, // 1 in 24,500
    { name: "Stormal", probability: 30000, color: "	silver", font: "sans-serif", class: "Exotic" }, // 1 in 30,000
    { name: "Aquatic", probability: 40000, color: "darkcyan", font: "sans-serif", class: "Exotic" }, // 1 in 40,000
    { name: "Nautilus", probability: 70000, color: "darkslateblue", font: "sans-serif", class: "Exotic" }, // 1 in 70,000
    { name: "Exotic", probability: 99999, color: "midiumturquoise", font: "sans-serif", class: "Exotic" }, // 1 in 99,999
    { name: "Undead - Devil", probability: 100000, color: "maroon", font: "sans-serif", class: "Exotic" }, // 1 in 100,000
  
    // Class: Mythical
    { name: "Diaboli - Void", probability: 100400, color: "palevioletred", font: "sans-serif", class: "Mythical" }, // 1 in 100,400
    { name: "Jade", probability: 125000, color: "seagreen", font: "sans-serif", class: "Mythical" }, // 1 in 125,000
    { name: "Bounded", probability: 200000, color: "	lightseagreen", font: "sans-serif", class: "Mythical" }, // 1 in 200,000
    { name: "Celestial", probability: 350000, color: "thistle", font: "sans-serif", class: "Mythical" }, // 1 in 350,000
    { name: "Galaxy", probability: 500000, color: "snow", font: "sans-serif", class: "Mythical" }, // 1 in 500,000
    { name: "Lunar - Full Moon", probability: 500000, color: "lightseagreen", font: "sans-serif", class: "Mythical" }, // 1 in 500,000
    { name: "Twilight", probability: 600000, color: "	orchid", font: "sans-serif", class: "Mythical" }, // 1 in 600,000
    { name: "Kyawthuite", probability: 850000, color: "darkslateblue", font: "sans-serif", class: "Mythical" }, // 1 in 850,000
    { name: "Arcane", probability: 1000000, color: "papayawhip", font: "sans-serif", class: "Mythical" }, // 1 in 1,000,000
    { name: "Starscourge", probability: 1000000, color: "linen", font: "sans-serif", class: "Mythical" }, // 1 in 1,000,000
  
    // Class: Enchanted
    { name: "Magnetic - Reverse Polarity", probability: 1024000, color: "royalblue", font: "sans-serif", class: "Enchanted" }, // 1 in 1,024,000
    { name: "Gravitational", probability: 2000000, color: "mediumvioletred", font: "sans-serif", class: "Enchanted" }, // 1 in 2,000,000
    { name: "Bounded Unbounded", probability: 2000000, color: "peru", font: "sans-serif", class: "Enchanted" }, // 1 in 2,000,000
    { name: "Virtual", probability: 2500000, color: "orangered", font: "sans-serif", class: "Enchanted" }, // 1 in 2,500,000
    { name: "Sailor", probability: 3000000, color: "darkblue", font: "sans-serif", class: "Enchanted" }, // 1 in 3,000,000
    { name: "Poseidon", probability: 3800000, color: "darkseagreen", font: "sans-serif", class: "Enchanted" }, // 3,800,000
    { name: "Aquatic - Flame", probability: 4000000, color: "orangered", font: "sans-serif", class: "Enchanted" }, // 1 in 4,000,000
    { name: "Hades", probability: 6666666, color: "black", font: "sans-serif", class: "Enchanted" }, // 1 in 6,666,666
    { name: "HYPER-VOLT", probability: 7500000, color: "darkorange", font: "sans-serif", class: "Enchanted" }, // 1 in 7,500,000
    { name: "Glitch", probability: 15000000, color: "mediumvioletred", font: "sans-serif", class: "Enchanted" }, // 1 in 15,000,000
    { name: "Arcane - Legacy", probability: 15000000, color: "chocolate", font: "sans-serif", class: "Enchanted" }, // 1 in 15,000,000
    { name: "Chromatic", probability: 20000000, color: "crimson", font: "sans-serif", class: "Enchanted" }, // 1 in 20,000,000
    { name: "Arcane - Shadow", probability: 30000000, color: "black", font: "sans-serif", class: "Enchanted" }, // 1 in 30,000,000
    { name: "Astral - Crystalized", probability: 35000000, color: "darkseagreen", font: "sans-serif", class: "Enchanted" }, // 1 in 35,000,000
    { name: "Exotic - APEX", probability: 49999500, color: "firebrick", font: "sans-serif", class: "Enchanted" }, // 1 in 49,999,500
    { name: "Matrix", probability: 50000000, color: "darkorange", font: "sans-serif", class: "Enchanted" }, // 1 in 50,000,000
    { name: "Chromatic - GENESIS", probability: 99999999, color: "crimson", font: "sans-serif", class: "Enchanted" }, // 1 in 99,999,999
  
    // Class: Infinity
    { name: "Abyssal", probability: 100000000, color: "black", font: "sans-serif", class: "Infinity" }, // 1 in 100,000,000
    { name: "Impeached", probability: 200000000, color: "black", font: "sans-serif", class: "Infinity" }, // 1 in 200,000,000
    { name: "Chromatic - Energized", probability: 250000000, color: "black", font: "sans-serif", class: "Infinity" }, // 1 in 250,000,000
    { name: "Abyssal - Voided", probability: 250000000, color: "black", font: "sans-serif", class: "Infinity" }
  ];