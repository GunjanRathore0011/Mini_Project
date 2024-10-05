const hexValue=()=>{
    let getNum="0123456789abcdef";
    let colors="#";
    for(let i=0;i<6;i++){
        colors=colors+(getNum[Math.floor(Math.random()*16)]);
    }
    return colors;
};
let rgb1="#008793";
let rgb2="#a8eb12";
let handleButton1=()=>{
    rgb1=hexValue();
    console.log(rgb1);
    btn1.textContent=`${rgb1}`;
    document.body.style.backgroundImage=`linear-gradient(to right ,${rgb1},${rgb2})`;
    copyDiv.innerHTML=`background-image: linear-gradient(to right , ${rgb1}, ${rgb2})`;
    btn1.style.borderColor=`${rgb1}`;
    btn1.style.backgroundColor=`${rgb1}`;
}; 
let handleButton2=()=>{
    rgb2=hexValue();
    console.log(rgb2);
    btn2.textContent=`${rgb2}`;
    document.body.style.backgroundImage=`linear-gradient(to right ,${rgb1},${rgb2})`;
    copyDiv.innerHTML=`background-image: linear-gradient(to right , ${rgb1}, ${rgb2})`;
    btn2.style.backgroundColor=`${rgb2}`;
    btn2.style.borderColor=`${rgb2}`;
    
};
const btn1=document.getElementById('myButton');
const btn2=document.getElementById('myButton2');
let copyDiv=document.querySelector('.copyCode');
btn1.addEventListener('click',handleButton1);
btn2.addEventListener('click',handleButton2);

copyDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copyDiv.textContent);
    alert("Copied to clipboard");
})
