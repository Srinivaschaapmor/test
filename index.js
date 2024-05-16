const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000; // Default to port 9000 if PORT environment variable is not set

app.use("/hello", (req, res) => {
  res.json({ message: "hello" }); // Corrected to call the json() method
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
