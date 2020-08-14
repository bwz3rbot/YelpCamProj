const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = 3000;


// Server Settings
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set("view engine", "ejs");

// Mongoose DB Connection
mongoose.connect('mongodb://localhost:27017/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schema Setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})



// Campground DB Schema
const Campground = mongoose.model("Campground", campgroundSchema);


// Campground.create({
//     name: "Granite Hill",
//     image: "https://imgur.com/BHzefub.jpg",
//     description: "A beautiful paradise of does and deer."
// })


// Server Routes

// INDEX -- Show all Campgrounds
app.get("/campgrounds", function (req, res) {
    console.log('getting all campgrounds')

    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log("there was an error:")
            console.log(err)
        } else {
            console.log("success! rendering campgrounds...")
            res.render("index", {
                campgrounds: allCampgrounds
            })
        }
    })
})


// CREATE -- Add new Campground to DB
app.post("/campgrounds", function (req, res) {

    let name = req.body.name
    let image = req.body.image
    let description = req.body.description
    let newCampground = {
        name: name,
        image: image,
        description: description
    }
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/campgrounds')
        }
    })


})

// NEW -- show form to create a new campground
app.get("/campgrounds/new", function (req, res) {
    res.render('new')
})
app.get("/", function (req, res) {
    res.render('landing')
})

// Find a specific Campground by ID,
// Render 'Show' Template with the Campground
app.get("/campgrounds/:id", function (req, res) {

    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {
                campground: foundCampground
            })
        }
    })

})


// Server Start
app.listen(PORT, function () {
    console.log("YELPCAMP SERVER LISTENING ON PORT: " + PORT)
})