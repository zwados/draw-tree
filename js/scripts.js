// drawTree

function drawTree(x) {
	for (var i = 0 ; i <= x ; i++) {
		var star = '';
		for (var j = 1 ; j <= i ; j++) {
			star += '*';
		}
		console.log(star);
	}
};



