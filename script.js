const colors = ["navy", "darkorchid", "goldenrod", "green", "brown", "purple", "olive", "maroon", "indigo", "saddlebrown", "steelblue", "mediumpurple", "teal", "darkmagenta", "darkslateblue", "rosybrown", "palevioletred", "olivedrab"];

let clickCount = 0;

const colorButton = document.getElementById("colorButton");
const clickMessage = document.getElementById("clickMessage");
const editBody = document.body; 

window.addEventListener("load", () => {
    setTimeout(() => {
        colorButton.style.opacity = "1";
    }, 1200);
});

window.addEventListener("load", () => {
    setTimeout(() => {
        clickMessage.style.opacity = "1";
    }, 800);
});

window.addEventListener("load", () => {
    setTimeout(() => {
        editBody.style.backgroundColor = "black";
    }, 500);
});

function playSound() {
    let audio = new Audio('media/eff.wav');
    audio.play();
  }

colorButton.addEventListener("click", () => {
    clickCount++;
    const colorIndex = clickCount % colors.length; 
    editBody.style.backgroundColor = colors[colorIndex];
    playSound();

    if (clickCount === 1) {
        clickMessage.innerHTML = `You have changed the colors of this webpage ${clickCount} time.`;
        clickMessage.style.transition = "opacity 0.3s ease-in-out";
        
    } else{
        clickMessage.innerHTML = `You have changed the colors of this webpage ${clickCount} times.`;
        clickMessage.style.transition = "opacity 0.3s ease-in-out";
        
    }
    
    if (clickCount > colors.length) {
        alert("You have gone through every single color, you can stop clicking now!");
    }
});
