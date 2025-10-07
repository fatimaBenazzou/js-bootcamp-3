import express from "express";

const app = express();
const PORT = 7459; 


const user = {
    firstName: "Fatima",
    lastName: "Benazzou",
    note: 12,
       skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Redux Toolkit", level: "Intermediate" },
        { name: "React Native", level: "Intermediate" },
        { name: "Node.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Angular", level: "Intermediate" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Basic" },
        { name: "Figma", level: "Basic" },
    ],
};

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use("/public", express.static("./public"))


app.get("/", (req, res) => {
    res.render(`home`);
});

app.post("/note", (req, res) => {
    user.note = Number(req.body["exam-note"]);
    res.render(`note`);
});

app.get("/about", (req, res) => {
    res.render(`about`, {student: user});
        
});
   
app.get('/profile/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
});
