var text;

text = document.getElementById("button");
text.onmouseover = function () {
    this.style.color = 'red';
};
text.onmouseout = function () {
    this.style.color = 'black';
};

