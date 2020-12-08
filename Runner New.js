var prompts = ["Jump!", "Slide!", "Turn Left!", "Turn Right"];
var prompt = getRandomInt(3);
var obsNum = 1;
var isDead = false;
var keyPressed = false;
var waitTime = 2000;
start();
function start(){
    while(isDead==false){
        setTimeout(() =>{
            if(promt==1){
                console.log(prompts[1]);
            }
            if(promt==2){
                console.log(prompts[2]);
            }
            if(promt==3){
                console.log(prompts[3]);
            }
            if(promt==4){
                console.log(prompts[4]);
            }
        }, waitTime)
        if(obsNum==200){
            console.log("You Win!");
            setTimeout(() =>{
                exit();
            }, 10)
        }
        while(obsNum<=200){
            if(keyPressed==false){
                if(prompt==1){
                    document.addEventListener('keydown', function(event){
                        if(event.keyCode == 38) {
                            keyPressed = true;
                            loopNum++;
                            waitTime-10;
                        }
                    });
                }
                if(prompt==2){
                    document.addEventListener('keydown', function(event){
                        if(event.keyCode == 40) {
                            keyPressed = true;
                            loopNum++;
                            waitTime-10;
                        }
                    });
                }
                if(prompt==3){
                    document.addEventListener('keydown', function(event){
                        if(event.keyCode == 37) {
                            keyPressed = true;
                            loopNum++;
                            waitTime-10;
                        }
                    });
                }
                if(prompt==4){
                    document.addEventListener('keydown', function(event){
                        if(event.keyCode == 39) {
                            keyPressed = true;
                            loopNum++;
                            waitTime-10;
                        }
                    });
                }
            }
            if(keyPressed==true){
                return 0;
            }else{
            setTimeout(() =>{
                if(keyPressed==false){
                    console.log("You Lose!");
                    setTimeout(() =>{
                        exit();
                    }, 10)
                }
            }, waitTime)
        }
        } 
    }
}    
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
function exit(status) {//I didn't write this, this is just to kill the program
  var i;
  if (typeof status === 'string') {
      alert(status);
  }
  window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);
  var handlers = [
      'copy', 'cut', 'paste',
      'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
      'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
      'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
  ];
  function stopPropagation (e) {
      e.stopPropagation();
  }
  for (i=0; i < handlers.length; i++) {
      window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
  }
  if (window.stop) {
      window.stop();
  }
  throw '';
}
