import express, { Router } from "express";

const app = express();

const route = Router();

route.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Td certo chefia",
  });
});

app.use(route);

app.listen(3000, () => {
  console.log("Rodando!");
});
