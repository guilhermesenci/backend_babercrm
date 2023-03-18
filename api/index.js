import express, { Router } from "express";

const app = express();
const PORT = 5432;
const route = Router();

route.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Td certo chefia",
  });
});

app.use(route);

app.listen(PORT, () => {
  console.log("Rodando na porta " + PORT);
});
