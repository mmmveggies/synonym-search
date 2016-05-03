var fs = require('fs')
var http = require('http')
var ecstatic = require('ecstatic')
var st = ecstatic('public')
var cheerio = require('cheerio')

var server = http.createServer(function(req, res) {
	st(req, res)
})

fs.readFile('files/w00001.html', 'utf-8', function(err, data) {
	if (err) {
		console.log(err)
	} else {
          var $ = cheerio.load(data);
          var text = $('p').text();
          console.log(text)
	}

})

function stripper(element) {
	if (element.indexOf('<') !== -1) {
	
	}
}

server.listen(process.env.PORT || 5000)
console.log('Server running on port 5000')
