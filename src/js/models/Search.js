import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    try {
      const obj = await axios(
        `${proxy}https://recipesapi.herokuapp.com/api/search?q=${this.query}`
      );
      const results = obj.data.recipes;
      console.log(results);
    } catch (e) {
      alert(e);
    }
  }
}
