import "./style.css";
export default function PaletteCard({ from, to, onClick }) {
    return (
        <li className="palette" onClick={onClick}>
            <div
                className="palette-gradient"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
            ></div>
            <p className="palette-caption">
                {from} - {to}
            </p>
        </li>
    );
}
