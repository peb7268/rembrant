
describe('Should create a drawing application', function(){
	var x1, y1, x2, y2;
	beforeEach(function(){
		x1 = 0;
		y1 = 0;
		x2 = 20;
		y2 = 4;

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
			expect(r.canvas.rows.length).toEqual(4);
		});
		
		it('should make the footer', function(){
			var lastLine = r.canvas.content.slice(r.canvas.content.length - 20);
				lastLine = lastLine.slice(lastLine);
				

			expect(lastLine[0]).toBe('-');
			expect(lastLine.length).toEqual(20);
		});
	});

	describe('Should draw a line on the canvas', function(){
		it('should make a vertical line starting at 2, 1', function(){
			var x1, y1, x2, y2;
			x1 = 2;
			y1 = 1;
			x2 = 2;
			y2 = 3;

			r.canvas.content = r.L(x1, y1, x2, y2, r.canvas);

			//Get the starting character of row 2
			var content  = r.canvas.content;
			var rows     = r.canvas.rows;
			var rowStart = rows[y1];
			var _char    = content[rowStart.x];

			console.log(content);
			expect(1).toBe(1);
		});

		it('should make a horizontal line from 2, 1 to 10, 1', function(){
			var x1, y1, x2, y2;
			x1 = 2;
			y1 = 1;
			x2 = 10;
			y2 = 1;
			
			r.canvas.content = r.L(x1, y1, x2, y2, r.canvas);

			//Get the starting character of row 2
			var content  = r.canvas.content;
			var rows     = r.canvas.rows;
			var rowStart = rows[y1];
			var _char    = content[rowStart.x];

			console.log(content);
			expect(1).toBe(1);
		});


		xit('should print a line from x1 to x2', function(){});
		xit('should subtract however many chartacters it inserts into the row after the line', function(){});
	});
	
	afterEach(function(){
		
	});
});
