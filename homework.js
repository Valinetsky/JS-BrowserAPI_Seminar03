"use strict";

// Frame swap time
const timeStep = 1000;
// animationDelay
const animationDelay = 500;
// Slides quantity
const maxElement = 7;
// Center dot
const middleDot = parseInt(maxElement / 2);

// // Images names array
// const images = [];

console.log(`currentDate.getDay()`, currentDate.getDay());
// activeFrame
let activeFrame = 0;

const dotsFrame = document.querySelector(".slider__dots");

// Creating dot element
const dot = (position) => {
    const element = document.createElement("div");
    element.className = "dot";
    element.setAttribute("data-pos", position);
    if (position === middleDot) {
        element.classList.add("dot_middle");
    }
    return element;
};

// Modulo: maximum + 1 = minimum; minimum - 1 = maximum
function frameModulo(direction) {
    return (((activeFrame + direction) % maxElement) + maxElement) % maxElement;
}

// Append images names to array, and dot elements to dotsFrame
const arrayDotsGenerate = () => {
    for (let index = 0; index < maxElement; index++) {
        dotsFrame.appendChild(dot(index));
    }
};

arrayDotsGenerate();

// // Shift array to current day of the week
// function arrShift(arr, steps) {
//     for (let index = 0; index < steps; index++) {
//         arr.unshift(arr.pop());
//     }
// }
// console.log(images);

// arrShift(images, currentDate.getDay());
// console.log(images);

// Images in slider
const frames = 3;

// The prohibition flag
let flag = true;

// Slider
const slider = document.querySelector(".slider");

// Controls
const controls = document.querySelector(".carousel");

// Create and place frame to slider
const getFrame = (direction) => {
    const currentFrame = frameModulo(direction);
    console.log(currentFrame);
    console.log(images[currentFrame].url);
    const sliderFrame = document.createElement("div");
    sliderFrame.className = "slider__frame";
    const imageFrame = document.createElement("div");
    const backgroundImageString = `url(${images[currentFrame].url}) center/cover no-repeat`;
    imageFrame.className = "frame";
    imageFrame.style.background = backgroundImageString;

    imageFrame.innerHTML = setInnerHTML(currentFrame);

    sliderFrame.appendChild(imageFrame);
    return sliderFrame;
};

function setInnerHTML(currentFrame) {
    let innerString = "";
    let todayString =
        currentDate.getDay() === currentFrame
            ? `Привет, сегодня ${getWeekDay(currentDate)}`
            : "";
    innerString += `
    <div class="frame__day">
        ${todayString}
    </div>
    <div class="frame__author">
        <span>Photographer: </span> ${images[currentFrame].user}
    </div>`;
    return innerString;
}

// initSlider
const initSlider = (number) => {
    slider.append(getFrame(frameModulo(number)));
    slider.append(getFrame(frameModulo(number + 1)));
    slider.prepend(getFrame(frameModulo(number - 1)));
};

// animate frame on edge of slider
function animate({ timing, draw, duration, removeElement }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // Current animation state
        let progress = timing(timeFraction);

        draw(progress); // Drawing

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            // Remove frame
            removeElement.remove();
            flag = true;
        }
    });
}

// Adding new frame, animate, remove frame on different edge of slider
const nextSlide = (direction) => {
    // Prohibition of repeated animation
    if (!flag) {
        return;
    }
    flag = !flag;

    activeFrame = frameModulo(direction);
    const frameWidth = slider.offsetWidth / frames;

    let currentDiv;

    if (direction === 1) {
        slider.style.justifyContent = "flex-start";
        slider.append(getFrame(direction));
        currentDiv = slider.firstChild;
    }
    if (direction === -1) {
        slider.style.justifyContent = "flex-end";
        slider.prepend(getFrame(direction));
        currentDiv = slider.lastElementChild;
    }

    animate({
        duration: timeStep,
        timing: function (timeFraction) {
            return timeFraction;
        },
        draw: function (progress) {
            currentDiv.style.width = frameWidth * (1 - progress) + "px";
        },
        removeElement: currentDiv,
    });
};

// dotsContainer
const dotsContainer = document.querySelector(".slider__dots");

function controlClick(event) {
    let dotsSteps = 1;
    let direction;
    let currentDot;
    if (event.target.classList.contains("btn_left")) {
        direction = -1;
        currentDot = middleDot - 1;
    }
    if (event.target.classList.contains("btn_right")) {
        direction = 1;
        currentDot = middleDot + 1;
    }
    console.log(`First currentDot = ${currentDot}`);
    if (event.target.hasAttribute("data-pos")) {
        controls.removeEventListener("click", controlClick);
        currentDot = parseInt(event.target.getAttribute("data-pos"));
        dotsSteps = currentDot - middleDot;
        console.log(`First dotsSteps = ${dotsSteps}`);

        if (dotsSteps !== 0) {
            if (dotsSteps < 0) {
                direction = -1;
                dotsSteps = -dotsSteps;
            } else {
                direction = 1;
            }
        }
    }
    console.log(`dotsSteps = ${dotsSteps}`);
    console.log(`direction = ${direction}`);
    frameMove(dotsSteps, direction, currentDot);
}

function frameMove(dotsSteps, direction, currentDot) {
    // Animation parameters
    const dotsTransform = [
        { transform: "scale(1.5)", background: "white" },
        { transform: "scale(1)" },
    ];
    const dotTiming = {
        duration: timeStep * 0.5,
        iterations: 1,
    };
    const dotHide = [
        { transform: "scale(1)", background: "none" },
        { transform: "scale(2)", background: "initial", offset: 1 },
    ];
    const dotHideTiming = {
        duration: (timeStep + animationDelay) * (dotsSteps - 1),
        iterations: 1,
    };

    // Middle dot animation
    const middleDotAnimation = dotsContainer.childNodes[middleDot].animate(
        dotHide,
        dotHideTiming,
        dotListener
    );

    middleDotAnimation.onfinish = () => dotListener();

    // Dots animation from click to middleDot
    for (let i = 0; i < dotsSteps; i++) {
        ((index) => {
            setTimeout(() => {
                dotsContainer.childNodes[
                    currentDot + index * -direction - 1 * direction
                ].animate(dotsTransform, dotTiming);
                nextSlide(direction);
            }, (timeStep + animationDelay) * index);
        })(i);
    }
}

function dotListener() {
    controls.addEventListener("click", controlClick);
}

console.log(activeFrame);
initSlider(activeFrame);
dotListener();

// fetch
// const fetchPhotos = async () => {
//     try {
//         const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4&query=food`;
//         const response = await fetch(url);
//         const data = await response.json();

//         if (response.ok && data.length) {
//             state = data;
//             currentSlide = data[0].id;
//             setPhotos();
//         }
//     } catch (err) {
//         console.log(err);
//     }
// };

// function readData() {
//     const dataJSON = localStorage.getItem("photoData");

//     if (dataJSON === null) {
//         return undefined;
//     }

//     // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого
//     try {
//         return JSON.parse(dataJSON);
//     } catch (e) {
//         localStorage.removeItem("photoData");
//         return undefined;
//     }
// }

console.log(readData());
