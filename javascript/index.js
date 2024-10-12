let header = document.createElement("header");

header.textContent = "This is my header";

document.body.prepend(header);

header.setAttribute("id","header1");

header1.textContent = " hello Megha this is my first lesson for javascript "


let p = document.createElement("p");

p.textContent = "this is my pera";

p.setAttribute("id","peraghraph");

header.appendChild(p);


p.addEventListener("mouseover", function() {
    if (true) {
       p.style.color = "red";
    }
 });

 p.addEventListener("mouseout",function(){
    p.style.color = "green";
});
 
