//Targetted div
let cible= document.getElementById("cible");
console.log(cible);
//Set grey color
let btn1 = document.getElementsByClassName('btn1')[0];
console.log(btn1)
let changeColor1= () =>{
    cible.style="background-color:#5c5c5c;"
}
btn1.addEventListener('click', changeColor1)
//Set red color
let btn2 = document.getElementsByClassName('btn2')[0];
console.log(btn2)
let changeColor2= () =>{
    cible.style="background-color:red;"
}
btn2.addEventListener('click', changeColor2)
//Set green color
let btn3 = document.getElementsByClassName('btn3')[0];
console.log(btn3)
let changeColor3= () =>{
    cible.style="background-color:green;"
}
btn3.addEventListener('click', changeColor3)
//Set blue color
let btn4 = document.getElementsByClassName('btn4')[0];
console.log(btn4)
let changeColor4= () =>{
    cible.style="background-color:blue;"
}
btn4.addEventListener('click', changeColor4)
//Set solid border
let btn5 = document.getElementsByClassName('btn5')[0];
console.log(btn5)
let changeborder1= () =>{
    cible.style.border="5px solid black"
}
btn5.addEventListener('click', changeborder1)
//Set dashed border
let btn6 = document.getElementsByClassName('btn6')[0];
console.log(btn6)
let changeborder2= () =>{
    cible.style.border="5px dashed black"
}
btn6.addEventListener('click', changeborder2)
//Set dotted border
let btn7 = document.getElementsByClassName('btn7')[0];
console.log(btn7)
let changeborder3= () =>{
    cible.style.border="5px dotted black"
}
btn7.addEventListener('click', changeborder3)
//Remove border-top
let btn8 = document.getElementsByClassName('btn8')[0];
console.log(btn8)
let changeborder4= () =>{
    cible.style.borderTopWidth ="0px"
}
btn8.addEventListener('click', changeborder4)
//Put 10px to the border-top
let btn9 = document.getElementsByClassName('btn9')[0];
console.log(btn9)
let changeborder5= () =>{
    cible.style.borderTopWidth="10px"
}
btn9.addEventListener('click', changeborder5)
//Put 15px to the border-top
let btn10 = document.getElementsByClassName('btn10')[0];
console.log(btn10)
let changeborder6= () =>{
    cible.style.borderTopWidth="15px"
}
btn10.addEventListener('click', changeborder6)
//Changing Border Color
let inpColor = document.getElementsByClassName('inpColor')[0];
console.log(inpColor)
let changeColor= () =>{
    cible.style.borderColor=inpColor.value
}
inpColor.addEventListener('change', changeColor)

//set All border size
let inp1 = document.getElementsByClassName('inp1')[0];
let changeSizeOfBorder= () =>{
    cible.style.borderWidth=inp1.value +"px"
}
inp1.addEventListener('change', changeSizeOfBorder)
//set border top size
let inp2 = document.getElementsByClassName('inp2')[0];
let changeSizeOfBorderTop= () =>{
    cible.style.borderTopWidth=inp2.value +"px"
}
inp2.addEventListener('change', changeSizeOfBorderTop)
//set border right size
let inp3 = document.getElementsByClassName('inp3')[0];
let changeSizeOfBorderRight= () =>{
    cible.style.borderRightWidth=inp3.value +"px"
}
inp3.addEventListener('change', changeSizeOfBorderRight)
//set border bottom size
let inp4 = document.getElementsByClassName('inp4')[0];
let changeSizeOfBorderBottom= () =>{
    cible.style.borderBottomWidth=inp4.value +"px"
}
inp4.addEventListener('change', changeSizeOfBorderBottom)
//set border left size
let inp5 = document.getElementsByClassName('inp5')[0];
let changeSizeOfBorderLeft= () =>{
    cible.style.borderLeftWidth=inp5.value +"px"
}
inp5.addEventListener('change', changeSizeOfBorderLeft)
//set border radius
let inpPill = document.getElementsByClassName('inpPill')[0];
let changeSizeOfBorderRadius= () =>{
    cible.style.borderRadius=inpPill.value +"px"
}
inpPill.addEventListener('change', changeSizeOfBorderRadius)
//set border radius top left
let inp6 = document.getElementsByClassName('inp6')[0];
let changeSizeOfBorderRadiusTopLeft= () =>{
    cible.style.borderTopLeftRadius=inp6.value +"px"
}
inp6.addEventListener('change', changeSizeOfBorderRadiusTopLeft)
//set border radius top right
let inp7 = document.getElementsByClassName('inp7')[0];
let changeSizeOfBorderRadiusTopRight= () =>{
    cible.style.borderTopRightRadius=inp7.value +"px"
}
inp7.addEventListener('change', changeSizeOfBorderRadiusTopRight)
//set border radius bottom right
let inp8 = document.getElementsByClassName('inp8')[0];
let changeSizeOfBorderRadiusBottomRight= () =>{
    cible.style.borderBottomRightRadius=inp8.value +"px"
}
inp8.addEventListener('change', changeSizeOfBorderRadiusBottomRight)
//set border radius bottom right
let inp9 = document.getElementsByClassName('inp9')[0];
let changeSizeOfBorderRadiusBottomLeft= () =>{
    cible.style.borderBottomLeftRadius=inp9.value +"px"
}
inp9.addEventListener('change', changeSizeOfBorderRadiusBottomLeft)



