// Get the container
const container = document.getElementById("recipe-container");

// Read recipe ID from URL query string
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

// Find the recipe in data
const recipe = recipes.find(r => r.id === recipeId);

if (!recipe) {
  container.innerHTML = "<p>Recipe not found.</p>";
} else {
  // Function to render subSteps with fold/expand
  const renderSubSteps = (subSteps) => {
    if (!subSteps) return "";
    return Object.entries(subSteps).map(([section, steps], index) => `
      <div class="substep-section">
        <h4 class="substep-header" data-index="${index}">
          ${section.charAt(0).toUpperCase() + section.slice(1)}
          <span class="arrow">▼</span>
        </h4>
        <ol class="substep-list">
          ${steps.map(s => `<li>${s}</li>`).join("")}
        </ol>
      </div>
    `).join("");
  };

container.innerHTML = `
    ${recipe.image 
        ? `<img src="${recipe.image}" alt="${recipe.title}">` 
        : ""}
    <h2>${recipe.title}</h2>
    <p>${recipe.description}</p>

    <h3>Ingredienser</h3>
    <ul>
      ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Fremgangsmåde</h3>
    ${recipe.subSteps 
      ? renderSubSteps(recipe.subSteps) 
      : `<ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>`
    }

    ${recipe.prepTime || recipe.cookTime ? `
      <h3>Tid</h3>
      <p>
        ${recipe.prepTime ? `⏱️ Forberedelsestid: ${recipe.prepTime}` : ""} 
        ${recipe.cookTime ? `⏰ Ventetid: ${recipe.cookTime}` : ""}
      </p>
    ` : ""}
  `;

  // Add fold/expand functionality
  const headers = container.querySelectorAll(".substep-header");
  headers.forEach(header => {
    const list = header.nextElementSibling;

    header.addEventListener("click", () => {
      const isOpen = list.classList.contains("open");
      
      if (isOpen) {
        list.classList.remove("open");
        header.classList.remove("open");
      } else {
        list.classList.add("open");
        header.classList.add("open");
      }
    });
  });
}