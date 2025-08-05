import UserCard from "./components/UserCard";

const users = [
    {
        name: "Naruto UZUMAKI",
        job: "Hokage",
        city: "Konoha",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Naruto UZUMAKI",
        job: "Hokage",
        city: "kouba",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        name: "Naruto UZUMAKI",
        job: "Hokage",
        city: "Konoha",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Naruto UZUMAKI",
        job: "Hokage",
        city: "Konoha",
        avatar: "https://i.pravatar.cc/150?img=9",
    },
];

function App() {
    return (
        <section>
            <h1>User Profil</h1>
            {users.map((user) => (
                <UserCard user={user} color="orange" />
            ))}
        </section>
    );
}

export default App;
