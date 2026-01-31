const tools = [
  "Røremaskine",
  "Røreskål",
  "Dejskraber",
  "Vægt",
  "Målebæger",
  "Sigt",
  "Bagepapir",
  "Hævekurv",
  "Kagerulle",
  "Bageform",
  "Pensel"
];

// Vi laver et simpelt JS loop, der genererer kortene
const container = document.getElementById("tools-container");

tools.forEach(tool => {
  // Opret kort div
  const card = document.createElement("div");
  card.className = "product-card";

  // Billede (placeholder for nu)
  const img = document.createElement("img");
  img.src = "#"; // Her kan du indsætte et billede per redskab senere
  img.alt = tool;
  card.appendChild(img);

  // Info div
  const info = document.createElement("div");
  info.className = "product-info";

  // Header
  const header = document.createElement("div");
  header.className = "product-header";

  const h2 = document.createElement("h2");
  h2.textContent = tool;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = "Redskab";

  header.appendChild(h2);
  header.appendChild(badge);
  info.appendChild(header);

  // Kort beskrivelse
  const shortDesc = document.createElement("p");
  shortDesc.className = "product-short";
  shortDesc.textContent = "Vigtigt redskab til glutenfri bagning.";
  info.appendChild(shortDesc);

  // Læs mere knap
  const btn = document.createElement("button");
  btn.className = "expand-btn";
  btn.textContent = "Læs mere";
  info.appendChild(btn);

  // Fold-ud sektion
  const extra = document.createElement("div");
  extra.className = "product-extra";

  const tip = document.createElement("p");
  tip.className = "product-tip";
  tip.textContent = "Tip: Brug altid friske ingredienser og hold redskaberne rene.";
  extra.appendChild(tip);

  const buy = document.createElement("a");
  buy.href = "#"; // evt. link til køb
  buy.target = "_blank";
  buy.className = "buy-btn";
  buy.textContent = "Køb nu";
  extra.appendChild(buy);

  info.appendChild(extra);

  card.appendChild(info);
  container.appendChild(card);
});

// Fold-ud funktionalitet
document.querySelectorAll(".expand-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const extra = btn.nextElementSibling;
    if(extra.style.display === "block"){
      extra.style.display = "none";
      btn.textContent = "Læs mere";
    } else {
      extra.style.display = "block";
      btn.textContent = "Skjul";
    }
  });
});