import React from "react";
import { Link } from "react-router";

export default function Blogs() {
    const productId = 12788583;
    return <Link to={`${productId}`}>Details</Link>;
}
