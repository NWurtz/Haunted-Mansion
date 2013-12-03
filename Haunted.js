/*
player = {
    name: document.getElementById('namebox').value,
    profession: document.getElementById('job').value,
		 }
*/

function startGame()
{

 document.getElementById('startGame').style.display ='block';
 document.getElementById('Eat').style.display ='none';
 document.getElementById('Run').style.display ='none';
 document.getElementById('Gold').style.display ='none';
 document.getElementById('Crown').style.display ='none';
 document.getElementById('Bottle').style.display ='none';
 document.getElementById('Road').style.display ='none';
 document.getElementById('Right').style.display ='none';
 document.getElementById('Fight').style.display ='none';
 document.getElementById('Winfight').style.display ='none';
 document.getElementById('Stay').style.display ='none';
 document.getElementById('Locked').style.display ='none';
 document.getElementById('Climb').style.display ='none';
 document.getElementById('Escape').style.display ='none';
 document.getElementById('Treasure').style.display ='none';
}

player = {
    name: document.getElementById('namebox').value,
    profession: document.getElementById('job').value,
	}

function Continue()
{
 document.getElementById('Continue').style.display='block';
 document.getElementById('startGame').style.display ='none';
}

function Road()
{
document.getElementById('Road').style.display='block';
document.getElementById('Continue').style.display ='none';
}
function Foyer()
{
document.getElementById('Foyer').style.display='block';
document.getElementById('Road').style.display ='none';
document.getElementById('Continue').style.display ='none';
document.getElementById('Kitchen').style.display='none';
document.getElementById('Door1').style.display='none';
document.getElementById('Kitchen2').style.display='none';
document.getElementById('Food').style.display='none';
document.getElementById('Floor').style.display='none';
document.getElementById('Study').style.display='none';
document.getElementById('Desk').style.display='none';
document.getElementById('Painting').style.display='none';
document.getElementById('Button').style.display='none';
document.getElementById('Escape').style.display='none';
document.getElementById('Stay').style.display='none';
}

function Kitchen()
{
document.getElementById('Kitchen').style.display='block';
document.getElementById('Foyer').style.display ='none';
document.getElementById('Door1').style.display ='none';
}
function Door1()
{
document.getElementById('Door1').style.display='block';
document.getElementById('Kitchen').style.display ='none';
}
function Kitchen2()
{
document.getElementById('Kitchen2').style.display='block';
document.getElementById('Door1').style.display ='none';
document.getElementById('Kitchen').style.display ='none';
}
function Food()
{
document.getElementById('Food').style.display='block';
document.getElementById('Kitchen2').style.display ='none';
}
function Eat()
{
document.getElementById('Eat').style.display='block';
document.getElementById('Food').style.display ='none';
}

function Floor()
{
document.getElementById('Floor').style.display='block';
document.getElementById('Kitchen2').style.display ='none';
}
function Basement()
{
document.getElementById('Basement').style.display='block';
document.getElementById('Floor').style.display ='none';
document.getElementById('Key').style.display='none';
document.getElementById('Jail').style.display='none';
}
function Boiler()
{
document.getElementById('Boiler').style.display='block';
document.getElementById('Basement').style.display ='none';
}
function Key()
{
document.getElementById('Key').style.display='block';
document.getElementById('Boiler').style.display ='none';
	Key='Haskey'
}
function Jail()
{
document.getElementById('Jail').style.display='block';
document.getElementById('Basement').style.display ='none';
}
function Shining()
{
document.getElementById('Shining').style.display='block';
document.getElementById('Basement').style.display ='none';
}
function Takegold()
{
document.getElementById('Takegold').style.display='block';
document.getElementById('Shining').style.display ='none';
}
function Run()
{
document.getElementById('Run').style.display='block';
document.getElementById('Takegold').style.display ='none';
}
function Gold()
{
document.getElementById('Gold').style.display='block';
document.getElementById('Takegold').style.display ='none';
}
function Door2()
{
document.getElementById('Door2').style.display='block';
document.getElementById('Shining').style.display ='none';
}
function Locked()
{
	document.getElementById('Door2').style.display ='none';

	if(Key==='Haskey'){
		document.getElementById('Treasure').style.display='block';
	}else{
		document.getElementById('Locked').style.display='block';
	}
}
function Crown()
{
document.getElementById('Crown').style.display='block';
document.getElementById('Door2').style.display ='none';
document.getElementById('Locked').style.display='none';
}

function Treasure()
{
document.getElementById('Treasure').style.display='block';
document.getElementById('Locked').style.display ='none';
}
function Study()
{
document.getElementById('Study').style.display='block';
document.getElementById('Foyer').style.display ='none';
}

function Desk()
{
document.getElementById('Desk').style.display='block';
document.getElementById('Study').style.display ='none';
}
function Bottle()
{
document.getElementById('Bottle').style.display='block';
document.getElementById('Desk').style.display ='none';
}
function Painting()
{
document.getElementById('Painting').style.display='block';
document.getElementById('Study').style.display ='none';
document.getElementById('Desk').style.display ='none';
document.getElementById('Bottle').style.display ='none';
}
function Button()
{
document.getElementById('Button').style.display='block';
document.getElementById('Painting').style.display ='none';
}
function Bookcase()
{
document.getElementById('Bookcase').style.display='block';
document.getElementById('Button').style.display ='none';
}
function Riddle()
{
document.getElementById('Riddle').style.display='block';
document.getElementById('Bookcase').style.display ='none';
}
function Riddle2(riddleInput)
{
document.getElementById('Riddle').style.display ='none';
	var userInput;

	userInput= document.getElementById('riddleInput').value;
	riddle=userInput.toLowerCase();
	 if (riddle === 'suicide'){
		document.getElementById('Right').style.display='block';
		}else{
		document.getElementById('Wrong').style.display='block';
		}
}

function Run2()
{
document.getElementById('Run2').style.display='block';
document.getElementById('Wrong').style.display ='none';
}
function Fight()
{
document.getElementById('Fight').style.display='block';
document.getElementById('Wrong').style.display ='none';
}
function Winfight()
{
document.getElementById('Winfight').style.display='block';
document.getElementById('Wrong').style.display ='none';
}
function Climb()
{
document.getElementById('Climb').style.display='block';
document.getElementById('Run2').style.display ='none';
}
function Hide()
{
document.getElementById('Hide').style.display='block';
document.getElementById('Run2').style.display ='none';
}
function Escape()
{
document.getElementById('Escape').style.display='block';
document.getElementById('Hide').style.display ='none';
}
function Stay()
{
document.getElementById('Stay').style.display='block';
document.getElementById('Hide').style.display ='none';
}

