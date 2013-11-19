var Name
var Job

function startGame()
{
	/*make object
Name= document.getElementById('nameBox').value;
Job= document.getElementById('Jobbox').value;
*/
	return document.getElementById('outputDiv').innerHTML ="Background info. <br><br> 	<button onclick=' Continue();'> Click to continue</button>"
}

function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}

function Road()
{
	return document.getElementById('outputDiv').innerHTML =" You start to proceed down the road. The wind and rain start to pick up the farther away from the mansion you go. The street lights flicker giving off a dim light every couple of seconds or so. After about 5 minutes of walking down the road the streetlights stop flickering and go out. You feel a strong force hit the back of your head. You are knocked unconscious. You wake up in the foyer of the mansion.   <br><br>  <button onclick=' Foyer();'>Click to Continue</button> "
}
function Foyer()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Kitchen()'>Go to Kitchen</button>    <button onclick=' Study()'>Go to Study</button>    <button>Go Upstairs</button>"
}

function Kitchen()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Door1()'>Check Door</button>    <button onclick=' Kitchen2()'>Search the Kitchen</button> <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Door1()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Kitchen2()'>Search Kitchen</button>    <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Kitchen2()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' floor()'>Lift loose floor board</button>    <button onclick=' Food()'>Make a Sandwhich</button> <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Food()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Eat()'>Eat the Sandwhich</button>    <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Eat()
{
	return document.getElementById('outputDiv').innerHTML =" You take a bite of what seems to be a glorious sandwhich. You cant remember having a better sandwhich than this one... <br> you start feeling funny. Your mouth starts tingling. Soon your entire body is shaking frantically. You drop the sandwhich and start walking backward. how you a sandwhich be doing this... how ...how... <br> Poison! <br> You are dead. Don\'t Trust food! <br><br>  <button onclick=' startGame()'>Play Again?</button>"
}
/*
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Continue()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}


/*
// Show and hide
	var btn;

	btn.style.visibility = 'hidden';
	btn.style.visibility = 'visible';

	btn.style.display = 'none';
	btn.style.display = 'inline'; // for a div or block element, set it to 'block'


*/

/*

//Make new tags

	var div = document.getElementById('divId');

	div.innerHTML = "<button>Button Text</button><button>Other button</button>";

	//////////////////////////////

*/
