const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);



// let frank = new Cat({
//     name: "Frank",
//     age: 14,
//     temperament: "Fun Loving"
// })

// frank.save(function (err, obj) {
//     if (err) {
//         console.log("something went wrong! \n")
//     } else {
//         console.log("Object saved to DB \n")
//         console.log(obj)

//     }
// });


Cat.create({
    name: "Ball Licking Joe",
    age: 6,
    temperament: "Gay"
}, function (err, cat) {

    if (err) {
        console.log(err)
    } else {
        console.log(cat)
    }
});

Cat.find({}, function (err, cats) {
    if (err) {
        console.log("ERR:")
        console.log(err)
    } else {
        console.log("ALL THE CATS!")
        console.log(cats)
    }

});