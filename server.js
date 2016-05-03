var fs = require('fs')
var http = require('http')
var ecstatic = require('ecstatic')
var st = ecstatic('public')

var server = http.createServer(function(req, res) {
	st(req, res)
})

fs.readFile('files/w00001.html', 'utf-8', function(err, data) {
	if (err) {
		console.log(err)
	} else {
		var begining = data.indexOf('<body>')	
		var end = data.indexOf('</body>')	
		var bodyStr = data.substring(begining, end)
	
		var bodyArray = (body.split(/[\r\n]/)).filter(function(element){ return element !== '' && element.indexOf('<!-') === -1})
		console.log(body)
	}

})

function stripper(element) {
	if (element.indexOf('<') !== -1) {
	
	}
}

server.listen(process.env.PORT || 5000)
console.log('Server running on port 5000')
