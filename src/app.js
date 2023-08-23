const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    const detailedPlayers = players.map((name, index) => {
      const strength =getRandomStrength();
      const image = `./images/super-${index + 1}.png`;
      const type = index % 2 === 0 ? 'hero' : 'villain';
      return {
        name: name,
        strength: strength,
        image: image,
        type: type,
      };
    });
   // Instead of forloop use Map method
    // Code here
    return detailedPlayers;
  };


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    const filteredPlayers = players.filter((player) => player.type === type);

    const playerFragments = filteredPlayers.map((player) => {
      return `
        <div class="player">
          <img src="${player.image}" alt="">
          <div class="name">${player.name}</div>
          <div class="strength">${player.strength}</div>
        </div>
      `;
    });
  
    const fragment = playerFragments.join('');
    return fragment;
  };
 

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}