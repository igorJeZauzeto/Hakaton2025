const express = require('express');
const app = express();
const cors = require('cors');

// Middleware za obradu JSON zahtjeva
app.use(express.json());

// Dinamička CORS konfiguracija
const allowlist = ['http://localhost:3000', 'https://hakaton2025-beryl.vercel.app/'];

const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    const origin = req.header('Origin');

    if (allowlist.indexOf(origin) !== -1 || origin.endsWith('.vercel.app')) {
        corsOptions = { origin: true }; // Pristup dozvoljen
    } else {
        corsOptions = { origin: false }; // Pristup zabranjen
    }
    callback(null, corsOptions);
};

// Primjena dinamičkog CORS-a na svim rutama
app.use(cors(corsOptionsDelegate));

// Uvezi i poveži rute
const accountRoutes = require("./routes/accountRoutes");
const drugRoutes = require("./routes/drugRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");
const openaiRoutes = require("./routes/openaiRoutes");

app.use("/api", accountRoutes);
app.use("/api", drugRoutes);
app.use("/api", treatmentRoutes);
app.use("/api", openaiRoutes);

app.listen(3500, () => {
    console.log('Server running on port 3500');
});