let a= document.getElementById('head')
console.log(a)
a.textContent="hello from js";
a.innerHTML="<i>changes by qasim sir...!!! </i>"





let shead=document.getElementById('secondhead')
shead.innerHTML="<u>from js </u>"

let b=document.getElementsByTagName('h2')
console.log(b)
b[1].innerHTML="hello guys";
b[2].innerHTML="ache hai";



let c=document.getElementsByClassName('pro')
console.log(c)
c[2].innerHTML="hey!!!"