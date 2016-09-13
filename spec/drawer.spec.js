
var r;

describe('Should create a drawing application', function(){
	beforeEach(function(){
		r = rembrant;

		var x1 = 0;
		var y1 = 0;
		var x2 = 20;
		var y2 = 4;

		r.C(x1, y1, x2, y2);
	});


	describe('Rembrant', function(){
		it('Should create an instance of Rembrant', function(){
			expect(typeof rembrant).toBe('object');
			expect(rembrant instanceof Rembrant).toBeTruthy();
		});
	});

	describe('Should make the canvas', function(){
		it('should make a canvas object', function(){		
			expect(typeof r.canvas).toBe('object');
		});

		it('should have content in the canvas', function(){
			expect(typeof r.canvas.content).toBe('string');
		});

		it('should make the header', function(){
			var content = r.canvas.content;

			expect(content.indexOf('-')).toEqual(0);
			expect(content.indexOf("\n")).toEqual(20);
		});

		it('should make a body row', function(){
			var content 		= r.canvas.content;
			var firstBodyChar   = r.canvas.content[content.indexOf("\n") + 1];

			expect(firstBodyChar).toBe('|');
		});

		it('should contain x rows in the body', function(){
			expect(r.canvas.rows.length).toEqual(3);
		});
		
		it('should make the footer', function(){
			var lastLine = r.canvas.content.slice(r.canvas.content.length - 20);
				lastLine = lastLine.slice(lastLine);
				

			expect(lastLine[0]).toBe('-');
			expect(lastLine.length).toEqual(20);
		});
	});

	describe('Should draw a line on the canvas', function(){
		it('should make a vertical line from 2,1 to 2,3', function(){
			var x1 = 2,
				y1 = 1,
				x2 = 2,
				y2 = 3;

			r.canvas.content = r.L(x1, y1, x2, y2, r.canvas);

			//Get the starting character of row 2
			var content  = r.canvas.content;
			var rows     = r.canvas.rows;
			var rowStart = rows[y1];
			var _char    = content[rowStart.x];

			x  = r.getRowStart(r.canvas.canvas_length, y1) + x1;
			xx = r.getRowStart(r.canvas.canvas_length, y2) + x1;
			
			console.log(content);

			expect(content[x]).toBe('x');
			expect(content[xx]).toBe('x');
		});

		it('should make a horizontal line from 2, 1 to 10, 1', function(){
			var x1 = 2;
				y1 = 1,
				x2 = 10,
				y2 = 1,
				x, y;

			r.canvas.content = r.L(x1, y1, x2, y2, r.canvas);

			//Get the starting character of row 2
			var content  = r.canvas.content;
			var rows     = r.canvas.rows;
			var rowStart = rows[y1];
			var _char    = content[rowStart.x];

			x = r.getRowStart(r.canvas.canvas_length, y1) + x1;
			xx = r.getRowStart(r.canvas.canvas_length, y2) + x1;

			console.log(content);

			expect(content[x]).toBe('x');
			expect(content[xx]).toBe('x');
		});
	});

	describe('Should make a rectangle', function(){
		it('should make four number of passes thought the main loop', function(){
			expect(1).toBe(2);
		});
		it('should have two horizontal lines', function(){
			expect(1).toBe(2);
		});
		it('should have two vertical lines', function(){
			expect(1).toBe(2);
		});
	});
	
	afterEach(function(){});
});
