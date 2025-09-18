const express = require("express");
const app = express();
const port = 3500;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(cors({
    origin: 'https://hakaton2025-beryl.vercel.app/' // Vercel URL
}));


const accountRoutes = require("./routes/accountRoutes");
const drugRoutes = require("./routes/drugRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");
const openaiRoutes = require("./routes/openaiRoutes");

app.use("/api", accountRoutes);
app.use("/api", drugRoutes);
app.use("/api", treatmentRoutes);
app.use("/api", openaiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});