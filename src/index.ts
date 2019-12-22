import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("successfully access this endpoint");
  res.end();
});

app.listen(process.env.PORT, () => {
    console.log("Successfully listen")
})