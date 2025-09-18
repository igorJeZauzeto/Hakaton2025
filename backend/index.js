const express = require("express");
const app = express();
const port = 3500;
const cors = require('cors');

// Middleware za obradu JSON zahtjeva
app.use(express.json());

// Dozvoljene domene
const allowedOrigins = [
    'https://hakaton2025.vercel.app',
    'https://hhakaton2025-beryl.vercel.app',
    'http://localhost:3000'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

// Primijenite CORS s opcijama
app.use(cors(corsOptions));

// Uvezi rute
const accountRoutes = require("./routes/accountRoutes");
const drugRoutes = require("./routes/drugRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");
const openaiRoutes = require("./routes/openaiRoutes");

// Poveži rute s aplikacijom
app.use("/api", accountRoutes);
app.use("/api", drugRoutes);
app.use("/api", treatmentRoutes);
app.use("/api", openaiRoutes);

// Pokreni server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});