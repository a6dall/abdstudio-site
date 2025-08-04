
const text = "Automate. Build. Deploy. → ...";
let index = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            index = 0;
            type();
        }, 1500);
    }
}
type();
