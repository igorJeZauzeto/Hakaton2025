const express = require("express");
const app = express();
const port = 3500;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const accountRoutes = require("./routes/accountRoutes");
const drugRoutes = require("./routes/drugRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");

app.use("/api", accountRoutes);
app.use("/api", drugRoutes);
app.use("/api", treatmentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});