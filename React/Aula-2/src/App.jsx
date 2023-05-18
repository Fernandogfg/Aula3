import React from "react";
import "./App.css";
import Movie1 from "./components/Movie1";
import Movie2 from "./components/Movie2";
import Movie3 from "./components/Movie3";
import Movie from "./components/Movie";
const filmes = [
  {
    title: "Transforms 1",
    diretor: "Michael Bay",
    ano: "2007",
    tempo: "2h 24m",
  },
  {
    title: "The Wolf of Snow Hollow",
    diretor: "Jim Cummings",
    ano: "2020",
    tempo: "1h 23m",
  },
  {
    title: "Pulp Fiction",
    diretor: "Quentin Tarantino",
    ano: "1994",
    tempo: "2h 34m",
  },
];
function App() {
  return (
    <div>
      <Movie1 />
      <Movie2 />
      <Movie3 />
      <Movie obj={filmes} />
    </div>
  );
}

export default App;
