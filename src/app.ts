import express, { Application } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "অতিরিক্ত রিকোয়েস্ট পাঠিয়েছেন, কিছুক্ষণ পর চেষ্টা করুন।",
});

app.use("/api", limiter);

app.get("/", (req, res) => {
  res.send("Your server is production ready! 🚀");
});

export default app;
