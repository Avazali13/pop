const warning = document.querySelector('.cart')
const info = document.querySelector('.cart1')
const yellowwarning = document.querySelector('.cart2')
const tick = document.querySelector('.cart3')



window.onclick=a=>{

if(a.target.classList.contains("x1")) {
        a.target.parentNode.parentNode.classList.add('hidden')
}  

if(a.target.classList.contains("x2")){
a.target.parentNode.parentNode.classList.add('hidden')
}
if(a.target.classList.contains("x3")){
    a.target.parentNode.parentNode.classList.add("hidden")
}
if(a.target.classList.contains("x4")){
    a.target.parentNode.parentNode.classList.add('hidden')
}

if(a.target.classList.contains("first")){
    warning.classList.remove("hidden")}
    if(a.target.classList.contains("second")){
        info.classList.remove("hidden")}
        if(a.target.classList.contains("third")){
            yellowwarning.classList.remove("hidden")}
            if(a.target.classList.contains("fourth")){
                tick.classList.remove("hidden")}




 if(a.target.classList.contains("x5")){
 a.target.parentNode.parentNode.classList.add('hidden');
//  reg.addEventListener('click',()=>{task1.classList.remove('blure')});
                }


            

}
var task1=document.querySelector('.task1')
var login=document.querySelector('.forms2');
const terms=document.querySelector('.term');
let regins=document.querySelector('.forms1')



log.addEventListener('click',()=>{login.classList.remove('hidden')});
log.addEventListener('click',()=>{task1.classList.add('blure')});




// x4.addEventListener('click',(x4)=>{login.classList.add('hidden')});


oba.addEventListener('click',()=>{terms.classList.remove('hidden')});
oba.addEventListener('click',()=>{task1.classList.add('blure')});


reg.addEventListener('click',()=>{regins.classList.remove('hidden')})
reg.addEventListener('click',()=>{task1.classList.add('blure')});



function qaam(){
    task1.classList.remove('blure')
}















