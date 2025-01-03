// Add memes dynamically to the page
document.addEventListener("DOMContentLoaded", function () {
    const memeContainer = document.getElementById("meme-container");

    const memes = [
        {
            src: "https://i.imgflip.com/5y70hl.jpg",
            caption: "Sigma Rule #1: Always stay ahead of the grind. 💯"
        },
        {
            src: "https://i.imgflip.com/7p0t6q.jpg",
            caption: "When JavaScript works on the first try... 👀"
        },
        {
            src: "https://i.imgflip.com/3p2q8h.jpg",
            caption: "Debugging: 99% frustration, 1% triumph. 🧠"
        }
    ];

    memes.forEach(meme => {
        const memeDiv = document.createElement("div");
        memeDiv.innerHTML = `
            <img src="${meme.src}" alt="Meme">
            <p>${meme.caption}</p>
        `;
        memeContainer.appendChild(memeDiv);
    });
});

// Party Mode Button
document.getElementById("party-button").addEventListener("click", function () {
    document.body.style.background = "linear-gradient(90deg, #ff416c, #ff4b2b)";
    alert("🎉 Party Mode Activated! 🎉");
});
