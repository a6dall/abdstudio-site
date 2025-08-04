
const typingElement = document.getElementById("typing");
const texts = ["Advanced Bot Development", "Automate. Build. Deploy."];
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const currentText = texts[textIndex];
    if (!deleting) {
        typingElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(type, 1500); // pause before delete
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
    setTimeout(type, deleting ? 50 : 100);
}

type();
