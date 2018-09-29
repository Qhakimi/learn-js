//how to fetch data from API using javascript
//use fetch 
//after we use fetch function and we get the return data, we then use callback function 

//if we receive blob

	const url = 'http:://www.google.com';
	const data = fetch(url).then(function(response){
		return response.blob();
	}).then(function(blob) {
		...
	})


//if we recieve array buffer

	const url = 'testest';
	const data = fetch(url).then(function(response) {
		return response.arrayBuffer();
	}).then(function(arrayBuffer){
		...
	})

//if we receive response in json

	const url = 'dsadsadas';
	const data = fetch(url).then(function(response){
		return response.json();
	}).then(function(json){
		...
	})

//if we receive response in text
//
 	const url = 'ajklsdjas';
 	const data = fetch(url).then(function(response){
		return response.text();
 	}).then(function(text){
		...
 	})