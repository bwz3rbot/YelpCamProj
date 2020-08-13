const express = require('express');
app = express();
const PORT = 3000;

app.set("view engine", "ejs");


const images = [
    "https://imgur.com/BHzefub.jpg",
    "https://imgur.com/TSUTG8w.jpg",
    "https://imgur.com/rEYa8Wi.jpg",
    "https://imgur.com/WpOPYL3.jpg",
    "https://imgur.com/AlTK3wZ.jpg"
]
let campgrounds = [{
            name: "Salmon Creek",
            image: images[0]
        },
        {
            name: "Granite Hill",
            image: images[1]
        },
        {
            name: "Mountain Goat's Rest",
            image: images[2]
        },
        {
            name: "Big Dick Canyon",
            image: images[3]
        },
        {
            name: "Elder Crones Village",
            image: images[4]
        }
    ]
app.get("/campgrounds", function (req, res) {
    res.render('campgrounds', {campgrounds:campgrounds})
})


app.get("/", function (req, res) {
    res.render('landing')
})

app.listen(PORT, function () {
    console.log("YELPCAMP SERVER LISTENING ON PORT: " + PORT)
})