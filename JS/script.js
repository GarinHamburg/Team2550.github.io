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
            var alt = data[i].alt;
            var src = "https://garinhamburg.github.io/Team2550.github.io/Sponsors/SponsorLogos/" + data[i].image;
            var url = data[i].url;
            var sponsorImage = new Image;
            sponsorImage.src = src;
            sponsorImage.alt = alt;
            sponsorImage.href = url;
            var firstLoop = document.getElementById("scroll-one");
            var secondLoop = document.getElementById("scroll-two");
            firstLoop.appendChild(sponsorImage);
            secondLoop.appendChild(sponsorImage);
        } 
    } catch (error) {
        console.error('Unable to fetch sponsors', error);
    } 
}
sponsorbar();