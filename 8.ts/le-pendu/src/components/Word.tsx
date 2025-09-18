import styles from "./Word.module.css";

export default function Word({
    wordToGuess,
    guessedLetters,
    reveal = false,
}: {
    wordToGuess: string;
    guessedLetters: string[];
    reveal?: boolean;
}) {
    const letters = wordToGuess.split("");

    return (
        <section className={styles["hangman-word"]}>
            {letters.map((letter: string, index) => (
                <span key={"letter" + index} className={styles["letter-container"]}>
                    <span
                        className={`${
                            !guessedLetters.includes(letter) && reveal
                                ? styles["revealed-letter"]
                                : ""
                        }`}
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                            color:
                                !guessedLetters.includes(letter) && reveal ? "#721c24" : "inherit",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </section>
    );
}
