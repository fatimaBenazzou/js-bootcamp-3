import styles from "./HangmanDrawing.module.css";

const BODY_PARTS = [
    <div
        key={"Head"}
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid var(--primary-color)",
            position: "absolute",
            top: "50px",
            right: "-30px",
        }}
    />,
    <div
        key={"Body"}
        style={{
            width: "10px",
            height: "100px",
            background: "var(--primary-color)",
            position: "absolute",
            top: "120px",
            right: 0,
        }}
    />,
    <div
        key={"RightArm"}
        style={{
            width: "100px",
            height: "10px",
            background: "var(--primary-color)",
            position: "absolute",
            top: "150px",
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }}
    />,
    <div
        key={"LeftArm"}
        style={{
            width: "100px",
            height: "10px",
            background: "var(--primary-color)",
            position: "absolute",
            top: "150px",
            right: "10px",
            rotate: "30deg",
            transformOrigin: "right bottom",
        }}
    />,
    <div
        key={"RightLeg"}
        style={{
            width: "100px",
            height: "10px",
            background: "var(--primary-color)",
            position: "absolute",
            top: "210px",
            right: "-90px",
            rotate: "60deg",
            transformOrigin: "left bottom",
        }}
    />,
    <div
        key={"LeftLeg"}
        style={{
            width: "100px",
            height: "10px",
            background: "var(--primary-color)",
            position: "absolute",
            top: "210px",
            right: 0,
            rotate: "-60deg",
            transformOrigin: "right bottom",
        }}
    />,
];
export default function Drawing({ numberOfGuesses }: { numberOfGuesses: number }) {
    return (
        <section className={styles["hangman-structure"]}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className={styles["gallows-top"]} />
            <div className={styles["rope"]} />
            <div className={styles["post"]} />
            <div className={styles["base"]} />
        </section>
    );
}
