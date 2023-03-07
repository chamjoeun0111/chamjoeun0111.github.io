const backgrounds = [
    "../images/Aesthetic-Wallpaper-1920X1080.jpeg",
    "../images/50-Minimalist-Desktop-Wallpapers-and-Backgrounds-_2022-Edition_.jpeg",
    "../images/Minimal-Wallpaper-_1920×1080_.jpeg",
]

const chosenImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);