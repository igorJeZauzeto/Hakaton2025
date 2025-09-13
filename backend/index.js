const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const accountRoutes = require("./routes/accountRoutes");
const drugRoutes = require("./routes/drugRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");

app.use("/api", accountRoutes);
app.use("/api", drugRoutes);
app.use("/api", treatmentRoutes);

app.listen(port, () => {
});