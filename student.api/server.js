require("dotenv").config();

const express = require("express");
const cors = require("cors");
const studentRoutes = require("./src/routes/student.routes")
const subjectRoutes = require("./src/routes/subject.routes")

const app = express();
const PORT = process.env.PORT || 4000;

app.use (cors());
app.use (express.json());

app.get("/", (req, res) => {
    res.json({ message : "lnwza007 on fire is Running!"});
});

app.use("/api/students", studentRoutes)
app.use("/api/subjects", subjectRoutes)


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is Running on http://localhost:${PORT}/api/students`);
});