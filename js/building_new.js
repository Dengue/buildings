(function makeField(){
	var screen = document.getElementsByClassName('screen-container')[0];
	var fragment = document.createDocumentFragment();
	for(var i=0;i<180;i++){
		var div = document.createElement('div');
	    div.setAttribute("class","pix");
	    div.setAttribute("id","deactivated");
	    fragment.appendChild(div);
	}
	screen.appendChild(fragment);
})();
window.divs = $(".screen-container div");

function Figure(forms){
	this.parts = [];
	this.positions = forms;
	this._keyRow = 1;
	this._keyColumn = 4;
	this.position = 0;
	for(var i = 0;i<4;i++){
		this.parts[i] = divs[(this._keyRow+forms[0][i].row)*9 + this._keyColumn + forms[0][i].column];
		this.parts[i].setAttribute("id","activated");
	}

}
Figure.prototype.turnFigure=function(){
	var old = this.parts.slice(0);
	if(this.position==0)
		this.position=1;
	else
		this.position=0;
	for(var i = 0;i<4;i++){
		this.parts[i] = divs[(this._keyRow + this.positions[this.position][i].row)*9 + this._keyColumn + this.positions[this.position][i].column];
		this.parts[i].setAttribute("id","activated");
	}
	var trash =  diffArrays(old,this.parts);
	tidyUp(trash);

}
//var _square = new Figure(_figures.square());
var _duck = new Figure(_figures.duck());
_duck.turnFigure();
















































    function tidyUp(trash){
    	for(var i=0;i<trash.length;i++){
    		trash[i].setAttribute("id","deactivated");
    	}
    }
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
function diffArrays(A,B){
    var M = A.length, N = B.length, c = 0, C = [];
    for (var i = 0; i < M; i++)
     { var j = 0, k = 0;
       while (B[j] !== A[ i ] && j < N) j++;
       while (C[k] !== A[ i ] && k < c) k++;
       if (j == N && k == c) C[c++] = A[ i ];
     }
   return C;
}

