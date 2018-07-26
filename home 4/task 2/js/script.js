function getAttributes(){
	let attr1 = w3r.getAttribute('type');
	let attr2 = w3r.getAttribute('hreflang');
	let attr3 = w3r.getAttribute('rel');
	let attr4 = w3r.getAttribute('target');
	let attr5 = w3r.getAttribute('href');
	return console.log(
`type: ${attr1},
hreflang: ${attr2}, 
rel:${attr3}, 
target: ${attr4},
href: ${attr5}.`)
}