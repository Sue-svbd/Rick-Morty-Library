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

  // to generate range of numbers and characters
  *iterate(a, b) {
    for (let i = a; i <= b; i += 1) {
      yield i;
    }
  }

  range(a, b) {
    if (typeof a === "string") {
      let result = [...this.iterate(a.charCodeAt(), b.charCodeAt())].map((n) =>
        String.fromCharCode(n)
      );
      return result;
    } else {
      let result = [...this.iterate(a, b)];
      return result;
    }
  }

  makeHttpRequest = async () => {
    const charactersIds = this.range(1, 671);

    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${charactersIds}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    this.setState({
      characters: data,
    });
  };

  componentDidMount() {
    this.makeHttpRequest();
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
