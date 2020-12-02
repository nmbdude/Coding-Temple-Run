var resp = prompt("");
var question = alert("");
var prompts = ['Jump!', 'Slide!', 'Turn Left!', 'Turn Right'];
var random = getRandomInt(3);
var isDead = false;
var buttonPressed = false;
var buttonType = "up";
var loopNum = 0;
var waitTime = 2;
start();
function start(){
    console.log(random);
    console.log(prompts);
    printPrompt(0);
    printPrompt(1);
    printPrompt(2);
    printPrompt(3);
    while(loopNum<=200){
        console.log(loopNum);
        buttonWait(waitTime);
        if(isDead==true){
            exit();
        }
    }

}
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
function printPrompt(index){
    if(random==index){
        console.log(prompts[index]);
        command = index;
        loopNum++;
    }
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
function buttonWait(wait){
    if(buttonPressed==false){
        delay(wait);
        if(buttonPressed==false){
            isDead=true;
        }
    }
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        if(buttonType=="turn left"){
            buttonPressed = true;
        }
    }
    if(event.keyCode == 39) {
        if(buttonType=="turn right"){
            buttonPressed = true;
        }
    }
    if(event.keyCode == 38){
        if(buttonType=="jump"){
            buttonPressed = true;
        }
    }
    if(event.keyCode == 40){
        if(buttonType=="slide"){
            buttonPressed = true;
        }
    }
});
function keyType(index){
    if(index==0){
        keyType = "jump"
    }
    if(index==1){
        keyType = "slide"
    }
    if(index==2){
        keyType = "turn left"
    }
    if(index==3){
        keyType = "turn right"
    }
}