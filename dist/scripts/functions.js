function add ( a, b) {
	a = parseFloat (a);
	b = parseFloat (b);
	return a + b;
}

function subtract (a, b){
	a=parseFloat (a);
	b=parseFloat (b);
	return a -b;
}
function tax (subTotal, taxPercent){
	subTotal = parseFloat (subTotal);
	taxPercent= parseFloat (taxPercent);
	return (taxPercent/100)*subTotal;
}

function stringLength (input){

		if (input.length<5){	
			return ('Short string');
		}
		else if (input.length>5 && input.length<11){
			return ('medium string');
		}
		else if (input.length>10){
		
			return ('long string');	
		}
	}

function startsWith (apple){
	if (apple[0]=== 'a' || apple[0]=== 'A'){
		return ('starts with A');
	}
	if (apple[0]=== 'b' || apple[0]=== 'B'){
		return ('starts with B');
	}
	if (apple[0]=== 'c' || apple[0]=== 'C'){
		return ('starts with C');
	}
	if (apple[0]=== 'd' || apple[0]=== 'D'){
		return ('starts with D');
	}
	if (apple[0]=== 'e' || apple[0]=== 'E'){
		return ('starts with E');
	}
}

function stringRepeat (pie, num){
	var big='';

	for(var i=0; i<num ; i++){
		big = big+ pie;
	}
		return big;
}

function nSum (num){
	var n=0;
	for(var i=1; i<=num ; i++){
		n=n+i;
	}
		return n;
}
function join (a, b){
	return a.join(b);
}
function countLetters(b){
	var letterCount={};

	for(var i=0; i<b.length ; i++){
		var letter=b[i]
		letterCount[i]=letterCount[i]+1
		
	}


}




















