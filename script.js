// common js
document.querySelectorAll(".watch-control , .controls a").forEach((control) => {
    control.addEventListener("click", (e) => {
        e.preventDefault();
    });
});
// end of common js
// cube
const cube = document.querySelector(".cube");
let y = 20;
let x = 0;
let z = 0;
let bool = true;
let interval;
document.querySelector(".top-x-control").addEventListener("click", function () {
    cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
document
    .querySelector(".bottom-x-control")
    .addEventListener("click", function () {
        cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });
document
    .querySelector(".left-y-control")
    .addEventListener("click", function () {
        cube.style.transform = `rotateY(${(y -= 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
    });
document
    .querySelector(".right-y-control")
    .addEventListener("click", function () {
        cube.style.transform = `rotateY(${(y += 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
    });
document.querySelector(".top-z-control").addEventListener("click", function () {
    cube.style.transform = `rotateZ(${(z -= 20)}deg)rotateY(${y}deg) rotateX(${x}deg)`;
});
document
    .querySelector(".bottom-z-control")
    .addEventListener("click", function () {
        cube.style.transform = `rotateZ(${(z += 20)}deg)rotateY(${y}deg) rotateX(${x}deg)`;
    });

const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateY(${y++}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
        }, 100);
    } else {
        clearInterval(interval);
    }
};
playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
    bool = false;
    playPause();
});
document.querySelector(".controls").addEventListener("mouseout", () => {
    bool = true;
    playPause();
});
// end of cube

// slideshow
const slideShowDiv = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement("div");
        div.style.backgroundImage = `url(./images/slideshow/section-1-bg-${i}.jpg)`;
        i === 1 && div.classList.add("change");
        document.querySelector(".slideshow").appendChild(div);
    }
};
slideShowDiv();
const divs = document.querySelectorAll(".slideshow div");
let a = 1;
const slideShow = () => {
    setInterval(() => {
        a++;
        const div = document.querySelector(".slideshow .change");
        div.classList.remove("change");
        if (a < divs.length) {
            div.nextElementSibling.classList.add("change");
        } else {
            divs[0].classList.add("change");
            a = 1;
        }
    }, 20000);
};
slideShow();
// end of slideshow
// section 3
const section3Content = document.querySelector(".section-3-content");
window.addEventListener("scroll", () => {
    if (
        window.pageYOffset + window.innerHeight >=
        section3Content.offsetTop + section3Content.offsetHeight / 2
    ) {
        section3Content.classList.add("change");
    }
});
// end of section 3
// section 4
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisY = 0;
let axisX = 0;
watchTopControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${(axisY -= 70)}rem`;
    console.log(axisY);
    hideControl();
});
watchBottomControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${(axisY += 70)}rem`;
    console.log(axisY);
    hideControl();
});
watchRightControl.addEventListener("click", () => {
    watchBands.style.marginLeft = `${(axisX -= 70)}rem`;
    console.log(axisX);
    hideControl();
});
watchLeftControl.addEventListener("click", () => {
    watchBands.style.marginLeft = `${(axisX += 70)}rem`;
    hideControl();
});
const hideControl = () => {
    if (axisY === -350) {
        watchTopControl.classList.add("hideControl");
    } else {
        watchTopControl.classList.remove("hideControl");
    }
    if (axisY === 280) {
        watchBottomControl.classList.add("hideControl");
    } else {
        watchBottomControl.classList.remove("hideControl");
    }
    if (axisX === -350) {
        watchRightControl.classList.add("hideControl");
    } else {
        watchRightControl.classList.remove("hideControl");
    }
    if (axisX === 280) {
        watchLeftControl.classList.add("hideControl");
    } else {
        watchLeftControl.classList.remove("hideControl");
    }
};
// end of section 4
