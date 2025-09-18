const express = require('express');
const app = express();
const cors = require('cors');

// Middleware za obradu JSON zahtjeva
app.use(express.json());

// Dinamična CORS konfiguracija
const allowedOrigins = [
    'https://hakaton2025.vercel.app',
    'https://hhakaton2025-beryl.vercel.app', // Vaš privremeni Vercel URL
    'http://localhost:3000' // Za lokalni razvoj
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

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