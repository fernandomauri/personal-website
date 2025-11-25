window.onload = function() {
    block();
    // changeCursor();
    // changeTitle();
}

// function changeTitle() {
//     titles = ["whatsmyspace", "(5) New Messages"];
//     for (i=1; i<titles.length; i++) {
//             document.title = titles[i];
//             --i
//     };
// }

function changeCursor() {
    let buttons = document.getElementsByClassName("contact-section-button");
        buttons.addEventListener("hover", function(){
            buttons.style.cursor = 'url(images/cursor-natalie-nunn-chin.png)';
    })
}

function block() {
    /* Simulate blocking me by pressing the Block button */
    let blockButton = document.getElementById("block-button");
    let buttonText = document.getElementById("block-button-text");
    blockButton.addEventListener("click", function() {
        if (buttonText.textContent === "Block User") {
            document.getElementById("block-button-text").textContent = "Unblock User";
            document.getElementById("body-box").style.backgroundImage = 'url(images/blocked.png)';
        } else {
            document.getElementById("block-button-text").textContent = "Block User";
            document.getElementById("body-box").style.backgroundImage = "none";
        }
    })
}

function rotateAds() {
    let fakeAds = ['images/ad-altima.png', 'images/ad-veneer-tech'];
    let ad = document.getElementById('ad');
}
