import React from "react";

export default function User({ avatar, name }) {
    return (
        <div>
            <img src={avatar} alt="avatar" />
            <span>
                <strong>{name}</strong>
            </span>
        </div>
    );
}
