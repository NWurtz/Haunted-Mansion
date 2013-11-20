

function startGame()
{
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

function floor()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Basement()'>Go Down the stairs</button>    <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Basement()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Shining()'>Open the Shining Door</button>    <button onclick=' Jail()'>Look in the jail cell</button> <button onclick=' Boiler()'>Go to the boiler room</button>"
}
function Boiler()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Key()'>Pick up the Key</button>    <button onclick=' Basement()'>Go back to the Basement</button>"
}
function Key()
{
	//Enable True
	return document.getElementById('outputDiv').innerHTML=" More Story. <br><br>   <button onclick=' Basement()'>Go back to the Basement</button>"
}
function Jail()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Basement()'>Go back to the Basement</button>"
}
function Shining()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Takegold()'>Take the Gold</button>    <button onclick=' Door2()'>Go through the Door in the back</button>"
}
function Takegold()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Run()'>Run for Door</button> <button onclick=' Gold()'>Take MORE Gold</button> "
}
function Run()
{
	return document.getElementById('outputDiv').innerHTML =" End. <br><br> <button onclick=' startGame()'>Play Again?</button>"
}
function Gold()
{
	return document.getElementById('outputDiv').innerHTML =" End. <br><br> <button onclick=' startGame()'>Play Again?</button>"
}
function Door2()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Crown()'>Take Crown off Skeleton</button>    <button onclick=' Locked()'>Try to open Door</button>"
}
function Crown()
{
	return document.getElementById('outputDiv').innerHTML =" End <br><br> <button onclick=' startGame()'>Play Again?</button>"
}
function Locked()
{
	//if ture treasure if not true crown
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Treasure()'>Go through the Door</button>    <button onclick=' Crown()'>Take Crown off Skeleton</button>"
}
function Treasure()
{
	return document.getElementById('outputDiv').innerHTML =" End. <br><br> <button onclick=' startGame()'>Play Again?</button>"
}
function Study()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Painting()'>Look at the Paintings</button>    <button onclick=' Desk()'>Check the Desk</button> <button onclick=' Foyer()'>Go back to the Foyer</button> "
}

function Desk()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Bottle()'>Smell Bottle</button>    <button onclick=' Painting()'>Look at the the Paintings</button> <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Bottle()
{
	return document.getElementById('outputDiv').innerHTML =" End. <br><br>  <button onclick=' startGame()'>Play Again?</button>"
}
function Painting()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Button()'>Press Button</button>    <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Button()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Bookcase()'>Go down passage behind bookcase</button>    <button onclick=' Foyer()'>Go back to the Foyer</button>"
}
function Bookcase()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Riddle()'>Continue down Hallway</button>"
}
function Riddle()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br> <input id='riddleInput' type='text' size ='5'>  <button onclick=' Riddle2(riddleInput)'> Enter</button>"
}
function Riddle2(riddleInput)
{
	var output;
	var userInput;
	var action;

	output= document.getElementById('output');
	userInput= document.getElementById('riddleInput').value;
	riddle=userInput.toLowerCase();
	 if (riddle === 'match'){
		output.innerHTML= "<button onclick=' Right()'>You are right</button>";
		}else
		output.innerHTML= "<button onclick=' Wrong()'>You are wrong</button>";
}
function Right()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Wrong()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Run2()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Fight()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Winfight()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Climb()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Hide()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Escape()
{
	return document.getElementById('outputDiv').innerHTML =" More Story. <br><br>  <button onclick=' Foyer()'>Check out Mansion</button>    <button onclick=' Road()'>Look for help down the road</button>"
}
function Stay()
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
