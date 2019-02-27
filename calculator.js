var res = 0;
var cplus = 1;
var cmin = 0;
var cmul = 0;
var cdiv = 0;
function plus()
{
    document.getElementById("result").innerHTML = "+";
    cplus = 1;
    cmin = 0;
    cmul = 0;
    cdiv = 0;
}
function minus()
{

    document.getElementById("result").innerHTML = "-";
    cmin = 1;
    cplus = 0;

    cmul = 0;
    cdiv = 0;
}
function multi()
{
    
    document.getElementById("result").innerHTML = "*";
    cmul = 1;
    cplus = 0;
    cmin = 0;
   cdiv = 0;
}
function divide()
{
    
    document.getElementById("result").innerHTML = "/";
    cdiv = 1;
    cplus = 0;
    cmin = 0;
    cmul = 0;

}
function cal(a)
{
    if (cplus == 1)
    {
        res += a;
    }
    if (cmin == 1)
    {
        res -= a;
    }
    if (cmul == 1)
    {
        res *= a;
    }
    if (cdiv == 1)
    {
        res /= a;
    }


}
function numb(a)
{
    cal(a);

    document.getElementById("result").innerHTML = a;
}


function doequa()
{

    document.getElementById("result").innerHTML = res;
    

}
function reset()
{
	res = 0;
    document.getElementById("result").innerHTML = "0";
}
