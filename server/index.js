const express = require("express");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "hoarding_db",
});

db.query("SELECT 1", (err) => {
  if (err) console.error("❌ MySQL Error:", err.message);
  else console.log("✅ MySQL Connected");
});

// ✅ Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify email config on startup
transporter.verify((err, success) => {
  if (err) console.error("❌ Email config error:", err.message);
  else console.log("✅ Email ready");
});

// ✅ Test Route
app.get("/test", (req, res) => {
  res.json({ message: "Server is working! ✅" });
});

// ✅ Contact Route
app.post("/api/contact", async (req, res) => {
  console.log("📩 Body received:", req.body);

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    console.log("❌ Missing fields");
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  // 1. Save to DB
  const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], async (err, result) => {
    if (err) {
      console.error("❌ DB Error:", err.message);
      return res.status(500).json({ success: false, message: "DB Error: " + err.message });
    }

    console.log("✅ Saved to MySQL, ID:", result.insertId);

    // 2. Send Email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Contact from ${name}`,
        html: `
          <h2>New Contact 📬</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });
      console.log("✅ Email sent to", process.env.RECEIVER_EMAIL);
      return res.status(200).json({ success: true, message: "Saved & email sent!" });

    } catch (emailErr) {
      console.error("⚠️ Email Error:", emailErr.message);
      return res.status(200).json({ success: true, message: "Saved to DB! (Email failed)" });
    }
  });
});

// ✅ Catch all crashes
process.on("uncaughtException", (err) => {
  console.error("💥 Crash:", err.message);
});

app.listen(process.env.PORT || 5176, () => {
  console.log(`🚀 Server on port ${process.env.PORT || 5176}`);
});