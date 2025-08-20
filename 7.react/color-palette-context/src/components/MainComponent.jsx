import React, { useState } from "react";
import palettes from "../palettes";
import PaletteList from "./PaletteList";

export default function MainComponent() {
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <main style={selectedColor ? { background: selectedColor } : undefined}>
            <h1>Color Palette</h1>
            <PaletteList palettes={palettes} onClick={setSelectedColor} />
        </main>
    );
}
