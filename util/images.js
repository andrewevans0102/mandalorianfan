const fs = require("fs");

// function to encode file data to base64 encoded string
function base64_encode(file) {
	// read binary data
	var bitmap = fs.readFileSync(file);
	// convert binary data to base64 encoded string
	return new Buffer(bitmap).toString("base64");
}

const output = base64_encode("../public/HomePage2.jpg");
console.log(output);
