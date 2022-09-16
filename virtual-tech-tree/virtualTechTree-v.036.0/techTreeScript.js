const woodKeys= 11; const woodTokens=200000;
const stoneKeys= 12; const stoneTokens=230000;
const ironKeys= 13; const ironTokens=250000;
const goldKeys= 14; const goldTokens=280000;
const diamondKeys= 17; const diamondTokens=340000;
const legendaryKeys= 21; const legendaryTokens=430000;

const keyValueDiv=document.querySelector(".key-value");
const tokenValueDiv=document.querySelector(".token-value");
let keyValue=0; let tokenValue=0; 

const unlockWoodButton = document.querySelector(".unlock-wood");
const unlockStoneButton = document.querySelector(".unlock-stone");
const unlockIronButton = document.querySelector(".unlock-iron");
const unlockGoldButton = document.querySelector(".unlock-gold");
const unlockDiamondButton = document.querySelector(".unlock-diamond");
const unlockLegendaryButton = document.querySelector(".unlock-legendary");

unlockWoodButton.addEventListener('click', function() {
	let tempS="wood";
	openChest(tempS); 
});
unlockStoneButton.addEventListener('click', function() {
	let tempS="stone";
	openChest(tempS); 
});
unlockIronButton.addEventListener('click', function() {
	let tempS="iron";
	openChest(tempS); 
});
unlockGoldButton.addEventListener('click', function() {
	let tempS="gold";
	openChest(tempS); 
});
unlockDiamondButton.addEventListener('click', function() {
	let tempS="diamond";
	openChest(tempS); 
});
unlockLegendaryButton.addEventListener('click', function() {
	let tempS="legendary";
	openChest(tempS); 
});

function openChest(chest)
{
	switch (chest){
		case "wood": 
			keyValue+=woodKeys;
			tokenValue+=woodTokens;
			break;
		case "stone":
			keyValue+=stoneKeys;
			tokenValue+=stoneTokens;
			break;
		case "iron":
			keyValue+=ironKeys;
			tokenValue=+ironTokens;
			break;
		case "gold":
			keyValue+=goldKeys;
			tokenValue+=goldTokens;
			break;
		case "diamond":
			keyValue+=diamondKeys;
			tokenValue+=diamondTokens;
			break;
		case "legendary":
			keyValue+=legendaryKeys;
			tokenValue+=legendaryTokens;
			break;
		default: break; 
	}
		keyValueDiv.innerHTML= "Keys: "+ keyValue; 
		tokenValueDiv.innerHTML= "Tokens: " + tokenValue; 


}

$(window).scroll(function(){
	scrollOld = $(window).scrollLeft();
	$('.info-panel').css('top','+' +$(window).scrollLeft()+'px');
});

