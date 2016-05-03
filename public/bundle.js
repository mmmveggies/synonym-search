(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var wordForm = document.getElementById('word-form')
wordForm.onsubmit = function () {
	event.preventDefault()
	var word = event.target['word'].value
	
	var s = document.createElement("script") 
	s.src = "http://thesaurus.altervista.org/service.php?word="+word+"&language=en_US&output=json&key=SS3IcLAnzS2CcXXDH6UC&callback=process"
	document.getElementsByTagName("head")[0].appendChild(s) 
}


window.process = function (result) { 
	var reducedOutput = result.response.reduce(function(prev, current){
		return prev.concat(current.list.synonyms.split('|'))
	}, [])
	.filter(function(element){
		return element.indexOf('antonym') === -1
	})
	
	console.log('reducedOutput', reducedOutput)
	
	/*
	
  output = ""; 
  for (key in result.response) { 
    list = result.response[key].list; 
    output += list.synonyms+"<br>"; 
  } 
  console.log(output)
  if (output) 
    document.getElementById("synonyms").innerHTML = output; 
	
	*/
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ByZWZpeC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVzYXVydXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciB3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JkLWZvcm0nKVxud29yZEZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0dmFyIHdvcmQgPSBldmVudC50YXJnZXRbJ3dvcmQnXS52YWx1ZVxuXHRcblx0dmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpIFxuXHRzLnNyYyA9IFwiaHR0cDovL3RoZXNhdXJ1cy5hbHRlcnZpc3RhLm9yZy9zZXJ2aWNlLnBocD93b3JkPVwiK3dvcmQrXCImbGFuZ3VhZ2U9ZW5fVVMmb3V0cHV0PWpzb24ma2V5PVNTM0ljTEFuelMyQ2NYWERINlVDJmNhbGxiYWNrPXByb2Nlc3NcIlxuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQocykgXG59XG5cblxud2luZG93LnByb2Nlc3MgPSBmdW5jdGlvbiAocmVzdWx0KSB7IFxuXHR2YXIgcmVkdWNlZE91dHB1dCA9IHJlc3VsdC5yZXNwb25zZS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VycmVudCl7XG5cdFx0cmV0dXJuIHByZXYuY29uY2F0KGN1cnJlbnQubGlzdC5zeW5vbnltcy5zcGxpdCgnfCcpKVxuXHR9LCBbXSlcblx0LmZpbHRlcihmdW5jdGlvbihlbGVtZW50KXtcblx0XHRyZXR1cm4gZWxlbWVudC5pbmRleE9mKCdhbnRvbnltJykgPT09IC0xXG5cdH0pXG5cdFxuXHRjb25zb2xlLmxvZygncmVkdWNlZE91dHB1dCcsIHJlZHVjZWRPdXRwdXQpXG5cdFxuXHQvKlxuXHRcbiAgb3V0cHV0ID0gXCJcIjsgXG4gIGZvciAoa2V5IGluIHJlc3VsdC5yZXNwb25zZSkgeyBcbiAgICBsaXN0ID0gcmVzdWx0LnJlc3BvbnNlW2tleV0ubGlzdDsgXG4gICAgb3V0cHV0ICs9IGxpc3Quc3lub255bXMrXCI8YnI+XCI7IFxuICB9IFxuICBjb25zb2xlLmxvZyhvdXRwdXQpXG4gIGlmIChvdXRwdXQpIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3lub255bXNcIikuaW5uZXJIVE1MID0gb3V0cHV0OyBcblx0XG5cdCovXG59XG4iXX0=
