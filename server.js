const express = require('express');
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
})