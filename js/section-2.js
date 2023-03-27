// Insert 11 players
playerList = ["Sricharan","Hari Haran", "Vasanth", "Poorna", "James", "Mukund", "Gokul", "Abdul", "Hari Booba", "Charan Raj", "Kumeresh"];

// Remove First player
playerList.shift();

// No. of players
playerList.length;

// Push new Player
playerList.push("Nachiappan");

// Sort player list
playerList.sort();

// Assign random numbers to players
for(let i=0; i<playerList.length; i++) {
    console.log(playerList[i]+" : "+Math.floor((Math.random()*100)+1));
}

// Store player name and jersey number
var playerMap = {};
for(let i=0; i<playerList.length; i++) {
    playerMap[playerList[i].toUpperCase()] = Math.floor((Math.random() * 100) + 1);
}

console.log(playerMap);

