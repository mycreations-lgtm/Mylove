/* ===============================
   HAPPY GIRLFRIEND'S DAY ❤️
   JS PART 1
================================ */

const pages = document.querySelectorAll(".page");

function nextPage(id){

pages.forEach(page=>page.classList.remove("active"));

document.getElementById(id).classList.add("active");

if(id==="letter"){
typeWriter();
}

}

/* ================= LETTER ================= */

const letter = `My Love ❤️,

Happy Girlfriend's Day.

I know this isn't wrapped inside a fancy gift...

But every word here was written with a smile.

Thank you for being someone who makes life brighter.

Your kindness...

Your smile...

Your beautiful heart...

All of them deserve to be celebrated.

I hope today reminds you just how amazing you truly are.

And whenever life gets difficult...

Never forget that you're appreciated more than words can explain.

Happy Girlfriend's Day,

My Love. ❤️`;

let typingStarted = false;

function typeWriter(){

if(typingStarted) return;

typingStarted = true;

const target = document.getElementById("typewriter");

let i = 0;

function type(){

if(i < letter.length){

target.innerHTML += letter.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

}

/* ================= GIFT ================= */

function openGift(){

const text = document.getElementById("giftText");

text.innerHTML = `
🎉 Congratulations!<br><br>

You've unlocked:<br><br>

🤗 Unlimited Hugs<br>

😊 Unlimited Smiles<br>

❤️ Unlimited Appreciation
`;

document.getElementById("giftBtn").classList.remove("hidden");

}

/* ================= GAME ================= */

let score = 0;

let seconds = 20;

let timer;

let spawn;

function startGame(){

nextPage("game");

score = 0;

seconds = 20;

updateScore();

document.getElementById("timer").innerHTML =
"⏳ "+seconds+"s";

const area = document.getElementById("gameArea");

area.innerHTML="";

spawn = setInterval(createHeart,500);

timer = setInterval(()=>{

seconds--;

document.getElementById("timer").innerHTML =
"⏳ "+seconds+"s";

if(seconds<=0){

endGame();

}

},1000);

}

function updateScore(){

document.getElementById("score").innerHTML =
"❤️ Score: "+score+"%";

}

function createHeart(){

const area = document.getElementById("gameArea");

const heart = document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left =
Math.random()*90+"vw";

heart.style.animationDuration =
(3+Math.random()*2)+"s";

heart.onclick=function(){

score+=10;

updateScore();

heart.remove();

};

area.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}
/* ================= END GAME ================= */

function endGame(){

clearInterval(timer);
clearInterval(spawn);

const hearts=document.querySelectorAll(".heart");
hearts.forEach(h=>h.remove());

nextPage("scorePage");

document.getElementById("finalScore").innerHTML=score+"%";

let message="";

if(score<=20){

message="😂 Hmm... maybe your fingers were too slow.<br><br>Let's pretend that never happened ❤️";

}else if(score<=50){

message="🥰 Aww... you're getting there.<br><br>I think you like me a little ❤️";

}else if(score<=80){

message="💕 Wow! Someone really likes catching hearts!";

}else if(score<=100){

message="❤️ Yay!! So you love me "+score+"%!";

}else{

message="🥹❤️ Yay!! So you love me "+score+"%!<br><br>That's even more love than the game expected!";

}

document.getElementById("scoreMessage").innerHTML=message;

}

/* ================= CELEBRATION ================= */

function celebrate(){

document.getElementById("celebration").classList.add("show");

for(let i=0;i<120;i++){

setTimeout(createBgHeart,i*40);

}

}

/* ================= BACKGROUND HEARTS ================= */

function createBgHeart(){

const container=document.getElementById("hearts-bg");

const heart=document.createElement("div");

heart.className="bg-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*30)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

/* ================= STARS ================= */

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*4+"s";

stars.appendChild(star);

}

/* ================= FLOATING HEARTS ================= */

setInterval(()=>{

createBgHeart();

},900);

/* ================= MIDNIGHT SURPRISE ================= */

const now=new Date();

if(now.getHours()===23 && now.getMinutes()>=59){

setTimeout(()=>{

alert("🌙 Even under the stars...\n\nYou'll always have a special place in my heart. ❤️");

},3000);

}
