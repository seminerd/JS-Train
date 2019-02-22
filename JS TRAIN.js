// start : 10h34
var hoaqua = ["chuoi", "cam", "tao", "xoai"];
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
hoaqua[hoaqua.length] = "tao";
delete hoaqua[3];
hoaqua.splice(2, 0, "chuoi", "kiwi");
hoaqua.splice(2, 2, "chuoi", "kiwi");
hoaqua.splice(0, 1);

var myGirls = ["Ly", "Huong"];
var myBoys = ["Tung", "Toan"];
var myChildren = myGirls.concat(myBoys);
var concat3 = myGirls.concat(myBoys, myChildren);
var concat4 = concat3.concat([" some", "thing", "just", "like", "this"]);
var citrus = hoaqua.slice(3);
var citrus2 = hoaqua.slice(1);
document.getElementById("demo").innerHTML = hoaqua.toString();
document.getElementById("demo").innerHTML = hoaqua;
 ===  ===  ===  == SORTING ARRAY ===  ===  ===  ===  ===  ==
var hoaqua = ["chuoi", "tao", "xoai", "cam"];
hoaqua.sort();
hoaqua.reverse();
var numb = [1, 4, 7, 2, 47, 86];
numb.sort(function (a, b)
{
    return a - b
}
);
numb.sort(function (a, b)
{
    return b - a
}
);
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
var numb = [12, 54, 76, 23, 9];
numb.sort(function (a, b)
{
    return 0.5 - Math.random()
}
);
function myArrayMax(arr)
{
    return Math.max.apply(null, arr);

}
function myArrayMin(arr)
{
    return Math.min.apply(null, arr);
}
function myArrMax()
{
    var len = arr.length;
    var max = -Infinity;
    while (len--)
    {
        if (arr[len] > max)
        {
            max = arr[len];
        }
    }
    return max;

}
function myArrMin(arr)
{
    var len = arr.length;
    var min = Infinity;
    while (len--)
    {
        if (arr[len] < min)
        {
            min = arr[len];
        }

    }
    return min;
}
var xehoi = [
    {
        type: "volvo",
        year = 2016
    },
    {
        type: " SAAB",
        year = 2001
    },
    {
        type: " BMW",
        year: 2010
    }
];
xehoi.sort(function (a, b)
{
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y)
    {
        return -1;
    }
    if (x > y)
    {
        return 1;
    }
    return 0;
}
)
var txt = "";
var so = [123, 456, 876, 234, 1];
so.forEach(myFunction);
function myFunction(value, index, array)
{
    txt = txt + value + "<br>";

}
var so1 = [1, 4, 2, 235, 124];
var so2 = so1.map(myFunction3);
function myFunction3(value, index, array)
{
    return value * 2
}
var over10 = so1.filter(myFunction4);
function myFunction4(value, index, array)
{
    return value > 10;

}
var sum = so1.reduce(myFunction5);
function myFunction5(total,value,index,array){
	return total + value;

}
var sum2 = so1.reduceRight(myFunction6)
function myFuction6(total , value){
	return total + value;

}
var allover10 = so1.every(myFunction7)
function myFunction7(value){
	return value > 10;
}
var someover10 = so1.some(myFunction8)
function myFunction8(){
	return value >10;
}
var idexof = hoaqua.indexOf("tao");
var lastindex = hoaqua.lastIndexOf("tao");
var first = so1.find(myFunction9)
function myFunction9(value){
	return value > 10;
}
var indexfirst = so1.findIndex(myFunction10)
function myFunction10(value){
	return value >10 ;

}
============DATE==============
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
var d = new Date(2018, 11, 24, 10, 33, 30);
var d = new Date(2018, 11, 24, 10, 33);
var d = new Date(2018, 11, 24, 10);
var d = new Date(2018, 11, 24);
var d = new Date(2018, 11);
var d = new Date(2018);
/// end 1h27
Math.floor(4.7) // <--- làm tròn xuống sàn số ( 4,7 xuống 4)
Math.string(90* Math.PI / 180);
Math.min(14,543,2,62,3,75);
Math.max(235,23,75,23,665);
Math.random();
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
asin(x)	Returns the arcsine of x, in radians
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
ceil(x)	Returns the value of x rounded up to its nearest integer
cos(x)	Returns the cosine of x (x is in radians)
exp(x)	Returns the value of Ex
floor(x)	Returns the value of x rounded down to its nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Returns the value of x rounded to its nearest integer
sin(x)	Returns the sine of x (x is in radians)
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
function getRndInteger(min,max){
	return Math.floor(Math.random()*(max - min)) + min;

}
Boolean(1);
if (hour <18) {
	greeting = " good day";
}
if (true) {greeting = "good day";} else {
	greeting = " good evening";

}
if (time <10) {
	greeting = " good morning ";

} else if(time <20) {
	greeting = " good day";

} else { greeting = "good evening"}
switch (new Date().getDay()){
	case 0:
	day = " sunday";
	break;
	case 1:
	day = "monday";
	break;
	case 2 :
	day = " tuesday";
	break;
	case 3:
	day = "wednesday";
	break;
	case 4:
	day = " thursday";
	break;
	case 5:
	day = " friday";
	break;
	case 6:
	day = " saturday";
	break;
	default:
	day = " dont know";
} // switch case use STRICT COMPARISON ( === )
var i;
for ( i=1 ; i< xehoi.length ; i++){
	text += xehoi[i]+"<br>";
}
var person = {fname :"Nguyen", lname:"Huy",age : 20};
var text = "";
var x;
for (x in person){
	text += person[x];
}
while (i <10){
	text += " The number is " + i;
	i ++;
}
do {
	text += " the number is " + i ;
	i ++;
}
while (i<10);
for (i = 0; i<10;i++) {
	if ( i===3){continue;}
	text += " the number is " + i + "<br>";
}
list :{
	text += xehoi[0];
	text += xehoi[1];
	text+= xehoi[2];
	break list;
	text+=xehoi[3];
} // --------> đoạn này chưa hiểu lắm , cần review lại sau 

