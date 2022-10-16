const v1=document.querySelector('.number');
const res=document.querySelector('.result');
v1.addEventListener("click",function(){
    res.innerText=v1.value;
})