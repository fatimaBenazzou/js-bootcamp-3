import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";
import UserProvider from "./provider/UserProvider";

export default function App() {
    return (
        <UserProvider>
            <Navbar />
            <MainComponent />
        </UserProvider>
    );
}
