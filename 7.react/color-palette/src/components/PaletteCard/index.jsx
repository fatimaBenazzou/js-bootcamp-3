import "./style.css";
export default function PaletteCard({ from, to }) {
    return (
        <li className="palette">
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
