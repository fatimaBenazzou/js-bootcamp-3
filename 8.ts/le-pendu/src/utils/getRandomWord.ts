import words from "../wordList.json";

export default function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
