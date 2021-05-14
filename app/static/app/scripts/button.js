var text;

text = document.getElementById("button");
text.onmouseover = function () {
    this.style.color = 'red';
};
text.onmouseout = function () {
    this.style.color = 'black';
};

let elem_name = document.getElementById('id_name')
elem_name.onfocus = function () {
    elem_name.setAttribute("style", "background: red")
}
elem_name.onblur = function () {
    elem_name.setAttribute("style", "")
}



let elem_email = document.getElementById('id_email')
elem_email.onfocus = function () {
    elem_email.setAttribute("style", "background: red")
}
elem_email.onblur = function () {
    elem_email.setAttribute("style", "")
}

let elem_message = document.getElementById('id_message')
elem_message.onfocus = function () {
    elem_message.setAttribute("style", "background: red")
}
elem_message.onblur = function () {
    elem_message.setAttribute("style", "")
}