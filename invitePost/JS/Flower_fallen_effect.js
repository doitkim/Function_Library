let flowerflakes = document.querySelector(".flowerflakes");
let idx = 0;
let changeColor = ['#fadcda','#eeb8b8','#c5dada','#fdf2f0','#f8dae2','#de83cf','#b57fb3','#edeef0','#ede1e3','#d1dfe8'];
setInterval(() => {   
    let rndNum = Math.round(Math.random()*changeColor.length);
    console.log(rndNum);
    if (idx < flowerflakes.children.length){
    flowerflakes.children[idx].style.color = changeColor[rndNum];
    flowerflakes.children[idx].style.fontSize = `${rndNum*10}px`;
    idx++;
   }
   else {
    idx = 0;
   }
}, 50);




