let string = "";
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let btnArr = Array.from(buttons);
let comment = document.querySelector('.comment');
btnArr.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            screen.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            screen.value = '0';
        } else if (e.target.innerHTML == "⬅") {
            string = string.slice(0, -1);
            screen.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            screen.value = string;
        }
    });
});

document.addEventListener('keydown', (event) => {
    var name = event.key;

    let count = 0;
    btnArr.forEach((button) => {
        if (name != 'Enter') {
            button.setAttribute('disabled', '');
        }
        if ((name == 'Enter') || (name == 'Escape')) {
            button.removeAttribute('disabled');
            count = 0;
            comment.textContent = "";
            return;
        }
        if (button.disabled) {
            if (count < 1) {
                comment.textContent = "Press Enter in order to enable mouse click";
                count++;
            }
        }
    });
    if (name == 'Enter') {
        string = eval(string);
        screen.value = string;
    }
    else if (name == 'Escape') {
        string = "";
        screen.value = string;
    }
    else if (name == "Backspace") {
        string = screen.value
        string = string.slice(0, -1);
        screen.value = string;
    }
    else {
        string = string + name;
        screen.value = string;
    }
}, false);


