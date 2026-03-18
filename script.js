let info = document.querySelector(".info")
let b1 = document.querySelector(".b-1")
b1.addEventListener("click",function(){
    let username = document.querySelector(".input");
    if (username.value =="Olga" || username.value =="Ольга" ){
        info.innerHTML="👩🏻";
        }else if (username.value =="Максим" || username.value =="MAX" ){
        info.innerHTML="Создатель :)";
        }else if (username.value =="67" || username.value =="52" ){
        info.innerHTML="LOL";
        }else if (username.value =="Беспалов Саша" || username.value =="стендоффер" ){
        info.innerHTML="👦🏻 Сильнейший стендоффер на районе";
        }else  if (username.value =="Артур" || username.value =="читер" ){
        info.innerHTML="Был в бане за читы на 50 дней";
        }else if (username.value =="..." || username.value =="..." ){
        info.innerHTML="...";
        }else  info.innerHTML="Пользователь не найден";
        
        username.value ="";}
    )


   let colors=["red","green","blue","yellow"];
let dma = document.querySelector(".dma");
function changeColor () {
    let random=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=random;
}
dma.addEventListener("click", changeColor); 
