let dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);
dataRequest.open("GET", "food.json");
dataRequest.send();

let dataRequest1 = new XMLHttpRequest();
dataRequest1.addEventListener("load", dataRequestComplete);
dataRequest1.addEventListener("error", dataRequestFailed);
dataRequest1.open("GET", "cat.json");
dataRequest1.send();

function dataRequestComplete(e) {
	console.log("foods have loaded");
	var foodData = JSON.parse(e.target.responseText);
	console.log("foodData", foodData);
	showData(foodData);
		
}

function showData(foods) {
	let brandDiv = document.getElementById("brands");
	let brand = '';

	for (item in foods) {
		let foodItem = foods[item];
		debugger;

		for(var i=0; i<foods[item].length;i++) {
			brand += "<tr>";
			brand += `<th rowspan='3'>` + foodItem[i].name + "</th><tr>";
		
			for (var j=0; j<foodItem[i].types.length; j++)	{
				brand += "<td>"+foodItem[i].types[j].type + "</td>";

				for (var z=0; z<foodItem[i].types[j].volumes.length; z++)	{
					brand += "<td>"+foodItem[i].types[j].volumes[z].name + ": $" +foodItem[i].types[j].volumes[z].price+"</td>";
					
				}
			brand +="</tr></tr>";
			}
		}
	brandDiv.innerHTML += brand;
	}
}
	
function dataRequestFailed(e) {
	console.log("dataFailed", e);	
}




