const sponsorListURL =  "https://garinhamburg.github.io/Team2550.github.io/Blog/BlogEntries.json";
async function serveBlog() {
    try {
        const fetched = await fetch(sponsorListURL);
        const jsonData = await fetched.text();
        const parsedData = JSON.parse(jsonData);
        // This is also bad,
        // At some point style will need to be added.
        //
        // -G
        for (var i = 0; i < parsedData.length; i++) {
            if (window.location.href.includes(parsedData[i].date)) {
                var title = parsedData[i].title;
                document.title = `Skynet | ${title}`;
                var content = document.createElement("div");
                content.className = "blog";

                var fetchedEntry = await fetch("https:///garinhamburg.github.io/Team2550.github.io/Blog/BlogEntries/" + parsedData[i].date + ".md");
                var data = await fetchedEntry.text();
                var text = document.createElement("p");
                text.textContent = data;

                content.appendChild(text);
            }
        } 
    } catch (error) {
        console.error('Unable to fetch entry', error);
    } 
}
serveBlog();