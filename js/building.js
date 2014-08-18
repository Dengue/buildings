
	makeField();
	window.figure = new Array(4);
	window.divs = $(".screen-container div");
	letsRoll();


function makeField(){
	var screen = document.getElementsByClassName('screen-container')[0];
	for(var i=0;i<180;i++){
		var div = document.createElement('div');
	    div.setAttribute("class","pix");
	    div.setAttribute("id","deactivated");
	    screen.appendChild(div);
	}
}

function letsRoll(){
	var _figureElement = {};

	function stepDown(){
		if(_figureElement.row==19){
			clearInterval(id);
			letsRoll();
			return;
		}
		var a = _figureElement.row+1;
		if(divs[a*9+_figureElement.column].id=="activated"){
			clearInterval(id);
			letsRoll();
			return;
		}
		divs[_figureElement.row*9+_figureElement.column].setAttribute("id","deactivated");
		_figureElement.row++;
		divs[_figureElement.row*9+_figureElement.column].setAttribute("id","activated");
	}
	function stepRight(){
		divs[_figureElement.row*9+_figureElement.column].setAttribute("id","deactivated");
		_figureElement.column++;
		divs[_figureElement.row*9+_figureElement.column].setAttribute("id","activated");
	}
	function stepLeft(){
		divs[_figureElement.row*9+_figureElement.column].setAttribute("id","deactivated");
		_figureElement.column--;
		divs[_figureElement.row*9+_figureElement.column].setAttribute("id","activated");
	}
          divs[4].setAttribute("id","activated");
          _figureElement.row = 0;
          _figureElement.column = 4;
          var id = setInterval(stepDown,100);
          function keyHandler(e) {
        switch (e.keyCode) {
            case 37:
                stepLeft();
                break;
            case 39:
                 stepRight();
                break;
            case 65:
                stepLeft();
                break;
            case 68:
                 stepRight();
                break;

        }
    }
 window.addEventListener("keydown", keyHandler, false);
 window.addEventListener("keypress",keyHandler , false);
function diffArrays(A,B)
{
    var M = A.length, N = B.length, c = 0, C = [];
    for (var i = 0; i < M; i++)
     { var j = 0, k = 0;
       while (B[j] !== A[ i ] && j < N) j++;
       while (C[k] !== A[ i ] && k < c) k++;
       if (j == N && k == c) C[c++] = A[ i ];
     }
   return C;
}
}

