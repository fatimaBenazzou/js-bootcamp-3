import { useEffect } from "react";
import toast from "react-hot-toast";
import styles from "./StatusMEssage.module.css";

type Props = {
    gameState: GameState;
};

export function StatusMessage({ gameState }: Props) {
    useEffect(() => {
        if (gameState === "won") {
            toast.success("Congratulations!");
        } else if (gameState === "lost") {
            toast.error("Game Over!");
        }
    }, [gameState]);

    if (gameState === "won") {
        return (
            <div className={`${styles["status-message"]} ${styles["won"]}`}>
                🎉 Winner! Press Enter to restart.
            </div>
        );
    }

    if (gameState === "lost") {
        return (
            <div className={`${styles["status-message"]} ${styles["lost"]}`}>
                💀 Game Over! Press Enter to restart.
            </div>
        );
    }

    return null;
}
