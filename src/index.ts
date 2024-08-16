import express from "express";
import cors from "cors";
import { getData } from "./api/getData";
import { putData } from "./api/putData";
const app = express();
app.use(
  cors({
    origin: "https://proximity-service.vercel.app",
  })
);
app.use(express.json());

app.post("/getData", getData);
app.post("/putData", putData);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
