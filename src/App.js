import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((characters) => this.setState({ characters: characters.results }));
  }
  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacter = characters.filter((character) =>
      character.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Rick and Morty's Characters Library</h1>
        <SearchBox
          placeholder="Search name"
          handleChange={(e) => this.setState({ searchfield: e.target.value })}
        />
        <CardList monsters={filteredCharacter} />
      </div>
    );
  }
}

export default App;
