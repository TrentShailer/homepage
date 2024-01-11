import "./style.css";
import "./card.css";
import "./footer.css";

const colors = [
    ["#e53e3e", "#9b2c2c"],
    ["#dd6b20", "#9c4221"],
    ["#d69e2e", "#975a16"],
    ["#38a169", "#276749"],
    ["#319795", "#285e61"],
    ["#3182ce", "#2c5282"],
    ["#00b5d8", "#0987a0"],
    ["#805ad5", "#553c9a"],
    ["#d53f8c", "#97266d"],
];

let remaining_colors = Array.from(colors);

// find all the card background and assign them their color when they are hovered and unhovered
const cards = document.querySelectorAll<HTMLElement>(".card");

for (let i = 0; i < cards.length; i++) {
    if (remaining_colors.length === 0) {
        remaining_colors = Array.from(colors);
    }

    const color_index = Math.floor(Math.random() * remaining_colors.length);
    const color = remaining_colors[color_index];
    remaining_colors.splice(color_index, 1);

    const card = cards[i];
    const bg = card.querySelector<HTMLElement>(".card-bg")!;

    bg.setAttribute("style", `background: ${color[0]}`);

    const icon = card.querySelector<HTMLElement>(".card-icon")!;
    icon.setAttribute("style", `color:${color[0]};opacity:0.20;`);

    card.addEventListener("mouseenter", () => {
        icon.setAttribute("style", `color:${color[1]};opacity:0.33;`);
    });
    card.addEventListener("mouseleave", () => {
        icon.setAttribute("style", `color:${color[0]};opacity:0.20;`);
    });
}
