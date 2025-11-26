window.onload = function() {
    block();
    popUp();
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
            document.getElementById("body-box").style.backgroundImage = 'url(images/backgrounds/blizzocked.png)';
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

function popUp() {
    let dialogPopup = document.getElementById('hit-me-up');
    let hmuBox = document.getElementById('call-im-button');

    hmuBox.addEventListener('click', function() {
        dialogPopup.showModal();
    })
}

function copyLink() {
    navigator.clipboard.writeText('https://linkedin.com/in/fernandomauri');
    let dialogPopup = document.getElementById('copied-to-clipboard');
    dialogPopup.showModal();
}
