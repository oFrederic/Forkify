// Global app controller
import Search from "./models/Search.js";

/**
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlsearch = async () => {
  // 1. Get query from view
  const query = "Pizza"; //TODO

  if (query) {
    // 2. New search object and add to state
    state.search = new Search(query);

    // 3. Prepare UI for results

    // 4. Search for recipes
    await state.search.getResults();

    // 5. Render recults on UI
    console.log(state.search.results);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlsearch();
});
