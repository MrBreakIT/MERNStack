const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productManager", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Now rocking in the mainframe!"))
	.catch(err => console.log("Not connected to database- Got Something Wrong there JACK!"));


