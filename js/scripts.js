// drawTree
function drawTree(i) {
	for (var i = 0 ; i <= 5 ; i++) {
		var star = '';

		for (var j = 1 ; j <= i ; j++) {
			star += '*';
		}
		console.log(star);
	}
};

// niezalezni od wartosci parametru funkcji drawTree() zawsze wychodzi pełna choinka. Czym jest to spowodowane?

