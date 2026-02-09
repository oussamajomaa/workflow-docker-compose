import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from dokcer" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend listening on http:${port}`);
});
