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
