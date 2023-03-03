import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  let offset = 0;

  const loadMorePokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then(({ data }) => {
        let pokemon = [];
        data.results.forEach((p) => pokemon.push(p.name));
        setPokemons((prevPokemon) => [...prevPokemon, ...pokemon]);
      });
    offset += 10;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePokemon();
    }
  };

  useEffect(() => {
    loadMorePokemon();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {pokemons.map((name, index) => (
        <ul className="item">
          <li key={index}> {name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
