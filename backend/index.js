const express = require("express")
const app = express()

app.get("/api/v1", (req,res) => {
	res.json([
		{
			"id":1,
			"title":"Harry Potter"
		}
	])
});

app.listen(3000, () => {
	console.log("Service is up")
})
//modifying the index.js for branche1
