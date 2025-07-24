// Check even or odd number
// // Input Action
// const number = Number(prompt("Enter a number"));

// if (number % 2 === 0) {
//     console.log(number + " is Even");
// } else {
//     console.log(number + " is Odd");
// }

// Print odd numbers between an interval
// const min = Number(prompt("Enter a min value"));
// const max = Number(prompt("Enter a max value"));

// for (let index = min; index <= max; index++) {
//     if (index % 2 !== 0) {
//         console.log(index);
//     }
// }

// Print a multiplication table
// const n = Number(prompt("Enter a number"));

// for (let index = 1; index <= 10; index++) {
//     console.log(n + " * " + index + " = " + n * index);
// }

const playlist = ["Blinding Lights", "Levitating", "Save Your Tears", "Flowers"];

playlist.push("new song");
console.log(playlist);

const removedSong = playlist.shift();
console.log(removedSong);
console.log(playlist);

const movedSong = playlist.pop();
playlist.unshift(movedSong);
console.log(playlist);

const songSearch = prompt("Enter a song");
// const exist = playlist.includes(song);
var exist = false;

for (const song of playlist) {
    if (song.toLocaleLowerCase() === songSearch.toLocaleLowerCase()) {
        exist = true;
    }
}

if (exist) {
    console.log(songSearch + " is in the playlist");
} else {
    console.log(songSearch + " dosn't exist in the playlist");
}
