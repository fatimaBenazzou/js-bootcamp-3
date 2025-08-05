import User from "./User";
import "./profileCard.css";

export default function UserCard({ user, color }) {
    return (
        <div className="card" style={{ background: color }}>
            <User avatar={user.avatar} name={user.name} />
            <p>Job: {user.job} </p>
            <p>City: {user.city} </p>
        </div>
    );
}
