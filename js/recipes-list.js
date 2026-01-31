// Get the container elements
const listEl = document.getElementById("recipes-list");
const filterNav = document.getElementById("category-filters");

// Helper: extract unique tags by category
const types = [...new Set(recipes.flatMap(r => r.tags.type || []))];
const meals = [...new Set(recipes.flatMap(r => r.tags.meal || []))];
const difficulties = [...new Set(recipes.flatMap(r => r.tags.difficulty || []))];

// Create filter dropdowns
function createDropdown(label, options, filterKey) {
  const wrapper = document.createElement("div");
  wrapper.className = "filter-dropdown";
  
  const labelEl = document.createElement("label");
  labelEl.textContent = label;
  
  const select = document.createElement("select");
  select.id = `filter-${filterKey}`;
  
  // Add "All" option
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "Alle";
  select.appendChild(allOption);
  
  // Add options
  options.forEach(option => {
    const optionEl = document.createElement("option");
    optionEl.value = option;
    optionEl.textContent = option;
    select.appendChild(optionEl);
  });
  
  // Add change listener
  select.addEventListener("change", applyFilters);
  
  wrapper.appendChild(labelEl);
  wrapper.appendChild(select);
  filterNav.appendChild(wrapper);
}

// Create all dropdowns
createDropdown("Type", types, "type");
createDropdown("Måltid", meals, "meal");
createDropdown("Sværhedsgrad", difficulties, "difficulty");

// Apply filters based on all dropdown values
function applyFilters() {
  const selectedType = document.getElementById("filter-type").value;
  const selectedMeal = document.getElementById("filter-meal").value;
  const selectedDifficulty = document.getElementById("filter-difficulty").value;
  
  const filtered = recipes.filter(recipe => {
    const matchesType = !selectedType || recipe.tags.type.includes(selectedType);
    const matchesMeal = !selectedMeal || recipe.tags.meal.includes(selectedMeal);
    const matchesDifficulty = !selectedDifficulty || recipe.tags.difficulty.includes(selectedDifficulty);
    
    return matchesType && matchesMeal && matchesDifficulty;
  });
  
  renderRecipes(filtered);
}

// Function to render recipe cards
function renderRecipes(recipesToRender) {
  listEl.innerHTML = ""; // Clear previous recipes

  recipesToRender.forEach(recipe => {
    const article = document.createElement("article");
    article.className = "recipe-card";

    // Combine all tags for display
    const allRecipeTags = [
      ...(recipe.tags.type || []),
      ...(recipe.tags.meal || []),
      ...(recipe.tags.difficulty || [])
    ];
    
  article.innerHTML = `
      <a href="recipe.html?id=${recipe.id}">
      ${recipe.image && recipe.image !== "TBD"
        ? `<img src="${recipe.image}" alt="${recipe.title}">`
        : ""
      }
      ${allRecipeTags.length > 0
        ? allRecipeTags.map(tag => `<span class="category">${tag}</span>`).join('')
        : ""
      }        
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
    </a>
  `;

    listEl.appendChild(article);
  });
}

// Initial render: all recipes
renderRecipes(recipes);