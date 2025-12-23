function block() {
    /* Simulate blocking me by pressing the Block button */
    let blockButtonText = document.getElementById("block-button-text");
    if (blockButtonText.innerHTML === "Block User") {
        let blockPopUp = document.getElementById('block-popup');
        blockPopUp.showModal();
        let confirmBlock = document.getElementById('confirm-block');
        confirmBlock.addEventListener('click', () => {
            document.getElementById("block-button-text").innerHTML = "Unblock User";
            document.getElementById("body-box").style.backgroundImage = 'url(images/backgrounds/blizzocked.png)';
        })
    } else {
        document.getElementById("block-button-text").innerHTML = "Block User";
        document.getElementById("body-box").style.backgroundImage = "none";
    }
}

function sleepTimer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function newMessage() {
    let dialogPopup = document.getElementById('new-message-popup');
    dialogPopup.showModal();
}

function callImPopUp() {
    let dialogPopup = document.getElementById('hit-me-up-popup');
    randomColors(dialogPopup);
    dialogPopup.showModal();
}

function closePopUp(popUp) {
    let dialogPopup = document.getElementById(popUp);
    dialogPopup.close()
}

function headerButtonPopUp(popUp) {
    let dialogPopup = document.getElementById(popUp);
    randomColors();
    dialogPopup.showModal();
}

function randomColors() {
    /* I wanted to use the Pantone "Color of the Year" palette to randomly swap popup background colors.
    Colors in order: Cannoli Cream, Cream Tan, Safari
    */
    const choices = [
        '#f1f0e2',
        '#E4C7B7',
        '#baaa91'
    ];
    let randomNumber = Math.floor(Math.random() * 3);
    let chosen = choices[randomNumber];
    console.log('Chosen Pantone color is ' + chosen);
    let popUp = document.getElementById('header-button-pop-up');
    popUp.style.backgroundColor = chosen;
}

function copyLink() {
    navigator.clipboard.writeText('https://linkedin.com/in/fernandomauri');
    let dialogPopup = document.getElementById('copied-to-clipboard-popup');
    randomColors(dialogPopup);
    dialogPopup.showModal();
}

function changeAd() {
    ad = document.getElementById('ad-box');
    ad1 = '<img src="images/ads/ad-altima.png" style="width: 100%; height: 100%;" alt="Used Altimas for Sale">';
    ad2 = '<img src="images/ads/ad-veneer-tech.png" style="width: 100%; height: 100%;" alt="Veneer Tech Training Institute">';
    ad.innerHTML(ad1);
    sleepTimer(2000);
    ad.innerHTML(ad2);
    sleepTimer(2000);
}

const repeatAds = setInterval(changeAd, 100);