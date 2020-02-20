import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import { ThemeContext } from "./Context/ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  // const { color, setColor } = useContext(ThemeContext);
  const [color, setColor] = useState("yellow"); // jest don't like context
  const onTheme = e => setColor(e.target.value);

  const onSetLoc = e => setLocation(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    reqPets();
  };

  function reqPets() {
    pet
      .animals({
        location,
        breed,
        type: animal
      })
      .then(({ animals }) => setPets(animals || []));
  }
  // const reqPets = async () => {
  //   const { animals } = await pet.animals({
  //     location,
  //     breed,
  //     type: animal
  //   });
  //   setPets(animals || []);
  // };

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedArr = apiBreeds.map(({ name }) => name);
      setBreeds(breedArr);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={onSetLoc}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select value={color} onChange={onTheme} onBlur={onTheme}>
            <option value="blue">Blue</option>
            <option value="peru">Peru</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: color }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
