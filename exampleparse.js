var a;
var b;
var c;
var x=[];

function parse(y,z) {
	if (a.status===200 && b.status===200) {
		x.push( JSON.parse(y));
		x.push( JSON.parse(z));
		console.log("", x);
		//console.log("", JSON.parse(b.responseText));
			
			
	}
}

function makereq() {
	a = new XMLHttpRequest();
	b = new XMLHttpRequest();
	a.open("GET","cat.json");
	b.open("GET","food.json");
	a.send();
	b.send();

}