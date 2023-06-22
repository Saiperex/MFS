const vector = ["bbg1", "bbg2", "bbg3", "bbg4"];
var index = 0;

function changeBG() {
    if (index == 4) {
        index = 0;
    }
    document.querySelector(".aclaraciones").style.backgroundImage = "url('recursos/img_static/" + vector[index] +".jpg"+ "')";
    index++;
}

setInterval(changeBG, 50000);