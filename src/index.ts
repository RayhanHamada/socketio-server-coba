import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("successfully access this endpoint");
  res.end();
});

app.listen(3000, () => {
    console.log("Successfully listen")
})