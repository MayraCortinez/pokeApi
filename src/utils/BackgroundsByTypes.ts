export type PokeTypes =
  | "normal"
  | "fighting"
  | "flying"
  | "ground"
  | "poison"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

  export const background: { [key: string]: string } = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    ground: "#E0C068",
    poison: "#A040A0",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
    shadow: "#5A5366",
    All: "#000000", // Agrega la propiedad "All" con un valor de color deseado
  };
  