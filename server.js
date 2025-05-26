const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({
    power: "1234W",
    bill: "₹456.78",
    date: "2025-05-25"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
