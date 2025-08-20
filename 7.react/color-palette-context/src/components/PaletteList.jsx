import PaletteCard from "./PaletteCard";

export default function PaletteList({ palettes, onClick }) {
    return (
        <ul className="palettes-grid">
            {palettes.map((palette, index) => (
                <PaletteCard
                    from={palette.from}
                    to={palette.to}
                    onClick={() =>
                        onClick(`linear-gradient(135deg, ${palette.from}, ${palette.to})`)
                    }
                    key={"palette" + index}
                />
            ))}
        </ul>
    );
}
