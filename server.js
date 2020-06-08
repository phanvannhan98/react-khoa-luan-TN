const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const mongoose = require("mongoose");

// Route
const loginRoute = require("./routes/login.route");
const subjectRoute = require("./routes/subject.route");
const subSubjectRoute = require("./routes/subSubject.route");
const teacherRoute = require("./routes/teacher.route");
const classroomRoute = require("./routes/classroom.route");
const studentStudying = require("./routes/studentStudying.route");

// CheckToken
const checkToken = require("./controllers/user.controller");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
    "mongodb+srv://pvnhan:nhan123@centralmanager-1heuc.mongodb.net/CentralManager?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Mongoose!");
    }
);

app.use("/api/login", loginRoute);
app.use("/api/subject", subjectRoute);
app.use("/api/subsubject", subSubjectRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/classroom", classroomRoute);
app.use("/api/student-studying", studentStudying);

app.listen(PORT);
