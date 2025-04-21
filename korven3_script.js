
// Function to reveal the hidden message and audio
document.getElementById("tree").addEventListener("click", function() {
    // Trigger the hidden message and audio file
    document.getElementById("hiddenMessage").classList.remove("hidden");
    document.getElementById("audioFile").classList.remove("hidden");

    // Play the audio file (static whispers)
    const audio = document.querySelector("audio");
    audio.play();
});

// Change static background to red every few seconds
setInterval(() => {
    document.getElementById("staticBackground").style.background = "url('red_static_image.png') repeat";
}, 3000);

// Generate random "glitch" events on page
setInterval(() => {
    document.body.style.backgroundColor = '#ff0000';
    setTimeout(() => {
        document.body.style.backgroundColor = '#121212';
    }, 500);
}, 5000);
