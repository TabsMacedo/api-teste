const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Render define a PORT
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
