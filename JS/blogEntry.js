let BlogEntriesURL =  "https://garinhamburg.github.io/Team2550.github.io/Blog/BlogEntries.json";
async function serveBlog() {
    try {
        let fetchedBlog = await fetch(BlogEntriesURL);
        let blogJsonData = await fetchedBlog.text();
        let parsedBlogData = JSON.parse(blogJsonData);
        // This is also bad,
        // At some point style will need to be added.
        //
        // -G
        for (var i = 0; i < parsedBlogData.length; i++) {
            if (window.location.href.includes(parsedBlogData[i].date)) {
                var title = parsedBlogData[i].title;
                document.title = `Skynet | ${title}`;
                var content = document.getElementById("content");

                var fetchedEntry = await fetch("https:///garinhamburg.github.io/Team2550.github.io/Blog/BlogEntries/" + parsedBlogData[i].date + ".md");
                var data = await fetchedEntry.text();

                content.innerHTML = markdown(data);
            }
        } 
    } catch (error) {
        console.error('Unable to fetch entry', error);
    } 
}
serveBlog();