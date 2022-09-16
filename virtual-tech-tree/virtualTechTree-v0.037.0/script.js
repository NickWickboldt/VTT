import {tickArr, tickData} from './excess.js';

const woodKeys = 15;
const woodTokens = 260000;
const stoneKeys = 16;
const stoneTokens = 290000;
const ironKeys = 18;
const ironTokens = 325000;
const goldKeys = 20;
const goldTokens = 360000;
const diamondKeys = 25;
const diamondTokens = 450000;
const legendaryKeys = 30;
const legendaryTokens = 560000;

const keyNumberDiv = document.querySelector(".key-number");
const tokenNumberDiv = document.querySelector(".token-number");
let keyNumber = 0;
let tokenNumber = 0;
keyNumberDiv.innerHTML = "Keys: " + keyNumber;
tokenNumberDiv.innerHTML = "Tokens: " + tokenNumber;

const unlockWoodButton = document.querySelector(".unlock-wood");
const unlockStoneButton = document.querySelector(".unlock-stone");
const unlockIronButton = document.querySelector(".unlock-iron");
const unlockGoldButton = document.querySelector(".unlock-gold");
const unlockDiamondButton = document.querySelector(".unlock-diamond");
const unlockLegendaryButton = document.querySelector(".unlock-legendary");

NodeList =document.querySelectorAll(".node");
const popUpBoxDiv =document.getElementById("pop-up-box");

unlockWoodButton.addEventListener("click", function () {
  let tempS = "wood";
  openChest(tempS);
});
unlockStoneButton.addEventListener("click", function () {
  let tempS = "stone";
  openChest(tempS);
});
unlockIronButton.addEventListener("click", function () {
  let tempS = "iron";
  openChest(tempS);
});
unlockGoldButton.addEventListener("click", function () {
  let tempS = "gold";
  openChest(tempS);
});
unlockDiamondButton.addEventListener("click", function () {
  let tempS = "diamond";
  openChest(tempS);
});
unlockLegendaryButton.addEventListener("click", function () {
  let tempS = "legendary";
  openChest(tempS);
});

keyNumberDiv.addEventListener("click",function(){
  let k = prompt("Enter keys: ", keyNumber);
  k = parseInt(k);
  if(Number.isInteger(k)){
    keyNumber=k;
  }
  keyNumberDiv.innerHTML = "Keys: " + keyNumber;
});
tokenNumberDiv.addEventListener("click",function(){
  let t = prompt("Enter tokens: ", tokenNumber);
  t= parseInt(t);
  if(Number.isInteger(t)){
    tokenNumber=t;
  } 
  tokenNumberDiv.innerHTML = "Tokens: " + tokenNumber;
});

function openChest(chest) {
  switch (chest) {
    case "wood":
      keyNumber += woodKeys;
      tokenNumber += woodTokens;
      break;
    case "stone":
      keyNumber += stoneKeys;
      tokenNumber += stoneTokens;
      break;
    case "iron":
      keyNumber += ironKeys;
      tokenNumber += ironTokens;
      break;
    case "gold":
      keyNumber += goldKeys;
      tokenNumber += goldTokens;
      break;
    case "diamond":
      keyNumber += diamondKeys;
      tokenNumber += diamondTokens;
      break;
    case "legendary":
      keyNumber += legendaryKeys;
      tokenNumber += legendaryTokens;
      break;

  }
  keyNumberDiv.innerHTML = "Keys: " + keyNumber;
  tokenNumberDiv.innerHTML = "Tokens: " + tokenNumber;
}

for(let i=0; i<=NodeList.length;i++)
{
  if(getNodeKeyValue(NodeList[i])<0){
    NodeList[i].querySelector(".key-value").style.opacity=0; 
  }
  NodeList[i].addEventListener("mouseover", function () {
    popUpBoxDiv.style.opacity="100%";
    popUpBoxDiv.innerHTML = getTokenLabel(NodeList[i]);
  });
  NodeList[i].addEventListener("mouseout", function () {
    popUpBoxDiv.style.opacity="0%";
    if(getNodeKeyValue(NodeList[i])==-5){
      NodeList[i].style.backgroundColor="rgb(8,68,250)";
      NodeList[i].style.borderColor="gold";
    }
  });
  NodeList[i].addEventListener("click", function(){
    let keyI=getNodeKeyValue(NodeList[i]);
    if(keyI>1){
      unlockNodeEvent(NodeList[i],keyI);
    }else{
      upgradeNodeEvent(NodeList[i]);
    }
  });
}

function getNodeLabel(currentNode)
{
  let label = currentNode.querySelector(".node-label").innerHTML;
  return label; 

}
function getNodeKeyValue(currentNode){
  let label = currentNode.querySelector(".key-value").innerHTML;
  return label; 
}
function unlockNodeEvent(currentNode,keyValue){
  let s = getNodeLabel(currentNode).trim();
  if(keyValue>keyNumber){
    alert("Not enough keys!");
  }else{
    if(s=="3 ER"||s=="4 ER"||s=="5 ER"||s=="6 ER"||s=="7 ER"||s=="Multi Node"||s=="Proto Node"||s=="Mine Node"){
      currentNode.style.backgroundColor="blue";
      currentNode.style.borderColor="gold";
      keyNumber-=keyValue; 
      keyNumberDiv.innerHTML="Keys: " + keyNumber;
      currentNode.querySelector(".key-value").innerHTML = "-1"; 
      currentNode.querySelector(".key-value").style.opacity=0; 
      let i = tickData(getNodeLabel(currentNode).trim());
      popUpBoxDiv.innerHTML = "UNLOCKED";
    }else{
      currentNode.style.backgroundColor="rgb(128, 204, 230)";
      keyNumber-=keyValue; 
      keyNumberDiv.innerHTML="Keys: " + keyNumber;
      currentNode.querySelector(".key-value").innerHTML = "-1"; 
      currentNode.querySelector(".key-value").style.opacity=0; 
      let i = tickData(getNodeLabel(currentNode).trim());
      popUpBoxDiv.innerHTML = "Upgrade for " + tickArr.arr[i].tick1 + " tokens?";
    }
  }
}
function upgradeNodeEvent(currentNode){
 
  let i = currentNode.querySelector(".key-value").innerHTML;
  i = i.trim();
  i=parseInt(i);
  i=-i;
  let tempS = getNodeLabel(currentNode);
  tempS = tempS.trim(); 
  let tempN = getData(tempS,i);
  if(tempN>0){  
    currentNode.querySelector(".key-value").innerHTML -=1;
    evaluateUpgrade(tempN); 
  }else{
    if(tempS=="3 ER"||tempS=="4 ER"||tempS=="5 ER"||tempS=="6 ER"||tempS=="7 ER"||tempS=="Multi Node"||tempS=="Proto Node"||tempS=="Mine Node"){
      return; 
    }else{
      if(getNodeKeyValue(currentNode)>=-4){
        alert("Not enough tokens!");
      }
    }
  }
} 
function getData(temp,num){
  let t = temp.trim(); 
  let i =0; 
  i = tickData(t);
  let val=0; 
  switch(num){
    case 1: if(tokenNumber>=tickArr.arr[i].tick1){
      val = tickArr.arr[i].tick1; 
      popUpBoxDiv.innerHTML = "Upgrade for "+tickArr.arr[i].tick2 + " tokens?";
    }break; 
    case 2: if(tokenNumber>=tickArr.arr[i].tick2){
      val = tickArr.arr[i].tick2; 
      popUpBoxDiv.innerHTML = "Upgrade for "+tickArr.arr[i].tick3 + " tokens?";
    }break; 
    case 3: if(tokenNumber>=tickArr.arr[i].tick3){
      val = tickArr.arr[i].tick3; 
      popUpBoxDiv.innerHTML = "Upgrade for "+tickArr.arr[i].tick4 + " tokens?";
    }break; 
    case 4: if(tokenNumber>=tickArr.arr[i].tick4){
      val = tickArr.arr[i].tick4; 
      popUpBoxDiv.innerHTML = "MAXED";
    }break; 
  }
  return val; 
}
function evaluateUpgrade(val){
  tokenNumber-=val; 
  tokenNumberDiv.innerHTML="Tokens: " +tokenNumber; 
}
function getTokenLabel(currentNode){
  let s = getNodeLabel(currentNode).trim();
  let n = parseInt(getNodeKeyValue(currentNode));
  let i = tickData(s); 
  let l =""; 
  if(s=="3 ER"||s=="4 ER"||s=="5 ER"||s=="6 ER"||s=="7 ER"||s=="Multi Node"||s=="Proto Node"||s=="Mine Node"){
    switch(n){
      case -1: l = "UNLOCKED";
      currentNode.style.backgroundColor="blue";
      currentNode.style.borderColor="gold";
      break;
      default: l ="Unlock for "+n+" keys?";
    }
  }else{
    switch(n){
      case -1: l = "Upgrade for " + tickArr.arr[i].tick1 + " tokens? "; 
      break;
      case -2: l = "Upgrade for " + tickArr.arr[i].tick2 + " tokens? "; 
      break; 
      case -3: l = "Upgrade for " + tickArr.arr[i].tick3 + " tokens? "; 
      break; 
      case -4: l = "Upgrade for " + tickArr.arr[i].tick4 + " tokens? "; 
      break;
      case -5: l = "MAXED"; 
      break;
      default: l = "Unlock for "+n+" keys?";  
    }
  }

  return l; 
}


