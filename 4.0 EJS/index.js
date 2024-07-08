import express from "express";

const app = express();
const port = 3000;

// app.set("view engine", "ejs");

app.get("/", (req,res) => {
    const day = new Date();
    const today = day.getDay();
    let type = "a weekday";
    let adv = "it's time to work hard";

    if(today === 0 || today === 6){
        type = "a weekend";
        adv = "it's time to have some fun";
    }
    res.render("index.ejs", {
        dataType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


