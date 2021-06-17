const circleParents = document.getElementsByClassName("circles");
function createCircle(xPercent,size,delay,time) {
    time+="s";
    delay+="s";
    size+="vw";
    Array.from(circleParents).forEach(circle => {
        circle.innerHTML += "<li style='left:"+xPercent+"%;width:"+size+";height:"+size+";animation-delay:"+delay+";animation-duration:"+time+";'></li>";
    });
}

const maxPart=40;
for (var i=0;i<maxPart;i++){
    //Math.floor(Math.random()*100)
    createCircle(i/(maxPart-1)*100,9-Math.floor(Math.sqrt(Math.random()*64)),Math.random()*10,2+Math.random()*5);
}

var d = new Date();
document.getElementById("date").innerHTML += d.getFullYear();