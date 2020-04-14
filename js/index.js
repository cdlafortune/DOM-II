// Your code goes here
//selectors
const home = document.querySelectorAll(".home div");

const navLinks = document.querySelectorAll(".main-navigation nav a");

const infoImg = document.querySelector(".home .intro img");

const contentImg = document.querySelectorAll(".home .content-section .img-content img ");

const destinationImg = document.querySelector(".content-destination img");

const buttons = document.querySelectorAll(".destination .btn")


// [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

Array.from(navLinks).forEach(link => {
  link.addEventListener("mouseover", () => {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "green";
  });

  link.addEventListener("mouseleave", () => {
      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";
  });
});


Array.from(contentImg)[0].addEventListener("click", () => {
    event.target.src = "../img/adventure-alt.jpg";
});

Array.from(contentImg)[0].addEventListener("dblclick", () => {
    event.target.src = "../img/adventure.jpg";
});

Array.from(contentImg)[1].addEventListener("drag", () => {
    event.target.src = "../img/fun-alt.jpg";
});

Array.from(contentImg)[1].addEventListener("dragend", () => {
    event.target.src = "../img/fun.jpg";
});

let randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

Array.from(home).forEach(div => {
    let randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

    div.addEventListener("wheel", () => {
        event.target.style.backgroundColor = randomColor;
    });

    div.addEventListener("mouseout", () => {
        event.target.style.backgroundColor = "white";
    });
});

destinationImg.addEventListener("mouseup", () => {
    event.target.style.borderRadius = "50%";
});

Array.from(buttons).forEach(btn => {
    btn.addEventListener("mousedown", () => {
        event.target.style.fontFamily = "Comic Sans MS";
    });
});

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`