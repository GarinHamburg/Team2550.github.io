function SponsorButton() {
    location.href = "https://garinhamburg.github.io/Team2550.github.io/Sponsor";
};

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 0;

var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;

        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'https://garinhamburg.github.io/Team2550.github.io/Images/SponsorLogos/' + i + '.png';
    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;

    img.className = 'sponsorLogo';
    var doc = document.getElementById("sponsorLogos");
    var doc2 = document.getElementById("sponsorLogos2");
    doc.appendChild(img);
    doc2.appendChild(img);
}

function fDoesntExist() {
    bFinishCheck = true;
}