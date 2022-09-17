const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");
const images = document.querySelectorAll(".parallax img");
const title = document.querySelector(".text");
const block = document.querySelector(".parallax");

block.addEventListener("mousemove", (event) => {
    const corX = event.clientX;
    const corY = event.clientY;

    cursor.style.left = corX + "px";
    cursor.style.top = corY + "px";

    cursorInner.style.left = corX + "px";
    cursorInner.style.top = corY + "px";

    const windowWith = window.innerWidth;
    const windowHeight = window.innerHeight;

    const x = (windowWith / 2 - corX) / 20;
    const y = (windowHeight / 2 - corY) / 20;

    title.style.transform = `translate(${x / 10}px, ${y / 7}px)`;
    images[0].style.transform = `translate(${x / 15}px, ${y / -15}px)`;
    images[1].style.transform = `translate(${x / -6}px, ${y / -6}px)`;
    images[2].style.transform = `translate(${x / -2}px, ${y / -2}px)`;
    images[3].style.transform = `translate(${x / -1}px, ${y / -1}px)`;
    images[4].style.transform = `translate(${x / -10}px, ${y / -10}px)`;
    images[5].style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    images[6].style.transform = `translate(${x / 5}px, ${y / -5}px)`;
    images[7].style.transform = `translate(${x / -5}px)`;
});

block.addEventListener("mouseout", () => {
    cursor.style.display = `none`;
    cursorInner.style.display = `none`;
});

block.addEventListener("mousemove", () => {
    cursor.style.display = `block`;
    cursorInner.style.display = `block`;
});