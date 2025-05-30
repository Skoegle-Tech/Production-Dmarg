const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const unmaper = require("unmaper")
require("dotenv").config();
const router = require("./src/routes/main");
const connectDB = require("./src/DB/db");
const logRequest = require("logon-database");
const path = require("path");
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

const allowedOrigins = [
  "https://geocam.skoegle.in",
  "https://production-client-5ahd.onrender.com",
  "https://prod-vmarg.onrender.com",
  "https://vmarg.skoegle.com",
  "https://production-client-kodt.onrender.com",
  "https://dmarg.skoegle.com",
  "https://d-marg.onrender.com",
  "https://v-marg2-0.onrender.com",
  "https://vmarg2.0.skoegle.com",
  "https://ram-obliging-pup.ngrok-free.app",
  "https://v-marg2-0.onrender.com",
  "https://qa-vmarg.skoegle.com",
  "https://dmarg.onrender.com",
  "http://localhost:13000",
  "https://deploymentimage.onrender.com",
  "https://test.skoegle.com",
  "http://15.207.223.61",
  "https://dmarg.skoegle.com"
];

// Dynamically allow all localhost origins
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || /^http:\/\/localhost:\d+$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(logRequest);
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Explicitly handle preflight OPTIONS requests

app.use("/api", router);

app.get("/ping", unmaper)


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
});



connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on PORT ${process.env.PORT}`);
});
