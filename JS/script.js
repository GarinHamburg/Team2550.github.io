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

    img.className = 'item';
    var imageObject = img;
    var doc = document.getElementById("scroll-one");
    doc.appendChild(imageObject);
    var doc2 = document.getElementById("scroll-two");
    doc2.appendChild(imageObject);
}

function fDoesntExist() {
    bFinishCheck = true;
}