const recipes = [
  {
  id: "Koldhævede_Boller",
    title: "Koldhævede Boller",
    description: "Lækre bløde koldhævede boller, perfekt til morgenbordet.",
    image: "images/recipes/koldhaevede-bollver.v2.jpg", // optional
    tags: {
      type: ["Boller"],
      meal: ["Frokost"],
      difficulty: ["Nem"]
    },
    prepTime: "8-12 timer",
    cookTime: "17-25 minutter",
    ingredients: [
      "20g gær eller 8g tørgær",
      "10g salt",
      "30g honning",
      "10g olivenolie",
      "30g fiberhusk",
      "6,5 dl lunkent vand",
      "120g havremel, boghvede- eller fuldkornsrismel",
      "30g majsstivelse",
      "300g rød finax",      
    ],
    steps: [
      "Mix gær vand, honning og salt",
      "Tilsæt fiberhusk og rør til du har en fast masse",
      "Tilsæt de tørre ingredienser rør til du har en homogen masse - Jeg mikser normalt op til 15 minutter",
      "Form bollerne og lad dem hæve i køleskabet natten over",
      "Tag bollerne ud og lad dem tempere i 1 time inden bagning",
      "Bag bollerne ved 230 grader i 17-25 minutter"
    ]
  },
   {
    id: "kanelsnurrer",
    title: "Kanelsnurrer",
    description: "Bløde og saftige glutenfri kanelsnurrer med klassisk remonce og masser af smag.",
    image: "images/recipes/Kanelsnurre.jpg", // optional
    tags: {
      type: ["Kage"],
      meal: ["Dessert"],
      difficulty: ["Svær"]
    },
    prepTime: "30",            // minutter (aktiv tid)
    cookTime: "15-18",         // minutter
    ingredients: [
      "25 g gær",
      "300 ml lunkent vand",
      "2 spsk fiberhusk",
      "2 spsk sukker",
      "1 tsk salt",
      "1 tsk kardemomme",
      "1 æg",
      "3 dl fuldkornsrismel",
      "3 dl rød Finax",
      "75 g smør, smeltet",
      "120 g smør (remonce)",
      "120 g rørsukker",
      "2 spsk kanel (evt. lidt kardemomme)"
    ],
    steps: [
      "Rør gær og lunkent vand sammen, indtil gæren er opløst.",
      "Tilsæt fiberhusk, rør godt rundt og lad blandingen stå i 5-10 minutter.",
      "Tilsæt sukker, salt, kardemomme og æg, og rør det godt sammen.",
      "Tilsæt begge meltyper samt det smeltede smør.",
      "Rør dejen grundigt, indtil konsistensen er fast og ensartet.",
      "Dæk skålen til og lad dejen hæve i 45 minutter.",
      "Rør smør, rørsukker og kanel sammen til en jævn remonce.",
      "Drys lidt mel på bordet og rul dejen ud til en stor firkant.",
      "Fordel remoncen jævnt over dejen.",
      "Fold dejen ind mod midten, så der dannes tre lag.",
      "Skær dejen i strimler på ca. 1-1,5 cm og rul dem til den ønskede form.",
      "Lad kanelsnurrerne efterhæve i 45 minutter.",
      "Bag ved 200 °C i 15-18 minutter, indtil de er let gyldne."
    ]
  },
  {
  id: "sprød-nødde-granola",
  title: "Sprød nødde-granola",
  description: "Hjemmelavet sprød granola med mandler, pekannødder og kokos - let sødet med sirup og bagt i ovnen til perfekte klumper.",
  image: "images/recipes/Granola.v1.jpg",
  tags: {
    type: ["Morgenmad", "Granola"],
    meal: ["Morgenmad", "Snack"],
    difficulty: ["Nem"]
  },
  prepTime: "10 minutter",
  cookTime: "18–22 minutter",
  ingredients: [
    "1 dl mandler, groft hakket",
    "1 dl pekannødder, groft hakket",
    "½ dl sirup (ahorn eller lys)",
    "1 spsk neutral olie eller smeltet kokosolie",
    "½ dl kokosflager (eller 2-3 spsk kokosmel)",
    "2½ dl grovvalsede havregryn",
    "½ dl solsikkekerner",
    "½ dl græskarkerner",
    "½ tsk kanel",
    "½ tsk fint salt",
    "Evt. chokolade (tilsat efter afkøling)"
  ],
  steps: [
    "Forvarm ovnen til 175 °C (varmluft 165 °C)",
    "Kom mandler og pekannødder på en pande sammen med sirup og olie",
    "Varm op ved middel varme, til siruppen bobler let og dækker nødderne (1-2 minutter)",
    "Tilsæt kokos, kanel og salt og rør hurtigt rundt",
    "Tag panden af varmen og vend havregryn, solsikkekerner og græskarkerner i, til alt er jævnt coated",
    "Fordel blandingen i et jævnt lag på en bageplade med bagepapir",
    "Bag granolaen i ovnen i 18-22 minutter",
    "Vend efter ca. 8 minutter",
    "Vend evt. igen efter yderligere 6 minutter",
    "Lad granolaen ligge urørt de sidste 6-8 minutter, så der dannes sprøde klumper",
    "Tag granolaen ud, når den er gylden og dufter nøddeagtigt",
    "Lad granolaen køle helt af på bagepladen",
    "Tilsæt evt. chokolade, når granolaen er helt kold"
  ]
},
{
    id: "Pølsehorn",
    title: "Pølsehorn",
    description: "Lækre glutenfrie pølsehorn, perfekte til madpakken eller som snack.",
    image: "images/recipes/poelsehornv1.jpg", // optional
    tags: {
      type: ["Snack"],
      meal: ["Frokost"],
      difficulty: ["Nem"]
    },
    prepTime: "15 minutter",              // minutes, optional
    cookTime: "50 minutter",              // minutes, optional
    ingredients: [
      "25g gær",
      "3dl lunkent vand",
      "20g fiberhusk",
      "1 tsk. salt",
      "1 tsk. honning",
      "3 spsk. olivenolie",
      "75g havre- eller boghvedemel",
      "175g rød finax",
      "5 stk pølser",
      "1 æg til pensling",
    ],
    steps: [
      "Rør vand og gær sammen",
      "Tilsæt fiberhusk og rør til det er en gele",
      "Tilsæt olie, honning og salt",
      "Tilsæt mel og rør til det har en homogen masse - Jeg rører ofte i 15 minutter",
      "Fordel lidt mel på bordet",
      "Del dejen i 10 lige store portioner og rul dem ud på lidt mel",
      "Læg pølserne på dejen og rul dem ind",
      "Lad bollerne hæve i 30 minutter",
      "Pensl med æg og bag ved 200 grader i 15-20 minutter",
    ]
  },
  {
    id: "pizza",
    title: "Glutenfri Pizza",
    description: "Nem og luftig glutenfri pizzadej, der kan formes med ske og bages sprød - perfekt til hjemmelavet pizza.",
    image: "images/recipes/Pizza.jpg", // optional
    tags: {
      type: ["Pizza"],
      meal: ["Aftensmad"],
      difficulty: ["Nem"]
    },
    prepTime: "25",     // minutter (inkl. hævning)
    cookTime: "15",     // minutter i alt
    ingredients: [
      "1,5 tsk salt",
      "2 tsk sukker",
      "25 g gær",
      "0,5 dl olivenolie",
      "3,5 dl lunkent vand",
      "7 dl rød Finax",
      "Evt. 1-1,5 dl grovere mel eller havregryn (kan erstatte en del af Finax)"
    ],
    steps: [
      "Bland salt, sukker, olivenolie og gær i en skål, og rør indtil gæren er opløst.",
      "Tilsæt det lunkne vand og rør godt rundt.",
      "Tilsæt melet lidt ad gangen under omrøring.",
      "Rør eller ælt dejen i ca. 5 minutter, til den er ensartet.",
      "Brug en våd ske eller dejskraber til at forme 3 pizzabunde på bagepapir.",
      "Prik huller i dejen med en gaffel.",
      "Lad bundene hæve i ca. 20 minutter.",
      "Forvarm ovnen til 200 °C.",
      "Forbag pizzabundene i ca. 7 minutter, gerne på bagestål.",
      "Skru ovnen op på 250 °C, tilsæt fyld og bag pizzaerne færdige, gerne på bagestål."
    ]
  },
  {
    id: "Koldhævet grydebrød",
    title: "Koldhævet grydebrød",
    description: "Saftigt glutenfrit grydebrød med mørk skorpe. Optimeret til bagegryde.",
    image: "images/recipes/Grydebrød.jpg",
    tags: {
      type: ["Brød"],
      meal: ["Morgenmad", "Frokost"],
      difficulty: ["Medium"]
    },
    prepTime: "20 minutter",
    cookTime: "60 minutter",
    ingredients: [
      "4,2 dl lunkent vand",
      "30 g honning",
      "8,5 g gær",
      "18 g psyllium",
      "225 g Finax rød",
      "90 g fuldkornsrismel",
      "22 g majsstivelse",
      "7,5 g salt",
      "15 g neutral olie",
      "4,5 g æblecidereddike"
    ],
    steps: [
      "Rør psyllium ud i vandet og lad det stå 2-3 minutter, til det bliver en tyk gel",
      "Rør honning og gær i psyllium-gelen",
      "Tilsæt olie og æblecidereddike",
      "Bland alle tørre ingredienser i en separat skål",
      "Rør det hele sammen til en tyk, klæbrig, men stabil dej",
      "Lad dejen hæve tildækket ved stuetemperatur i 75-90 minutter (bulk-hævning)",
      "Sæt dejen i køleskab og koldhæv i ca. 6 timer",
      "Tag dejen ud af køleskabet og lad den temperere i 45 minutter",
      "Vend dejen forsigtigt ud på bagepapir og form den let rund eller oval uden at ælte",
      "Forvarm ovn og bagegryde med låg til 250 grader i mindst 45 minutter",
      "Løft brødet ned i den varme gryde med bagepapir og læg låg på",
      "Bag i 25 minutter ved 250 grader med låg",
      "Tag låget af, skru ned til 225 grader og bag yderligere 20 minutter i gryden",
      "Tag brødet helt ud af gryden og bag direkte på ovnrist i 12-15 minutter",
      "Evt. kan du vende brødet de sidste 5-10 minutter for at undgå en gummi kant i bunden af brødet",
      "Afkøl brødet helt på rist i mindst 2-3 timer før udskæring"
    ]
  },
  {
    id: "joses-broed",
    title: "Jose's boller",
    description: "Bløde og luftige glutenfri boller, velegnede til morgenmad eller som hverdagsbrød.",
    image: "images/recipes/Boller.jpg",
    tags: {
      type: ["Brød"],
      meal: ["Morgenmad", "Frokost"],
      difficulty: ["Nem"]
    },
    prepTime: "10 minutter",
    cookTime: "95 minutter",
    ingredients: [
      "4,5 dl lunkent vand",
      "50 g gær",
      "1 spsk fiberhusk",
      "2 æg",
      "2 tsk sukker",
      "1 tsk salt",
      "7 dl rød Finax",
      "2 dl havremel, havregryn eller kerner",
      "1 dl majsstivelse (Maizena)"
    ],
    steps: [
      "Rør det lunkne vand og gæren sammen i en stor skål, indtil gæren er opløst",
      "Tilsæt fiberhusk og rør grundigt, til massen bliver en gelé",
      "Tilsæt æg, sukker og salt og rør det hele godt sammen",
      "Tilsæt majsstivelse og mel, og rør dejen grundigt i ca. 10-15 minutter, til den er ensartet",
      "Dæk skålen til og lad dejen hæve i 30 minutter ved stuetemperatur",
      "Tænd ovnen på 250 grader over/undervarme",
      "Form dejen til boller med våde hænder og læg dem på en bageplade med bagepapir",
      "Lad bollerne efterhæve i ca. 30 minutter",
      "Bag bollerne midt i ovnen i 12-15 minutter, til de er let gyldne og gennembagte",
      "Lad bollerne køle af på rist før servering"
    ]
  },
  {
  id: "glutenfri-wraps-boghvede",
  title: "Glutenfri boghvede-wraps",
  description: "Bløde og smidige glutenfri wraps lavet på boghvedemel og psyllium, perfekte til fyld eller som snack.",
  image: "images/recipes/Tortillas.jpg",
  tags: {
    type: ["Brød", "Wraps"],
    meal: ["Frokost", "Aftensmad"],
    difficulty: ["Nem"]
  },
  prepTime: "15 minutter",
  cookTime: "10 minutter",
  ingredients: [
    "190-200 ml varmt vand",
    "2 tsk psyllium (fiberhusk)",
    "1½ spsk græsk yoghurt (10 % hvis muligt)",
    "1 spsk olivenolie",
    "1½ tsk honning",
    "180 g boghvedemel",
    "20 g tapiokastivelse",
    "½ tsk salt"
  ],
  steps: [
    "Rør psyllium/fiberhusk ud i det lunkne vand og lad det stå 5-10 minutter, til det bliver geleagtigt",
    "Tilsæt yoghurt, honning og olie, og rør godt",
    "Tilsæt boghvedemel, tapiokastivelse og salt, og rør til en blød, smidig og let klistret dej (juster evt. med 1-2 spsk vand)",
    "Lad dejen hvile i 15 minutter",
    "Del dejen i 8 stykker og rul hvert stykke ud til 1-2 mm tykkelse",
    "Bag wraps på en middelvarm, tør pande i 30-40 sekunder på hver side",
    "Læg de færdigbagte wraps i et viskestykke og pak dem ind, så de holder på varmen og bliver bløde"
  ],
  subSteps: {
    dej: [
      "Rør psyllium/fiberhusk ud i det lunkne vand og lad det stå 5-10 minutter, til det bliver geleagtigt",
      "Tilsæt yoghurt, honning og olie, og rør godt",
      "Tilsæt boghvedemel, tapiokastivelse og salt, og rør til en blød, smidig og let klistret dej (juster evt. med 1-2 spsk vand)",
      "Lad dejen hvile i 15 minutter"
    ],
    formningOgBagning: [
      "Del dejen i 8 stykker og rul hvert stykke ud til 1-2 mm tykkelse",
      "Bag wraps på en middelvarm, tør pande i 30-40 sekunder på hver side",
      "Læg de færdigbagte wraps i et viskestykke og pak dem ind, så de holder på varmen og bliver bløde"
    ]
  }
},
  {
  id: "billige-boller-bagestaal",
  title: "Boller på budget - normal hævning (bagestål)",
  description: "Luftige og sprøde glutenfri boller med normal hævning, bagt direkte på bagestål for maksimal skorpe og god bund.",
  image: "images/recipes/det-billige-brød.v1.jpg",
  tags: {
    type: ["Brød", "Boller"],
    meal: ["Morgenmad", "Frokost"],
    difficulty: ["Nem"]
  },
  prepTime: "25 minutter",
  cookTime: "15 minutter",
  ingredients: [
    "400 ml lunt vand (30-35 °C)",
    "10 g fiberhusk (ca. 2 spsk)",
    "25 g frisk gær",
    "20 g olivenolie (ca. 1 spsk)",
    "20 g honning (ca. 1 spsk)",
    "1 æg (valgfrit)",
    "160 g glutenfri havremel",
    "160 g majsstivelse",
    "40 g kartoffelmel",
    "20 g havregryn",
    "20 g solsikkekerner",
    "1 tsk salt (ca. 5 g)"
  ],
  steps: [
    "Opløs gæren i det lunkne vand og rør honning og olivenolie i. Hvis du bruger æg, piskes det med her",
    "Bland havremel, majsstivelse, kartoffelmel, fiberhusk, havregryn, solsikkekerner og salt i en separat skål",
    "Hæld væsken over de tørre ingredienser og rør grundigt, til dejen er ensartet og klistret",
    "Lad dejen hvile 10-15 minutter ved stuetemperatur, så fiberhusken kan absorbere væsken og danne struktur",
    "Dæk skålen til og lad dejen hæve 30-45 minutter ved stuetemperatur, til den er tydeligt luftig (ca. 50-70 % volumenøgning)",
    "Forvarm ovn og bagestål til 250-270 °C i mindst 45-60 minutter, så bagestålet er helt gennemvarmet",
    "Form bollerne med fugtige hænder og læg dem på bagepapir. Pensl evt. med vand eller æg og drys solsikkekerner på toppen",
    "Sæt bollerne direkte ind på bagestålet med bagepapir og giv damp de første 5-7 minutter",
    "Bag bollerne i 14-18 minutter, til de er gyldne og let sprøde",
    "Hold øje med bunden og juster evt. temperaturen de sidste minutter, så den ikke bliver for mørk"
  ]
},
{
  id: "billige-boller-koldhaevet-bagestaal",
  title: "Boller på budget - koldhævet (bagestål)",
  description: "Glutenfri boller koldhævet natten over for ekstra smag og struktur, bagt direkte på bagestål for sprød skorpe og god bund.",
  image: "images/recipes/det-billige-brød.v1.jpg",  
  tags: {
    type: ["Brød", "Boller"],
    meal: ["Morgenmad", "Frokost"],
    difficulty: ["Nem"]
  },
  prepTime: "20 minutter",
  cookTime: "15-20 minutter",
  ingredients: [
    "400 ml koldt vand (350 ml hvis du bruger æg)",
    "5-10 ml æblecidereddike (valgfrit)",
    "8 g fiberhusk (ca. 2 spsk)",
    "10 g frisk gær",
    "20 g olivenolie (ca. 1 spsk)",
    "20 g honning (ca. 1 spsk)",
    "1 æg (valgfrit)",
    "160 g glutenfri havremel",
    "160 g majsstivelse",
    "40 g kartoffelmel",
    "20 g havregryn",
    "20 g solsikkekerner",
    "1 tsk salt (ca. 5 g)"
  ],
  steps: [
    "Opløs gæren i det kolde vand og rør honning og olivenolie i. Hvis du bruger æg, piskes det med her",
    "Bland havremel, majsstivelse, kartoffelmel, fiberhusk, havregryn, solsikkekerner og salt i en separat skål",
    "Hæld væsken over de tørre ingredienser og rør grundigt, til dejen er ensartet og klistret",
    "Dæk skålen til og sæt dejen i køleskabet til koldhævning i 8-12 timer (eller natten over)",
    "Forvarm ovn og bagestål til 250-270 °C i mindst 45-60 minutter, så bagestålet er helt gennemvarmet",
    "Form bollerne med fugtige hænder og læg dem på bagepapir. Pensl evt. med vand eller æg og drys solsikkekerner på toppen",
    "Sæt bollerne direkte ind på bagestålet med bagepapir og giv damp de første 5-7 minutter",
    "Bag bollerne i 15-20 minutter, til de er gyldne og let sprøde",
    "Hold øje med bunden og juster evt. temperaturen de sidste minutter, så den ikke bliver for mørk"
  ]
},
  {
    id: "hveder",
    title: "Hveder",
    description: "Klassiske glutenfri hveder med kardemomme - bløde og luftige, perfekte ristede dagen efter.",
    image: "images/ui/website-logo.png",
    tags: {
      type: ["Snack", "Boller"],
      meal: ["Morgenmad","Frokost"],
      difficulty: ["Nem"]
    },
    prepTime: "25 minutter",
    cookTime: "8 minutter",
    ingredients: [
      "50 g gær",
      "5 dl mælk",
      "50 g blødt smør",
      "2 spsk fiberhusk",
      "1-2 tsk stødt kardemomme",
      "1 tsk salt",
      "10-12 dl rød Finax"
    ],
    steps: [
      "Smuldr gæren i en stor skål",
      "Varm mælken op til lunken temperatur og rør smørret i, til det er smeltet",
      "Hæld mælkeblandingen over gæren og rør, til gæren er opløst",
      "Tilsæt fiberhusk og rør godt rundt, lad det trække i ca. 10 minutter, til massen bliver geléagtig",
      "Tilsæt salt, kardemomme og størstedelen af melet",
      "Rør dejen grundigt sammen, til den er ensartet",
      "Dæk skålen til og lad dejen hæve i ca. 30 minutter ved stuetemperatur",
      "Drys lidt mel på bordet og ælt dejen let igennem",
      "Form dejen til ca. 20 boller og læg dem på en bageplade med bagepapir",
      "Lad bollerne hæve yderligere i ca. 30 minutter",
      "Bag hvederne midt i ovnen ved 250 grader over/undervarme i ca. 8 minutter",
      "Lad bollerne køle af på rist"
    ]
},
  {
    id: "chokoladeboller",
    title: "Chokoladeboller",
    description: "Bløde glutenfri chokoladeboller med mørk chokolade - perfekte som kage eller snack.",
    image: "images/ui/website-logo.png",
    tags: {
      type: ["Kage"],
      meal: ["Dessert"],
      difficulty: ["Nem"]
    },
    prepTime: "20 minutter",
    cookTime: "20 minutter",
    ingredients: [
      "5 dl lunkent vand",
      "25 g gær",
      "20 g fiberhusk",
      "1 tsk stødt kardemomme",
      "1 spsk agavesirup",
      "50 g smør, smeltet",
      "1 tsk salt",
      "450 g rød Finax",
      "60-80 g mørk chokolade, grofthakket",
      "1 æg til pensling"
    ],
    steps: [
      "Rør det lunkne vand og gæren sammen i en stor skål, til gæren er helt opløst",
      "Tilsæt fiberhusk og rør grundigt, lad massen trække i ca. 10 minutter, til den bliver geléagtig",
      "Tilsæt kardemomme, salt, agavesirup og det smeltede smør, og rør godt sammen",
      "Tilsæt melet og rør, til dejen er samlet og ensartet",
      "Tilsæt den hakkede chokolade og vend den forsigtigt ind i dejen med en dejskraber",
      "Form dejen til boller med våde hænder og læg dem på en bageplade med bagepapir",
      "Lad bollerne hæve i ca. 40 minutter ved stuetemperatur",
      "Tænd ovnen på 200 grader varmluft",
      "Pensl bollerne med sammenpisket æg",
      "Bag bollerne midt i ovnen i ca. 15-20 minutter, til de er let gyldne og gennembagte",
      "Lad bollerne køle af på rist"
    ]
  },
  {
    id: "Drømmekage",
    title: "Drømmekage",
    description: "En klassisk og svampet glutenfri drømmekage med lækkert kokosfyld.",
    image: "images/ui/website-logo.png", // optional – ret navnet hvis nødvendigt
    tags: {
      type: ["Kage"],
      meal: ["Dessert"],
      difficulty: ["Nem"]
    },
    prepTime: "20",          // minutter (ca.)
    cookTime: "25",          // minutter i alt
    ingredients: [
      "3 æg",
      "300 g sukker",
      "2 tsk fiberhusk",
      "1 tsk vaniljesukker",
      "50 g smeltet smør",
      "2 dl mælk",
      "200 g rød Finax",
      "3 tsk bagepulver",
      "100 g smør (fyld)",
      "100 g brun farin (fyld)",
      "100 g kokos (fyld)"
    ],
    steps: [
      "Pisk æg, sukker, fiberhusk og vaniljesukker til en tyk og luftig masse. Brug evt. en håndmikser.",
      "Smelt smørret og bland det sammen med mælken.",
      "Bland rød Finax og bagepulver i en separat skål.",
      "Vend smør- og melblandingen skiftevis i æggemassen med en dejskraber. Si melet i for at undgå klumper.",
      "Hæld dejen i en kageform og bag ved 200 °C i ca. 20 minutter.",
      "Imens kagen bager, forberedes fyldet ved at smelte smørret og tilsætte brun farin og kokos.",
      "Tag kagen ud af ovnen, skru ovnen op på 225 °C, og fordel fyldet jævnt over kagen.",
      "Bag kagen yderligere ca. 5 minutter, indtil fyldet er let gyldent."
    ],
  },
  {
    id: "fladbrod",
    title: "Fladbrød",
    description: "Nem og hurtig glutenfri fladbrød lavet på græsk yoghurt - perfekt som tilbehør eller wrap.",
    image: "images/ui/website-logo.png", // optional
    tags: {
      type: ["Brød"],
      meal: ["Frokost", "Aftensmad"],
      difficulty: ["Nem"]
    },
    prepTime: "10",        // minutter
    cookTime: "10",        // minutter
    ingredients: [
      "130 g græsk yoghurt",
      "150 g rød Finax",
      "2 tsk bagepulver",
      "1,5 tsk salt",
      "Olie til stegning"
    ],
    steps: [
      "Bland alle ingredienserne i en skål og ælt dejen, indtil den har en fast og sammenhængende konsistens.",
      "Drys lidt mel på bordet og rul dejen ud med en kagerulle.",
      "Skær eller form dejen til flade brød i ønsket størrelse.",
      "Opvarm en pande med lidt olie ved middel varme.",
      "Læg fladbrødene på panden og pensl toppen med olie, inden de vendes.",
      "Steg fladbrødene, til de er gyldne på begge sider."
    ],
  },
{
  id: "glutenfri-fastelavnsboller-vanilje",
  title: "Glutenfri fastelavnsboller med vaniljecreme",
  description: "Bløde glutenfri fastelavnsboller fyldt med klassisk remonce og hjemmelavet vaniljecreme, toppet med glasur.",
  tags: {
    type: ["Kage", "Boller"],
    meal: ["Dessert"],
    difficulty: ["Medium"]
  },
  prepTime: "45 minutter",
  cookTime: "14-16 minutter",
  ingredients: [
    // Dej
    "25 g gær",
    "1,5 dl vand",
    "1,5 dl mælk",
    "20 g fiberhusk",
    "1 tsk salt",
    "25 g sukker",
    "1½ tsk kardemomme",
    "40 g smør",
    "75 g havre- eller boghvedemel",
    "175 g Finax rød",
    "1 æg (valgfrit i dejen)",
    "1 æg til pensling",
    
    // Remonce
    "50 g smør",
    "50 g sukker",
    "1 tsk majsstivelse",
    "½ tsk vanilje",
    
    // Vaniljecreme
    "2 dl mælk",
    "1 æggeblomme",
    "30 g sukker",
    "15 g majsstivelse",
    "½ tsk vanilje",
    "15 g smør",
    
    // Glasur
    "150 g flormelis",
    "2-3 spsk vand eller mælk",
    "½ tsk citronsaft (valgfrit)"
  ],
  steps: [
    // Lineær version af hele processen
    "Rør vand, mælk og fiberhusk sammen og lad det stå 5-10 minutter, til det bliver en tyk gel",
    "Opløs gæren i psyllium-gelen og tilsæt sukker, salt, kardemomme og smør",
    "Rør mel i og evt. æg, til dejen er blød, let klistret men tydeligt formbar",
    "Dæk dejen til og lad den hæve 30-45 minutter",
    "Rør smør og sukker sammen til remoncen, tilsæt majsstivelse og vanilje, evt. på køl 15-20 minutter",
    "Pisk vaniljecremen: æggeblomme, sukker, majsstivelse, vanilje, varm mælk op, pisk i, kog op, rør smør i, afkøl",
    "Del dejen i 8-10 stykker, rul let fladt, læg remonce og vaniljecreme i, luk bollerne",
    "Efterhæv 20-30 minutter, pensl med æg",
    "Bag ved 180 °C varmluft i 14-16 minutter, lad køle helt af",
    "Rør glasur af flormelis og vand/mælk, evt. citronsaft, og fordel på de afkølede boller"
  ],
  subSteps: {
    dej: [
      "Rør vand, mælk og fiberhusk sammen og lad det stå 5-10 minutter, til det bliver en tyk gel",
      "Opløs gæren i psyllium-gelen",
      "Tilsæt sukker, salt, kardemomme og smør",
      "Rør mel i og evt. æg, til dejen er blød, let klistret men tydeligt formbar",
      "Dæk dejen til og lad den hæve 30-45 minutter ved stuetemperatur"
    ],
    remonce: [
      "Rør smør og sukker sammen til en luftig masse",
      "Tilsæt majsstivelse og vanilje og rør til en ensartet creme",
      "Sæt evt. remoncen på køl i 15-20 minutter for nemmere håndtering"
    ],
    vaniljecreme: [
      "Pisk æggeblomme, sukker, majsstivelse og vanilje sammen",
      "Varm mælken op til lige under kogepunktet og pisk den i æggemassen",
      "Hæld massen tilbage i gryden og kog op under konstant piskning, til cremen er meget tyk",
      "Tag gryden af varmen, rør smør i og lad cremen køle helt af"
    ],
    samling: [
      "Del dejen i 8-10 stykker og rul hvert stykke let fladt",
      "Læg remonce i midten og kom vaniljecreme ovenpå",
      "Luk bollerne grundigt og lad dem efterhæve 20-30 minutter",
      "Pensl bollerne med æg",
      "Bag ved 180 °C varmluft i 14-16 minutter, til de er let gyldne",
      "Lad bollerne køle helt af",
      "Rør flormelis sammen med vand eller mælk og evt. citronsaft til en glat glasur",
      "Fordel glasuren på de afkølede boller"
    ]
  }
},





];
