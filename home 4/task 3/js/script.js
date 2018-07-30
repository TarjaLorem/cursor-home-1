var spanHover = document.getElementsByTagName('span');

for (var i = 0; i < spanHover.length; i++) {

	spanHover[i].onmouseover  = function() {
		this.setAttribute('class', 'style');
	}	
	spanHover[i].onmouseout  = function() {
		this.setAttribute('class', '');
	}	
}
