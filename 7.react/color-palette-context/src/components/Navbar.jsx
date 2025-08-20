import { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
    const { user, logout, login } = useContext(UserContext);
    console.log({ user });

    return (
        <nav>
            {user ? (
                <div>
                    <span>Welcome, {user.name}!</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                // <a href="/login">Login</a>
                <button onClick={() => login({ name: "Fatima", email: "test@gmail.com" })}>
                    Login
                </button>
            )}
        </nav>
    );
};

export default Navbar;
