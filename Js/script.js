fetch("https://indian-railway-live-train.p.rapidapi.com/live-train", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "2ee3c77993msh920d38ecef85afep1ce417jsn1ffb06da3e54",
		"x-rapidapi-host": "indian-railway-live-train.p.rapidapi.com"
	},
	"body": {
		"trainID": "443",
		"date": "05-10-2020"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});