/* ============================================================
   TRAIL DATA — Central Java Adventure Trails
   GENERATED from Google Sheets — edit the spreadsheet, not this file.
   ============================================================ */
const CATEGORIES = [
 {
  "id": "volcano",
  "title": "Volcano & ridge hikes",
  "note": "Central Java's spine of volcanoes — from easy plateau walks to serious two-day summits."
 },
 {
  "id": "sunrise",
  "title": "Sunrise trails",
  "note": "Short pre-dawn hikes to the famous golden sunrises above the Dieng cloud sea."
 },
 {
  "id": "waterfall",
  "title": "Waterfall trails",
  "note": "Jungle walks to tiered falls on the slopes of Mount Slamet — cool, green and nearly tourist-free."
 },
 {
  "id": "caving",
  "title": "Caving & karst",
  "note": "The Gombong South karst hides some of Southeast Asia's most spectacular river caves."
 },
 {
  "id": "coast",
  "title": "Coast & cliffs",
  "note": "Where the karst hills meet the Indian Ocean — turquoise coves and clifftop walks."
 }
];
const TRAILS = [
 {
  "id": "ketenger",
  "category": "waterfall",
  "name": "Ketenger Dutch Waterworks & Hot Spring Trail",
  "area": "Baturraden, Banyumas",
  "difficulty": "Easy–Moderate",
  "duration": "3–4 hours",
  "distance_km": 6,
  "best_months": "April–October",
  "best_start": "07:00–08:00",
  "guide": "recommended",
  "entrance_min": 10000,
  "entrance_max": 35000,
  "guide_min": 100000,
  "guide_max": 150000,
  "base": "Purwokerto",
  "summary": "A one-of-a-kind walk: follow the giant green penstock pipes of a working 1939 Dutch hydroelectric plant through pine forest, past the Ketenger dam, and finish soaking in the sulphuric hot cascades of Pancuran Pitu.",
  "highlights": "1939 hydro plant still running; twin penstock pipes through the forest; Curug Jenggala side trip; natural hot-spring cascade finish",
  "bring": "Swimwear, towel, water shoes or sandals with grip, 1.5L water, small cash for entrances",
  "warnings": "Stay off the pipes themselves — they are live infrastructure. Trails get slippery in rain. Sulphur water stains light clothing.",
  "gmaps": "PLTA Ketenger Baturraden",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Train to Purwokerto (approx. every 2h), then Grab/ojek 40 min to Kalipagu trailhead",
    "duration": "4–4.5 h",
    "cost": "Rp 100.000–300.000"
   },
   {
    "from": "Jakarta",
    "route": "Train Gambir/Pasar Senen → Purwokerto, then Grab/ojek 40 min to Kalipagu",
    "duration": "5.5–6 h",
    "cost": "Rp 200.000–420.000"
   },
   {
    "from": "Bandung",
    "route": "Train Bandung → Purwokerto, then Grab/ojek 40 min to Kalipagu",
    "duration": "5 h",
    "cost": "Rp 150.000–350.000"
   }
  ],
  "itinerary": [
   {
    "time": "07:30",
    "activity": "Arrive Kalipagu village, pay village fee, optional local guide"
   },
   {
    "time": "08:00",
    "activity": "Walk the penstock pipe corridor through damar forest"
   },
   {
    "time": "09:00",
    "activity": "Ketenger dam & 1939 powerhouse viewpoint (photos)"
   },
   {
    "time": "09:45",
    "activity": "Side trail to Curug Jenggala waterfall"
   },
   {
    "time": "11:00",
    "activity": "Continue up to Pancuran Pitu hot cascades"
   },
   {
    "time": "11:30",
    "activity": "Soak, rest, snack from warung"
   },
   {
    "time": "13:00",
    "activity": "Descend via Baturraden main area, mendoan lunch"
   }
  ]
 },
 {
  "id": "curug-nangga",
  "category": "waterfall",
  "name": "Curug Nangga Seven-Tier Trail",
  "area": "Pekuncen, Banyumas",
  "difficulty": "Easy",
  "duration": "1.5–2 hours",
  "distance_km": 2,
  "best_months": "April–October (flows best Nov–Mar, but slippery)",
  "best_start": "08:00–14:00",
  "guide": "not needed",
  "entrance_min": 10000,
  "entrance_max": 15000,
  "guide_min": 0,
  "guide_max": 0,
  "base": "Purwokerto",
  "summary": "Seven stacked waterfalls tumbling down a jungle staircase on Mount Slamet's western slope. A short, steep village trail leads to viewpoints of the full seven-tier drop — one of Banyumas's most photogenic spots and almost unknown to foreign visitors.",
  "highlights": "Full view of 7 tiers from the rice-terrace approach; swimmable plunge pool at the base; zero crowds on weekdays",
  "bring": "Grippy footwear, water, dry bag for phone",
  "warnings": "Steps are steep and mossy — go slow. After heavy rain the volume is spectacular but the lower pools are unsafe.",
  "gmaps": "Curug Nangga Pekuncen",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Train to Purwokerto, then car/ojek 45 min west via Ajibarang",
    "duration": "4.5 h",
    "cost": "Rp 120.000–320.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Purwokerto, then car/ojek 45 min west",
    "duration": "6 h",
    "cost": "Rp 220.000–450.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Purwokerto, then car/ojek 45 min west",
    "duration": "5 h",
    "cost": "Rp 170.000–380.000"
   }
  ],
  "itinerary": [
   {
    "time": "08:30",
    "activity": "Arrive trailhead village, entrance ticket"
   },
   {
    "time": "08:45",
    "activity": "Walk down through rice terraces — best full-view photo point"
   },
   {
    "time": "09:15",
    "activity": "Reach base pool, swim/photos"
   },
   {
    "time": "10:15",
    "activity": "Climb side path to upper tiers"
   },
   {
    "time": "11:00",
    "activity": "Return; coconut at village warung"
   }
  ]
 },
 {
  "id": "gua-barat",
  "category": "caving",
  "name": "Gua Barat River Cave Expedition",
  "area": "Ayah karst, Kebumen",
  "difficulty": "Hard (guided expedition)",
  "duration": "4–8 hours by package",
  "distance_km": 3,
  "best_months": "May–September only (dry season)",
  "best_start": "08:00",
  "guide": "required",
  "entrance_min": 25000,
  "entrance_max": 25000,
  "guide_min": 250000,
  "guide_max": 500000,
  "base": "Gombong / Kebumen",
  "summary": "A world-class river cave in the Gombong South karst, famous among cavers for thundering underground waterfalls — including the giant nicknamed 'Superman's Big Sister'. This is a real expedition: helmet, headlamp, wetsuit and certified local guides, wading and climbing through an active river passage.",
  "highlights": "Underground waterfalls; vast river passages; genuine expedition feel with professional village guide team",
  "bring": "Change of clothes, dry bag, sturdy sandals/canyoning shoes; operator provides helmet, lamp and gear",
  "warnings": "NEVER enter in rainy season or after rain — flash floods are lethal in river caves. Book only with the official village operator. Moderate fitness required.",
  "gmaps": "Gua Barat Kebumen",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Train to Gombong (approx. 1.5–2h), then car/ojek 45 min south to Ayah",
    "duration": "3–3.5 h",
    "cost": "Rp 100.000–280.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Gombong, then car/ojek 45 min south",
    "duration": "7 h",
    "cost": "Rp 230.000–470.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Gombong, then car/ojek 45 min south",
    "duration": "6 h",
    "cost": "Rp 180.000–400.000"
   }
  ],
  "itinerary": [
   {
    "time": "08:00",
    "activity": "Meet guide team at basecamp, gear fitting & safety briefing"
   },
   {
    "time": "09:00",
    "activity": "Enter cave — river wading section"
   },
   {
    "time": "10:30",
    "activity": "First underground waterfall chamber"
   },
   {
    "time": "12:00",
    "activity": "Turnaround point (varies by package), packed lunch"
   },
   {
    "time": "14:00",
    "activity": "Exit cave, wash up at basecamp"
   },
   {
    "time": "15:00",
    "activity": "Optional: continue 20 min to Menganti beach for sunset"
   }
  ]
 },
 {
  "id": "sikunir",
  "category": "sunrise",
  "name": "Sikunir Golden Sunrise Trail",
  "area": "Sembungan, Dieng Plateau",
  "difficulty": "Easy",
  "duration": "2–3 hours round trip",
  "distance_km": 2,
  "best_months": "May–September",
  "best_start": "04:00",
  "guide": "not needed",
  "entrance_min": 20000,
  "entrance_max": 30000,
  "guide_min": 0,
  "guide_max": 0,
  "base": "Dieng village",
  "summary": "Indonesia's most famous 'golden sunrise' — a 30–45 minute torch-lit walk from Sembungan (Java's highest village) to a ridge where the sun rises behind Mount Sindoro over a sea of clouds. Short, easy, unforgettable.",
  "highlights": "Golden sunrise over Sindoro & Sumbing; sea of clouds; Telaga Cebong lake on descent; Java's highest village",
  "bring": "Warm jacket, gloves and hat (0–5°C before dawn!), headlamp, cash for tea at summit warung",
  "warnings": "Very crowded on weekends and holidays — go on a weekday. Bitter cold before sunrise; hypothermia risk in just a t-shirt.",
  "gmaps": "Bukit Sikunir Sembungan",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Bus/travel to Wonosobo (3–4h), local bus/ojek up to Dieng (1h), stay overnight; ojek to Sembungan at 03:30",
    "duration": "5 h + overnight",
    "cost": "Rp 100.000–200.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Purwokerto, bus to Wonosobo (2h), up to Dieng, overnight",
    "duration": "9 h + overnight",
    "cost": "Rp 250.000–450.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Purwokerto, bus to Wonosobo, up to Dieng, overnight",
    "duration": "8 h + overnight",
    "cost": "Rp 200.000–400.000"
   }
  ],
  "itinerary": [
   {
    "time": "03:30",
    "activity": "Ojek/scooter from Dieng village to Sembungan car park"
   },
   {
    "time": "04:00",
    "activity": "Start walk — stone steps, 30–45 min"
   },
   {
    "time": "04:45",
    "activity": "Summit ridge; find a spot, hot tea from warung"
   },
   {
    "time": "05:15",
    "activity": "Sunrise over Sindoro — the golden show"
   },
   {
    "time": "06:15",
    "activity": "Descend via Telaga Cebong lake"
   },
   {
    "time": "07:00",
    "activity": "Breakfast in Sembungan; kentang goreng Dieng"
   }
  ]
 },
 {
  "id": "prau",
  "category": "sunrise",
  "name": "Mount Prau Ridge Camp & Sunrise",
  "area": "Patak Banteng, Dieng",
  "difficulty": "Moderate",
  "duration": "2–3h up · overnight camp or dawn hike",
  "distance_km": 4,
  "best_months": "April–November (closed for recovery each Jan–Mar — check before going)",
  "best_start": "14:00 (camp) or 02:00 (dawn push)",
  "guide": "recommended",
  "entrance_min": 25000,
  "entrance_max": 35000,
  "guide_min": 150000,
  "guide_max": 300000,
  "base": "Dieng / Patak Banteng",
  "summary": "The classic Dieng ridge: a steady 2–3 hour climb to a rolling grassy summit ridge with 360° views of Sindoro, Sumbing, Merbabu and Merapi lined up at dawn. Most hikers camp overnight; fit walkers do a 02:00 dawn push.",
  "highlights": "Five-volcano dawn panorama; savanna ridge with 'teletubbies hills'; proper camping experience",
  "bring": "Tent & sleeping bag (rentable at basecamp), warm layers, headlamp, 2L water, trash bag (pack it all out)",
  "warnings": "Annual closure Jan–Mar for trail recovery. Cold and windy on the ridge (0–5°C). Register at the basecamp post.",
  "gmaps": "Basecamp Prau Patak Banteng",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Bus/travel to Wonosobo, local bus toward Dieng, stop at Patak Banteng basecamp",
    "duration": "5 h",
    "cost": "Rp 100.000–200.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Purwokerto, bus to Wonosobo, local bus to Patak Banteng",
    "duration": "9 h",
    "cost": "Rp 250.000–450.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Purwokerto, bus to Wonosobo, local bus to Patak Banteng",
    "duration": "8 h",
    "cost": "Rp 200.000–400.000"
   }
  ],
  "itinerary": [
   {
    "time": "14:00",
    "activity": "Register at Patak Banteng basecamp, rent gear if needed"
   },
   {
    "time": "14:30",
    "activity": "Climb through village terraces then forest (steep, steady)"
   },
   {
    "time": "17:00",
    "activity": "Reach ridge, pitch camp before sunset"
   },
   {
    "time": "05:00",
    "activity": "Wake for the five-volcano sunrise"
   },
   {
    "time": "07:30",
    "activity": "Break camp, descend by 09:30"
   }
  ]
 },
 {
  "id": "sikidang",
  "category": "volcano",
  "name": "Sikidang Crater Boardwalk",
  "area": "Dieng Plateau",
  "difficulty": "Easy",
  "duration": "1–1.5 hours",
  "distance_km": 2,
  "best_months": "All year (dry season clearest)",
  "best_start": "07:00–10:00",
  "guide": "not needed",
  "entrance_min": 25000,
  "entrance_max": 35000,
  "guide_min": 0,
  "guide_max": 0,
  "base": "Dieng village",
  "summary": "An easy boardwalk loop around a bubbling volcanic crater that famously 'jumps' location over the years. Steaming vents, mud pools and sulphur — a walk on another planet, no fitness required.",
  "highlights": "Bubbling grey crater lake; steaming fumaroles; combine with Arjuna temples & Telaga Warna the same morning",
  "bring": "Mask or buff for sulphur smell, sun hat — no shade on the boardwalk",
  "warnings": "Stay on the boardwalk; ground off-path can be scalding. Skip if you have respiratory issues on a heavy-steam day.",
  "gmaps": "Kawah Sikidang Dieng",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Bus/travel to Wonosobo then up to Dieng; crater is 10 min from village by ojek",
    "duration": "5 h",
    "cost": "Rp 100.000–200.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Purwokerto, bus to Wonosobo, up to Dieng",
    "duration": "9 h",
    "cost": "Rp 250.000–450.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Purwokerto, bus to Wonosobo, up to Dieng",
    "duration": "8 h",
    "cost": "Rp 200.000–400.000"
   }
  ],
  "itinerary": [
   {
    "time": "07:30",
    "activity": "Enter, walk the crater rim boardwalk"
   },
   {
    "time": "08:15",
    "activity": "Upper viewpoints & photo spots"
   },
   {
    "time": "09:00",
    "activity": "Exit; continue to Arjuna temple complex (10 min)"
   }
  ]
 },
 {
  "id": "slamet",
  "category": "volcano",
  "name": "Mount Slamet Summit via Bambangan",
  "area": "Purbalingga (Slamet massif)",
  "difficulty": "Expert — 2 days",
  "duration": "2 days / 1 night",
  "distance_km": 14,
  "best_months": "June–September only",
  "best_start": "08:00 day 1",
  "guide": "required",
  "entrance_min": 35000,
  "entrance_max": 50000,
  "guide_min": 400000,
  "guide_max": 700000,
  "base": "Purwokerto / Bambangan",
  "summary": "Java's second-highest volcano (3,428m) and one of its toughest walk-ups: a relentless forest climb to a bare volcanic cone, summit push at dawn above the clouds. For fit, experienced hikers with a local guide only.",
  "highlights": "3,428m summit crater rim; sunrise above all of Central Java; true expedition bragging rights",
  "bring": "Full mountain kit: 4-season layers, tent, stove, 4L water per day (no water sources high up), gloves for the scree",
  "warnings": "Volcanic activity status can close the mountain — ALWAYS check current status before planning. No water above the last post. Summit cone is loose scree; helmet advisable.",
  "gmaps": "Basecamp Bambangan Gunung Slamet",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Train to Purwokerto, car 1.5h to Bambangan basecamp (arrange via guide)",
    "duration": "5–6 h",
    "cost": "Rp 150.000–350.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Purwokerto, car 1.5h to Bambangan",
    "duration": "7 h",
    "cost": "Rp 250.000–500.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Purwokerto, car 1.5h to Bambangan",
    "duration": "6.5 h",
    "cost": "Rp 200.000–450.000"
   }
  ],
  "itinerary": [
   {
    "time": "Day1 09:00",
    "activity": "Register at Bambangan, start climb through farms then forest"
   },
   {
    "time": "Day1 15:00",
    "activity": "Reach high camp (Pos 5/7 by pace), pitch tents"
   },
   {
    "time": "Day2 03:00",
    "activity": "Summit push up the scree cone"
   },
   {
    "time": "Day2 05:30",
    "activity": "Sunrise on the crater rim, 3,428m"
   },
   {
    "time": "Day2 07:00",
    "activity": "Descend to camp, pack, down by early afternoon"
   }
  ]
 },
 {
  "id": "menganti",
  "category": "coast",
  "name": "Menganti Cliffs & Coves Walk",
  "area": "Ayah coast, Kebumen",
  "difficulty": "Easy",
  "duration": "2–3 hours",
  "distance_km": 4,
  "best_months": "April–October",
  "best_start": "15:00 for sunset",
  "guide": "not needed",
  "entrance_min": 15000,
  "entrance_max": 25000,
  "guide_min": 0,
  "guide_max": 0,
  "base": "Gombong / Kebumen",
  "summary": "Where the Gombong karst plunges into the Indian Ocean: white-sand coves between green cliff headlands, a lighthouse walk, and fishing boats hauling in the day's catch. The best sunset on the Central Java coast.",
  "highlights": "Clifftop lighthouse viewpoint; turquoise coves; fresh grilled fish at the fishing village; pairs perfectly with Gua Barat the same day",
  "bring": "Sun protection, swimwear, cash for grilled-fish dinner",
  "warnings": "Ocean currents are strong — swim only where locals do. The cliff road down is steep; ride carefully.",
  "gmaps": "Pantai Menganti Kebumen",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Train to Gombong, car/ojek 1h south through the karst hills",
    "duration": "3.5 h",
    "cost": "Rp 120.000–300.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Gombong, car/ojek 1h south",
    "duration": "7 h",
    "cost": "Rp 250.000–480.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Gombong, car/ojek 1h south",
    "duration": "6 h",
    "cost": "Rp 200.000–420.000"
   }
  ],
  "itinerary": [
   {
    "time": "15:00",
    "activity": "Arrive, walk to the lighthouse headland"
   },
   {
    "time": "16:00",
    "activity": "Descend to the main cove, swim or beach time"
   },
   {
    "time": "17:30",
    "activity": "Sunset from the cliff warung"
   },
   {
    "time": "18:30",
    "activity": "Grilled fish dinner at the fishing village"
   }
  ]
 },
 {
  "id": "jenggala",
  "category": "waterfall",
  "name": "Curug Jenggala Short Trail",
  "area": "Kalipagu, Baturraden",
  "difficulty": "Easy",
  "duration": "1–1.5 hours",
  "distance_km": 1.5,
  "best_months": "All year (best flow Nov–Apr)",
  "best_start": "08:00–15:00",
  "guide": "not needed",
  "entrance_min": 15000,
  "entrance_max": 20000,
  "guide_min": 0,
  "guide_max": 0,
  "base": "Purwokerto",
  "summary": "A short forest walk from Kalipagu village to a twin-drop waterfall with a heart-shaped viewing deck — Banyumas's most Instagrammed cascade, fed by the same mountain water that powers the Ketenger plant below.",
  "highlights": "Twin falls & photo deck; easy add-on to the Ketenger waterworks trail; village coffee stalls",
  "bring": "Sandals with grip, light rain layer",
  "warnings": "Deck gets crowded on Sundays. Trail is muddy after rain.",
  "gmaps": "Curug Jenggala",
  "getting": [
   {
    "from": "Yogyakarta",
    "route": "Train to Purwokerto, Grab/ojek 40 min to Kalipagu",
    "duration": "4–4.5 h",
    "cost": "Rp 100.000–300.000"
   },
   {
    "from": "Jakarta",
    "route": "Train to Purwokerto, Grab/ojek 40 min",
    "duration": "5.5–6 h",
    "cost": "Rp 200.000–420.000"
   },
   {
    "from": "Bandung",
    "route": "Train to Purwokerto, Grab/ojek 40 min",
    "duration": "5 h",
    "cost": "Rp 150.000–350.000"
   }
  ],
  "itinerary": [
   {
    "time": "08:30",
    "activity": "Park at Kalipagu, ticket, forest path in"
   },
   {
    "time": "09:00",
    "activity": "Waterfall & heart deck photos"
   },
   {
    "time": "10:00",
    "activity": "Coffee at village stall, walk out"
   }
  ]
 }
];
