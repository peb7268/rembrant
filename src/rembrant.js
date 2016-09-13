
function Rembrant(){
	this.resolveSymbol  = function(shape){
		var x2 = shape.x2, 
			y2 = shape.y2;
		    x  = shape.x,
		    y  = shape.y;

		if(typeof r.canvas.content !== 'undefined' && r.canvas.content.length > 0 && typeof r.colour == 'undefined') return 'x';

		var limit 		= y2 + 2;
		var isLastRow   = (y == limit - 1);
		var endOfRow    = (x == x2 - 1);

		//Header
		if(y == 0 && x <  x2 - 1) 	return '-';
		if(y == 0 && endOfRow) 	  	return "-\n";

		//Footer
		if(isLastRow && x < x2 - 1) return "-";
		if(isLastRow && endOfRow) 	return "-\n";


		if(x > 0 && endOfRow) {
			if(y < y2){

				var rowData = {
					'x': this.getRowStart(x2, y)
				}
				r.canvas.rows.push(rowData);
			}

			return "|\n";
		}

		return  (x == 0) ? "|" : ' ';
	}

	/*
	** Processes each row and character
	*/
	this.processCanvas = function(x1, y1, x2, y2, canvas){
		var buffer  = (typeof canvas !== 'undefined') ? canvas.content : '';

		var limit 	= y2 + 2; //+2 for the header and footer

		//For each row
		for(var y = 0; y < limit; y++){
			//for character in each row
			for(var x = 0; x < x2; x++){
				var shape  = {
					x1: x1,
					y1: y1,
					x2: x2,
	 				y2: y2,
	 				x: x,
	 				y: y
				};
				buffer = this.plot(buffer, shape)
			}
		}

		return buffer;
	}

	this.plotShape  = function(x1, y1, x2, y2, canvas){
		var buffer  = canvas.content;

		//For each row
		for(var y = 0; y <= y2; y++){
			//for character in each row
			for(var x = 0; x <= x2; x++){
				var shape  = {
					x1: x1,
					y1: y1,
					x2: x2,
	 				y2: y2,
	 				x: x,
	 				y: y
				};
				buffer = this.plot(buffer, shape)
			}
		}

		return buffer;
	}

	this.isInRange     = function(x, y, x1, y1, x2, y2){
		return (x >= x1 && x <= x2 && y >= y1);
	}

	this.getRowStart   = function(x2, y){
		return (x2 * y) + y;
	}

	this.plot  = function(buffer, shape){
		var x  = shape.x;
		var y  = shape.y;

		var x1 = shape.x1;
		var y1 = shape.y1;
		var x2 = shape.x2;
		var y2 = shape.y2;

		var symbol = this.resolveSymbol(shape);

		//If plotting points
		if(typeof r.canvas.content !== 'undefined'){
			if(this.isInRange(x, y, x1, y1, x2, y2)){
				var rowStartingIdx = r.canvas.rows[y - 1].x;
				var plotPosition   = rowStartingIdx + x;

				var prebuffer = buffer.slice(0, plotPosition);  //canvas up to insertion				
				prebuffer +=  symbol;

				buffer = prebuffer + buffer.slice(prebuffer.length);
			}
		} else {
			//making canvas
			buffer 	   += symbol;
		}

		return buffer;
	}

	this.draw 		   = function(canvas){
		console.log(canvas.content);
	}
}

Rembrant.prototype.C = function(x1, y1, x2, y2){
	var canvas;
	r.canvas 		 = canvas =  {
		rows: [],
		canvas_length: x2,
		canvas_height: y2
	};

	canvas.content   = r.processCanvas(x1, y1, x2, y2).trim();
}

/*
	x1: starting x
	y1: starting y
	x2: end x
	y2: end y
*/
Rembrant.prototype.L = function(x1, y1, x2, y2, canvas){
	var canvas = this.plotShape(x1, y1, x2, y2, canvas);

	return canvas;
}

Rembrant.prototype.R = function(){}

Rembrant.prototype.B = function(){}

Rembrant.prototype.Q = function(){}

(function(){
	window.rembrant  = window.r = new Rembrant();
	window.C = r.C;
	window.L = r.L;
	window.R = r.R;
	window.B = r.B;
	window.Q = r.Q;
}());