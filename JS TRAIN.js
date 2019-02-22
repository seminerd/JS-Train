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




