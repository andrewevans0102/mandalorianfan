const axios = require("axios");

const postMessage = "mandalorianfan.com deploy was successful";

const postAddress = "POST_ADDRESS";

// this calls an API I use that texts me a success message
axios
	.post(postAddress, { message: postMessage })
	.then((success) => console.log("message sent"))
	.catch((error) => console.log(error));
