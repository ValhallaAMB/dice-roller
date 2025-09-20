import express from "express";
import indexRouter from "./routes/index.js";
import userRouter from "./routes/users.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/", indexRouter);
app.use("/users", userRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
