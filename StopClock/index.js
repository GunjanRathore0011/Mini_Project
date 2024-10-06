let intervalId;
        
let textValue=document.getElementById('text');

handleStart=()=>{
    intervalId=setInterval(stopClock,1000);
};
stopClock=()=>{
    let value=textValue.innerText;
    value++;
    textValue.innerText=value;
}
handleRestart=()=>{
    textValue.innerText=0;
    clearInterval(intervalId);  
    document.getElementById('contentHo lder').innerHTML=``; 
}

handleClearTime=()=>{
    // console.log("hello");
    document.getElementById('contentHolder').innerHTML=``; 
};
handleStop=()=>{
    clearInterval(intervalId);
}
handleGetTime=()=>{
    console.log("handle get time");
    let newDiv=document.createElement('div');
    newDiv.innerHTML=`The stop time is ${textValue.innerText}`;
    newDiv.classList.add('timeValue');
    document.getElementById('contentHolder').appendChild(newDiv);
};

let startButton= document.getElementById('start');
startButton.addEventListener('click',handleStart);
let resetButton= document.getElementById('reset');
resetButton.addEventListener('click',handleRestart);
let getButton =document.getElementById('getTime');
getButton.addEventListener('click',handleGetTime);
let stopButton=document.getElementById('stop');
stopButton.addEventListener('click',handleStop);
let clearButton=document.getElementById('clearTime');
clearButton.addEventListener('click',handleClearTime);
