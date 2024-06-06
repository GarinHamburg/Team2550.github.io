const BlogEntriesURL =  "https://garinhamburg.github.io/Team2550.github.io/Blog/BlogEntries.json";
async function serveBlog() {
    try {
        const fetchedBlog = await fetch(BlogEntriesURL);
        const blogJsonData = await fetchedBlog.text();
        const parsedBlogData = JSON.parse(blogJsonData);
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