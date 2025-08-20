import { useContext } from "react";
import "./style.css";
import UserContext from "../../context/UserContext";
export default function PaletteCard({ from, to, onClick }) {
    const { user } = useContext(UserContext);

    return (
        <li className="palette" onClick={onClick}>
            <div
                className="palette-gradient"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
            ></div>
            <p className="palette-caption">
                {from} - {to} by {user.name}
            </p>
        </li>
    );
}
