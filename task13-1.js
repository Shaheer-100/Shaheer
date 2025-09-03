let cars = {
	Brand : "Volkswagen",
	model : "virtus",
	color: "yellow",
	year: 2025,
	isAutomatic: false,
	 startengine : function () {
		return   "Engine started! BOOM BOOM!" ;
		}
		};
		console.log(`Car: ${cars.Brand} ${cars.model}`);
		console.log(`Color: ${cars.color}`)
		console.log(`year: ${cars.year}`)
console.log(cars.startengine());