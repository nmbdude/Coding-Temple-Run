var buttonType = getRandomInt(3);
var prompts  = ["Jump!", "Slide!",  "Turn Left!", "Turn Right!"];
var pressed =  false;
var loopNum =  1;
var waitTime = 2000;
var cont = false;
var died = false;
function start(){
    console.log(prompts[buttonType]);
    checkStatus(waitTime);
    console.log(buttonType);
    console.log(pressed);
    buttonType=getRandomInt(4);
    setTimeout(() =>{
        document.addEventListener('keydown', function(event){//right arrow key
            if(event.keyCode == 39) {
                if(buttonType==3){
                    if(pressed==false){
                        pressed=true;
                        restartLoop(waitTime);
                        checkStatus(waitTime);
                        console.log("hi"+pressed);
                        console.log("h"+butttonType);
                    }
                }
            }
        });
        document.addEventListener('keydown', function(event){//left arrow key
            if(event.keyCode == 37) {
                if(buttonType==2){
                    if(pressed==false){
                        pressed=true;
                        checkStatus(waitTime);
                        restartLoop(waitTime);
                        console.log("j"+pressed);
                    }
                }
            }
        });
        document.addEventListener('keydown', function(event){//up arrow key
            if(event.keyCode == 38) {
                if(buttonType==0){
                    if(pressed==false){
                        pressed=true;
                        checkStatus(waitTime);
                        restartLoop(waitTime);
                        console.log("k"+pressed);
                    }
                }
            }
        });
        document.addEventListener('keydown', function(event){//down arrow key
            if(event.keyCode == 40) {
                if(buttonType==1) {
                    if(pressed==false){
                        console.log("button type"+buttonType);
                        console.log("cont"+cont);
                        pressed=true;
                        checkStatus(waitTime);
                        restartLoop(waitTime);
                        console.log("down"+pressed);
                    }
                }
            }
        });
    }, waitTime);
} 
function restartLoop(wait){
    setTimeout(() =>{
        if(cont==false){
            loopNum++;
            buttonType=getRandomInt(4);
            setTimeout(() => {
                waitTime=waitTime-8;
                cont=false;
                pressed=false;
                console.log("l"+pressed);
                console.log(buttonType);
            }, wait);
            loopNum++;
        }
    }, wait+10);
}
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
function checkStatus(wait){
    if(pressed==false){
        setTimeout(() =>{
            if(pressed==false){
                if(died=false){
                    console.log("You Died!");
                    died = true;
                }
            }else{
                cont=true;
                if(loopNum==200){
                    console.log("You Win!");
                }
            }
        }, wait);
    }
}