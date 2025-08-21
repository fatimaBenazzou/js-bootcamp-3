import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
        </nav>
    );
}
