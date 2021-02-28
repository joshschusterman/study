// Make a variable out of the output box html, so I can use methods on it.
var out = document.querySelector('.out');

function output(val) {
    // Put number or operator pressed into a variable, so can use methods...
    var press = val.innerHTML;

    // Calculate (with eval) whatever is in the html for 'out' (the output box)
    if (press == '=') {
        out.innerHTML = eval(out.innerHTML);
    } else if (press == "C") {
        // Zero out if C is pressed.
        out.innerHTML = '0';
    } else {
        // If the output box is at 0, display only the key just pressed.
        if (out.innerHTML == '0') {
            out.innerHTML = press;
        } else {
            // If there are already numbers or operators, include those (extend the equation).
            out.innerHTML += press;
        }
    }
}

