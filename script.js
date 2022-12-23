var boxtop = document.getElementById('boxtop');
var boxbottom = document.getElementById('boxbottom');
var sheep1 = document.getElementById('sheep1');
var sheep2 = document.getElementById('sheep2');

function animate(){
    boxtop.style.animation = "b 2s";
    boxtop.style.opacity = "0";
    boxtop.style.left = "800px";
    boxbottom.style.animation = "c 2s";
    boxbottom.style.opacity = "0";
    boxbottom.style.left = "800px";
    sheep1.style.animation = "d 2s";
    sheep1.style.opacity = "1";
    sheep2.style.animation = "e 3s";
    sheep2.style.opacity = "1";
}
boxtop.addEventListener('click',animate);


