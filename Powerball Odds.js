const genPlay = () => {
    const whiteBalls = new Set();
    while (whiteBalls.size < 5) {
        whiteBalls.add(Math.floor(Math.random() * 69) + 1);
    }
    const play = Array.from(whiteBalls).sort((a, b) => a - b);
    play.push(Math.floor(Math.random() * 26) + 1);
    return play;
}

// Helper function to check if two arrays are identical
const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, index) => val === arr2[index]);
}

let winner = genPlay(); // Keep as array for faster comparison
let playsPerDraw = 25;
let drawsPerWeek = 3
let win = null; // Use null instead of empty string for clarity
let drawsElap = 0;

// To prevent the script from running forever in a test environment, 
// you could add a maxDraws limit, but I'll leave it as per your logic.
do {
    for (let i = 0; i < playsPerDraw; i++) {
        let draw = genPlay();
        if (areArraysEqual(draw, winner)) {
            win = draw;
            break; // Stop buying tickets for this draw once we win!
        }
    }
    drawsElap += 1;
    
    // Optional: Log progress every 100,000 draws so you know it's working
    if (drawsElap % 1000000 === 0) {
        console.log(`Draws elapsed: ${drawsElap}... still searching.`);
    }

} while (win === null);

console.log("Winning Numbers:", winner.join(" "));
console.log("Ticket Won:     ", win.join(" "));
console.log("Weeks to Win:   ", Math.ceil(drawsElap / drawsPerWeek).toLocaleString())
console.log("Years to Win:   ", (Math.ceil(drawsElap / drawsPerWeek) / 52).toLocaleString())
console.log("Money Spent:    ", (drawsElap * playsPerDraw * 2).toLocaleString())
