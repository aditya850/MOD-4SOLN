var x=prompt("ENTER THE NUMBER OF NAME LIST:(i.e, 2,3,4) ");
for(var i=0; i<x; i++)
{   var arr= new Array();
	arr[i]=prompt("ENTER THE NAMES");
    console.log(arr[i]);
	if(names(arr[i])==true)
	{
		console.log("Goodbye JSomeName");
	}
	if(names(arr[i])==false)
	{
		console.log("Hello Someone");
	}	
}
function names(str)
{
	var arr1 =str;
	if(arr1[0]=='j'||arr1[0]=='J')
	{
		return true;
	}
	else
	{
		return false;
	}
}
