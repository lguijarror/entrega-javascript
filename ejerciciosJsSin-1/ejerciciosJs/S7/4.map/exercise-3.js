const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const listaCiudades = cities.map ((city) => {
    if (city.isVisited === true) {
        return (city.name = city.name + " (Visitado)");
    }
    return city.name;
});

console.log(listaCiudades);