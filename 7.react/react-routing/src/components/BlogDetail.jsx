import React from "react";
import { useParams } from "react-router";

export default function BlogDetail() {
    const { id } = useParams();
    return <div>BlogDetail : {id}</div>;
}
