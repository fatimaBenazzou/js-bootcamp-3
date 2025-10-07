import express from "express";

const app = express();
const PORT = 7459; 


const user = {
    firstName: "Fatima",
    lastName: "Benazzou",
    note: 12,
};

app.use(express.urlencoded({ extended: true }));

const config = { root: "./views" };


app.get("/", (req, res) => {
    res.sendFile(`home.html`, config);
});

app.post("/note", (req, res) => {
    user.note = Number(req.body["exam-note"]);
    res.sendFile(`note.html`, config);
});

app.get("/about", (req, res) => {
    res.send(`<div>
            <h2>${user.firstName} ${user.lastName}</h2>
            <p>My note is : ${user.note}</p>
        </div>
        `);
        
});
   
app.get('/profile/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
});
