import styles from "./Keyboard.module.css";

const KEYS: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Keyboard({
    correctLetters,
    incorrectLetters,
    addGuessedLetter,
    disabled = false,
}: {
    correctLetters: string[];
    incorrectLetters: string[];
    addGuessedLetter: (letter: string) => void;
    disabled?: boolean;
}) {
    return (
        <section className={styles["keyboard"]}>
            {KEYS.map((key: string) => {
                const isActive = correctLetters.includes(key);
                const isInactive = incorrectLetters.includes(key);

                return (
                    <button
                        key={key}
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn}  ${isActive ? styles.active : ""} ${
                            isInactive ? styles.inactive : ""
                        }`}
                        disabled={disabled || isActive || isInactive}
                    >
                        {key}
                    </button>
                );
            })}
        </section>
    );
}
