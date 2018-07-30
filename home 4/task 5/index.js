var linksHash, updateHash;

var contentElemHash = document.querySelector('#content1');

linksHash = {
	main:'Content 1',
	about: 'Content 2',
	save: 'Content 3' 
}
updateHash = function () {
	var cont = linksHash[location.hash.slice(1)];

	contentElemHash.innerHTML = cont || 'Page not found';
}

window.addEventListener('hashchange',updateHash);
window.addEventListener('load', updateHash);

var links, update, navEl,updateButtons, contentElem;

contentElem = document.querySelector('#content');
navEl = document.querySelector('.nav')

links = {
	main:'Content 1',
	about: 'Content 2',
	save: 'Content 3' 
}
update = function (state) {
	if (!state) return;
	contentElem.innerHTML = links[state.page];
	updateButtons(state);
}
updateButtons = function(state){
	[].slice.call(navEl.querySelectorAll('A')).forEach( function(element) {
		state.page === element.getAttribute('href')
	})
}
navEl.addEventListener('click',function(element){
	element.preventDefault();
	var state;
	if (element.target.tagName !== 'A') return;

	state = {
		page: element.target.getAttribute('href')
	}
	history.pushState(state, '', state.page)
	update(state);
})

window.addEventListener('popstate',function(element){
	update(element.state);
})