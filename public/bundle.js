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

},{}]},{},[1]);
