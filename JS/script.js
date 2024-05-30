function SponsorButton() {
    location.href = "https://garinhamburg.github.io/Team2550.github.io/Sponsor";
};


const sponsorListURL =  "https://garinhamburg.github.io/Team2550.github.io/Sponsors/GoldSponsors.json";
async function sponsorbar() {
    try {
        const fetched = await fetch(sponsorListURL);
        const jsonData = await fetched.text();
        const parsedData = JSON.parse(jsonData);
        // This JSON parsing is very bad,
        // Someone should overhall this
        // For right now though, it works
        // -G
        for (var i = 0; i < parsedData.length; i++) {
            var alt = parsedData[i].alt;
            var src = "https://garinhamburg.github.io/Team2550.github.io/Sponsors/SponsorLogos/" + parsedData[i].image;
            var url = parsedData[i].url;
            var sponsorImage = new Image;
            var sponsorImage2 = new Image;
            sponsorImage.src = src;
            sponsorImage.alt = alt;
            sponsorImage2.src = src;
            sponsorImage2.alt = alt;
            var firstLoop = document.getElementById("scroll-one");
            var secondLoop = document.getElementById("scroll-two");
            if (url != null) {
                var urlContainer = document.createElement("a");
                urlContainer.href = url;
                var urlContainer2 = document.createElement("a");
                urlContainer2.href = url;
                urlContainer.className = "item";
                urlContainer2.className = "item";
                urlContainer.appendChild(sponsorImage);
                urlContainer2.appendChild(sponsorImage2);
                firstLoop.appendChild(urlContainer);
                secondLoop.appendChild(urlContainer2);
            } else {
                sponsorImage.className = "item";
                sponsorImage2.className = "item";
                firstLoop.appendChild(sponsorImage);
                secondLoop.appendChild(sponsorImage2);
            }
        } 
    } catch (error) {
        console.error('Unable to fetch sponsors', error);
    } 
}
sponsorbar();