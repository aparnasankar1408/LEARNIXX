const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// TEST API
// ===============================

app.get("/api/test", (req, res) => {
    res.json({
        message: "Learnix backend working!"
    });
});


// ===============================
// LOGIN API
// ===============================

app.post("/api/login", (req, res) => {

    const { email, password, role } = req.body;

    console.log("Login request received:");
    console.log("Email:", email);
    console.log("Role:", role);


    // Temporary test login
    // Later we will connect this with database

    if (
        email === "teacher@gmail.com" &&
        password === "123456" &&
        role === "teacher"
    ) {

        return res.json({
            success: true,
            message: "Teacher login successful",
            role: "teacher",
            redirect: "teacher-dashboard.html"
        });

    }


    if (
        email === "student@gmail.com" &&
        password === "123456" &&
        role === "student"
    ) {

        return res.json({
            success: true,
            message: "Student login successful",
            role: "student",
            redirect: "student-dashboard.html"
        });

    }


    // Wrong login

    res.status(401).json({
        success: false,
        message: "Invalid email or password"
    });

});


// ===============================
// START SERVER
// ===============================

app.listen(5000, () => {
    console.log("Learnix server running on http://localhost:5000");
});