const toolbar = 'https://team2550.github.io/HTML/toolbar.html';

async function displayToolbar() {
    try {
        const response = await fetch(toolbar);
        const toolbar = await response.text();
        document.body.insertAdjacentHTML('afterbegin', toolbar);
    } catch (error) {
        console.error('Unable to display toolbar', error);
    }
}
displayToolbar();

