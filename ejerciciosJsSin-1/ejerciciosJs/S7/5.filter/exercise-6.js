const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const gamesWithLegends = streamers.
    filter(game => game.gameMorePlayed.includes('Legends'))
    .filter(game => game.gameMorePlayed = game.age > 35 ? game.gameMorePlayed.toUpperCase() : game.gameMorePlayed);

// OTRA OPCION:
//
//for (let i=0; i < gamesWithLegends.length; i++){
//    if (gamesWithLegends[i].age > 35) {
//        gamesWithLegends[i].gameMorePlayed = gamesWithLegends[i].gameMorePlayed.toUpperCase();
//    }
//};

//RESOLUCION IVAN
//
//const streamersFiltered = streamers.filter((streamer) => {
//    const filtered = streamer.gameMorePlayed.includes('Legends');
//
//    if (streamer.age > 35) {
//        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//    }
//    return filtered;
//});
console.log (gamesWithLegends);