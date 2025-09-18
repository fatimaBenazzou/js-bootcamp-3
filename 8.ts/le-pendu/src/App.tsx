import { useCallback, useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import getRandomWord from "./utils/getRandomWord";
import styles from "./App.module.css";
import Drawing from "./components/Drawing";
import { StatusMessage } from "./components/StatusMessage";
import { Toaster } from "react-hot-toast";
import { useKeyboardHandler } from "./hooks/useKeyboardHandler";

export default function App() {
    const [wordToGuess, setWordToGuess] = useState<string>(getRandomWord);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [gameState, setGameState] = useState<GameState>("playing");

    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
    const correctLetters = guessedLetters.filter((letter) => wordToGuess.includes(letter));

    useEffect(() => {
        if (incorrectLetters.length >= 6) {
            setGameState("lost");
        } else if (wordToGuess.split("").every((letter) => guessedLetters.includes(letter))) {
            setGameState("won");
        }
    }, [guessedLetters, wordToGuess, incorrectLetters]);

    const resetGame = useCallback(() => {
        setGuessedLetters([]);
        setWordToGuess(getRandomWord());
        setGameState("playing");
    }, []);

    const addGuessedLEtter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || gameState !== "playing") return;

            setGuessedLetters((current) => [...current, letter]);
        },
        [guessedLetters, gameState]
    );

    useKeyboardHandler({
        onLetter: addGuessedLEtter,
        onRestart: resetGame,
    });

    return (
        <>
            <Toaster />
            <main className={styles["app-container"]}>
                <h1>The Hangman</h1>
                <StatusMessage gameState={gameState} />

                {/* Drawing */}
                <Drawing numberOfGuesses={incorrectLetters.length} />
                {/* Word */}
                <Word
                    wordToGuess={wordToGuess}
                    guessedLetters={guessedLetters}
                    reveal={gameState === "lost"}
                />
                {/* Keyboard */}
                <Keyboard
                    correctLetters={correctLetters}
                    incorrectLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLEtter}
                    disabled={gameState !== "playing"}
                />
            </main>
        </>
    );
}
