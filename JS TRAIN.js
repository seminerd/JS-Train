// start : 10h34
var hoaqua = ["chuoi","cam","tao","xoai"];
document.getElementById("demo").innerHTML = hoaqua.toString();
document.getElementById("demo").innerHTML = hoaqua.join(" * ");
hoaqua.pop();
var poped = hoaqua.pop();
hoaqua.push();
var pushed = hoaqua.push("tao");
hoaqua.shift();
var shifted = hoaqua.shift();
hoaqua.unshift("Lemon");
hoaqua[0] = " Kiwi";
hoaqua[hoaqua.length]="tao";
delete hoaqua[3];
hoaqua.splice(2,0,"chuoi","kiwi");
hoaqua.splice(2,2,"chuoi","kiwi");
hoaqua.splice(0,1);

var myGirls = [ "Ly","Huong"];
var myBoys = ["Tung","Toan"];
var myChildren = myGirls.concat(myBoys);
var concat3 = myGirls.concat(myBoys,myChildren);
var concat4 = concat3.concat([" some","thing","just","like","this"]);
var citrus = hoaqua.slice(3);
var citrus2 = hoaqua.slice(1);
document.getElementById("demo").innerHTML = hoaqua.toString();
document.getElementById("demo").innerHTML = hoaqua;
=========== SORTING ARRAY =================
var hoaqua = ["chuoi","tao","xoai","cam"];
hoaqua.sort();
hoaqua.reverse();
var numb = [1,4,7,2,47,86];
numb.sort(function(a,b){return a-b});
numb.sort(function(a,b){return b-a});
/*
///html
<button onclick = "myFunction()">Sort theo chu cai</button>
<button onclick ="myFuction2()">Sort theo so</button>
<p id = "demo">Demo</p>
<script> 
var numb = [1,53,13,5,1,4678,2];
document.getElementById("demo").innerHTML = numb;
function myFunction(){
	numb.sort();
	document.getElementById("demo").innerHTML = numb;

} 
function myFunction2(){
	numb.sort(function(a,b){return a - b});
	document.getElementById("Demo").innerHTML = numb;

}
</script> 
// end html */
var numb = [12,54,76,23,9];
numb.sort(function(a,b){return 0.5 - Math.random()});
function myArrayMax(arr){
	return Math.max.apply(null,arr);
	

}





