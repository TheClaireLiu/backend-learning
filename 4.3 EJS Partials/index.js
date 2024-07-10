import express from "express";

const app = express();
const port = 3000;


app.use(express.static("public")); //tells Express to serve static files(likes images, Javascript, CSS files) directly from the `public` directory of the project.

app.get("/",(req,res) => {
  res.render("index.ejs");
});

app.get("/about",(req,res) => {
  res.render("about.ejs");
});

app.get("/contact",(req,res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
