function imgSlider(imgtext, text, color) {
    var img = document.querySelector(".imgc");
    var name = document.querySelector(".name-burger");
    var circle = document.querySelector(".circle");
    circle.style.background = color;
    img.src = imgtext;
    name.firstChild.nodeValue = text;
}