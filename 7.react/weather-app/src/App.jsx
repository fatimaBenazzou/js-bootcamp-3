import React, { useEffect, useState } from "react";

export default function App() {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=Alger&appid=${
                    import.meta.env.VITE_API_KEY
                }&units=metric`
            );
            const data = await response.json();
            if (data.cod === 200) {
                setWeatherData(data);
            } else {
                throw new Error("Ville non trouvée");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    console.log({ weatherData });
    return <div>{weatherData && weatherData.cod === 200 && weatherData.main.temp}</div>;
}
