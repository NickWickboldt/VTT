const days = document.querySelector(".days");
const hours =document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds");

const currentYear = new Date().getFullYear();
const seasonStartTime = new Date('August 1 2022 03:00:00');
const seasonEndTime = new Date('August 22 2022 03:00:00');

const dateDependency = document.querySelector(".date-dependency");

function updateCountdownTime(){
  const currentTime= new Date();
  let diff=0; 
  if(currentTime>seasonStartTime && currentTime<seasonEndTime){
    diff = seasonEndTime - currentTime; 
    dateDependency.innerHTML = "ends in";
  }else if(currentTime>seasonEndTime){
   diff=0;
   dateDependency.innerHTML = "has ended";
  }else{
    diff=seasonStartTime-currentTime;
    dateDependency.innerHTML = "begins in";
  }

  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor(diff/1000/60/60)%24;
  const m = Math.floor(diff/1000/60)%60;
  const s = Math.floor(diff/1000)%60;

  days.innerHTML=d;
  hours.innerHTML=h<10 ? '0' +h: h;
  minutes.innerHTML=m<10 ? '0' +m: m;
  seconds.innerHTML=s<10 ? '0' +s: s;
}


setInterval(updateCountdownTime,1000);