const colours = [
    "#f4b8e4",
    "#ca9ee6",
    "#e78284",
    "#ea999c",
    "#ef9f76",
    "#e5c890",
    "#a6d189",
    "#81c8be",
    "#99d1db",
    "#85c1dc",
    "#8caaee",
    "#babbf1",
    "#f2d5cf",
    "#eebebe",
];


// find all the card background and assign them their color when they are hovered and unhovered
const cards = document.querySelectorAll(".card");

let colour_index = 0;
for (let i = 0; i < cards.length; i++) {
    const colour = colours[colour_index];

    const card = cards[i];
    card.setAttribute("style", "color:hsl(227deg, 70%, 87%)");
    const bg = card.querySelector(".card-bg");

    bg.setAttribute("style", `background: ${colour}`);

    const icon = card.querySelector(".card-icon");
    icon.setAttribute("style", `color:${colour};opacity:0.20;`);

    card.addEventListener("mouseenter", () => {
        icon.setAttribute("style", `color:#000000;opacity:0.20;`);
        card.setAttribute("style", "color:hsl(227deg, 30%, 13%)");
    });

    card.addEventListener("mouseleave", () => {
        icon.setAttribute("style", `color:${colour};opacity:0.20;`);
        card.setAttribute("style", "color:hsl(227deg, 70%, 87%)");
    });

    colour_index = (colour_index + 1) % colours.length;
}
