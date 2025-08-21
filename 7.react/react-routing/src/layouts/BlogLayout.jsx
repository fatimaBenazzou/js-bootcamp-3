import React from "react";
import { Outlet } from "react-router";

export default function BlogLayout() {
    return (
        <div>
            <h2>Blogs Page</h2>
            <Outlet />
            <h2>End</h2>
        </div>
    );
}
