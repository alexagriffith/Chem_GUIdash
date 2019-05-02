var quotes = ['Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke',
'Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan',
'Science is not only compatible with spirituality; it is a profound source of spirituality. - Carl Sagan ',
'After a certain high level of technical skill is achieved, science and art tend to coalesce in esthetics, plasticity, and form. The greatest scientists are always artists as well. - Albert Einstein ',
'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov ',
'The Wright Brothers created the single greatest cultural force since the invention of writing. The airplane became the first World Wide Web, bringing people, languages, ideas, and values together. - Bill Gates ',
'You can know the name of a bird in all the languages of the world, but when you\'re finished, you\'ll know absolutely nothing whatever about the bird... So let\'s look at the bird and see what it\'s doing -- that\'s what counts. I learned very early the difference between knowing the name of something and knowing something. - Richard Feynman','The scientist is not a person who gives the right answers; he\'s one who asks the right questions. -  Claude Levi-Strauss ','Absence of evidence is not evidence of absence. - Carl Sagan '];


var el = document.getElementById("qt");  
var btn = document.getElementById("button");
var arrLen = quotes.length;



function getQuote(){
	 
	var min = 0; 
	var max = arrLen; 
	var quote = quotes[Math.floor(Math.random() * (max - min) + min)];
	el.innerHTML = "<p>" + quote + "</p>"; 	
	
}
		
btn.onclick = getQuote;