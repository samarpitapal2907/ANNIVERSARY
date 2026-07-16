/* ==================================================== */
/* SCRATCH CARD ELEMENTS                                */
/* ==================================================== */

const scratchCardScreen =
    document.getElementById(
        "scratch-card-screen"
    );

const scratchStage =
    document.getElementById(
        "scratch-stage"
    );

const scratchCanvas =
    document.getElementById(
        "scratch-canvas"
    );

const scratchProgressText =
    document.getElementById(
        "scratch-progress-text"
    );

const scratchRevealMessage =
    document.getElementById(
        "scratch-reveal-message"
    );

const scratchNextButton =
    document.getElementById(
        "scratch-next-button"
    );

const scratchMenuButton =
    document.getElementById(
        "scratch-menu-button"
    );

/*
    This variable has a different name now.

    Previously it was called rewardWheelScreen,
    which conflicted with reward-wheel.js.
*/

const scratchRewardWheelScreen =
    document.getElementById(
        "reward-wheel-screen"
    );


/* ==================================================== */
/* CANVAS SETUP                                         */
/* ==================================================== */

const scratchContext =
    scratchCanvas.getContext(
        "2d",
        {
            willReadFrequently: true
        }
    );


/* ==================================================== */
/* SCRATCH STATE                                        */
/* ==================================================== */

let scratchDrawing = false;

let scratchRevealed = false;

let scratchCheckCounter = 0;

let lastScratchX = null;

let lastScratchY = null;


/* ==================================================== */
/* SCREEN HELPER                                        */
/* ==================================================== */

function hideAllScratchScreens() {

    const allScreens =
        document.querySelectorAll(
            ".screen"
        );

    allScreens.forEach(
        function (screen) {

            screen.classList.add(
                "hidden"
            );

        }
    );

}


/* ==================================================== */
/* SIZE THE CANVAS                                      */
/* ==================================================== */

function resizeScratchCanvas() {

    const rectangle =
        scratchStage.getBoundingClientRect();

    const pixelRatio =
        window.devicePixelRatio || 1;

    scratchCanvas.width =
        Math.round(
            rectangle.width
            * pixelRatio
        );

    scratchCanvas.height =
        Math.round(
            rectangle.height
            * pixelRatio
        );

    scratchCanvas.style.width =
        `${rectangle.width}px`;

    scratchCanvas.style.height =
        `${rectangle.height}px`;

    scratchContext.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );

}


/* ==================================================== */
/* DRAW COVER                                           */
/* ==================================================== */

function paintScratchCover() {

    const rectangle =
        scratchStage.getBoundingClientRect();

    scratchContext.globalCompositeOperation =
        "source-over";

    const gradient =
        scratchContext.createLinearGradient(
            0,
            0,
            rectangle.width,
            rectangle.height
        );

    gradient.addColorStop(
        0,
        "#ff9fc6"
    );

    gradient.addColorStop(
        0.5,
        "#f5b4ff"
    );

    gradient.addColorStop(
        1,
        "#ffd36e"
    );

    scratchContext.fillStyle =
        gradient;

    scratchContext.fillRect(
        0,
        0,
        rectangle.width,
        rectangle.height
    );


    /* Decorative circles */

    scratchContext.fillStyle =
        "rgba(255, 255, 255, 0.18)";

    for (
        let circleIndex = 0;
        circleIndex < 35;
        circleIndex++
    ) {

        const randomX =
            Math.random()
            * rectangle.width;

        const randomY =
            Math.random()
            * rectangle.height;

        const randomRadius =
            4
            + Math.random() * 16;

        scratchContext.beginPath();

        scratchContext.arc(
            randomX,
            randomY,
            randomRadius,
            0,
            Math.PI * 2
        );

        scratchContext.fill();

    }


    /* Main cover text */

    scratchContext.fillStyle =
        "rgba(255, 255, 255, 0.96)";

    scratchContext.textAlign =
        "center";

    scratchContext.font =
        "700 26px Fredoka, sans-serif";

    scratchContext.fillText(
        "Scratch me 💗",
        rectangle.width / 2,
        rectangle.height / 2 - 15
    );

    scratchContext.font =
        "600 15px Fredoka, sans-serif";

    scratchContext.fillText(
        "A special memory is underneath",
        rectangle.width / 2,
        rectangle.height / 2 + 19
    );

    scratchContext.font =
        "29px sans-serif";

    scratchContext.fillText(
        "🌸  💌  ✨",
        rectangle.width / 2,
        rectangle.height / 2 + 70
    );

}


/* ==================================================== */
/* RESET CARD                                           */
/* ==================================================== */

function resetScratchCard() {

    scratchDrawing = false;

    scratchRevealed = false;

    scratchCheckCounter = 0;

    lastScratchX = null;

    lastScratchY = null;

    scratchCanvas.classList.remove(
        "hidden"
    );

    scratchRevealMessage.classList.add(
        "hidden"
    );

    scratchNextButton.classList.add(
        "hidden"
    );

    scratchProgressText.textContent =
        "Scratch the pink cover ✨";

    requestAnimationFrame(
        function () {

            resizeScratchCanvas();

            paintScratchCover();

        }
    );

}


window.resetScratchCard =
    resetScratchCard;


/* ==================================================== */
/* GET POINTER POSITION                                 */
/* ==================================================== */

function getScratchPoint(event) {

    const rectangle =
        scratchCanvas.getBoundingClientRect();

    let clientX;

    let clientY;

    if (
        event.touches
        && event.touches.length > 0
    ) {

        clientX =
            event.touches[0].clientX;

        clientY =
            event.touches[0].clientY;

    } else {

        clientX =
            event.clientX;

        clientY =
            event.clientY;

    }

    return {

        x:
            clientX
            - rectangle.left,

        y:
            clientY
            - rectangle.top

    };

}


/* ==================================================== */
/* SCRATCH A LINE                                       */
/* ==================================================== */

function scratchLine(
    startX,
    startY,
    endX,
    endY
) {

    scratchContext.globalCompositeOperation =
        "destination-out";

    scratchContext.lineCap =
        "round";

    scratchContext.lineJoin =
        "round";

    scratchContext.lineWidth =
        56;

    scratchContext.beginPath();

    scratchContext.moveTo(
        startX,
        startY
    );

    scratchContext.lineTo(
        endX,
        endY
    );

    scratchContext.stroke();

}


/* ==================================================== */
/* SCRATCH ONE POINT                                    */
/* ==================================================== */

function scratchAtPoint(
    x,
    y
) {

    if (scratchRevealed) {
        return;
    }

    scratchContext.globalCompositeOperation =
        "destination-out";

    scratchContext.beginPath();

    scratchContext.arc(
        x,
        y,
        29,
        0,
        Math.PI * 2
    );

    scratchContext.fill();

    scratchCheckCounter++;

    if (
        scratchCheckCounter % 10 === 0
    ) {

        checkScratchPercentage();

    }

}


/* ==================================================== */
/* START SCRATCHING                                     */
/* ==================================================== */

function beginScratch(event) {

    if (scratchRevealed) {
        return;
    }

    event.preventDefault();

    scratchDrawing = true;

    const point =
        getScratchPoint(event);

    lastScratchX =
        point.x;

    lastScratchY =
        point.y;

    scratchAtPoint(
        point.x,
        point.y
    );

}


/* ==================================================== */
/* CONTINUE SCRATCHING                                  */
/* ==================================================== */

function continueScratch(event) {

    if (
        !scratchDrawing
        || scratchRevealed
    ) {
        return;
    }

    event.preventDefault();

    const point =
        getScratchPoint(event);

    if (
        lastScratchX !== null
        && lastScratchY !== null
    ) {

        scratchLine(
            lastScratchX,
            lastScratchY,
            point.x,
            point.y
        );

    } else {

        scratchAtPoint(
            point.x,
            point.y
        );

    }

    lastScratchX =
        point.x;

    lastScratchY =
        point.y;

    scratchCheckCounter++;

    if (
        scratchCheckCounter % 10 === 0
    ) {

        checkScratchPercentage();

    }

}


/* ==================================================== */
/* STOP SCRATCHING                                      */
/* ==================================================== */

function stopScratch() {

    scratchDrawing = false;

    lastScratchX = null;

    lastScratchY = null;

}


/* ==================================================== */
/* CHECK REVEALED AMOUNT                                */
/* ==================================================== */

function checkScratchPercentage() {

    const imageData =
        scratchContext.getImageData(
            0,
            0,
            scratchCanvas.width,
            scratchCanvas.height
        );

    let transparentPixels = 0;

    const totalPixels =
        imageData.data.length / 4;

    for (
        let index = 3;
        index < imageData.data.length;
        index += 4
    ) {

        if (
            imageData.data[index] < 40
        ) {

            transparentPixels++;

        }

    }

    const revealedPercentage =
        (
            transparentPixels
            / totalPixels
        ) * 100;

    const displayedPercentage =
        Math.min(
            Math.round(
                revealedPercentage
            ),
            100
        );

    scratchProgressText.textContent =
        `${displayedPercentage}% revealed 💗`;

    if (
        revealedPercentage >= 62
    ) {

        revealScratchCard();

    }

}


/* ==================================================== */
/* FULL REVEAL                                          */
/* ==================================================== */

function revealScratchCard() {

    if (scratchRevealed) {
        return;
    }

    scratchRevealed = true;

    scratchDrawing = false;

    scratchCanvas.classList.add(
        "hidden"
    );

    scratchProgressText.textContent =
        "Memory fully revealed 🥹💗";

    scratchRevealMessage.classList.remove(
        "hidden"
    );

    scratchNextButton.classList.remove(
        "hidden"
    );

    localStorage.setItem(
        "specialScratchCardRevealed",
        "true"
    );

}


/* ==================================================== */
/* MOUSE EVENTS                                         */
/* ==================================================== */

scratchCanvas.addEventListener(
    "mousedown",
    beginScratch
);

scratchCanvas.addEventListener(
    "mousemove",
    continueScratch
);

document.addEventListener(
    "mouseup",
    stopScratch
);


/* ==================================================== */
/* TOUCH EVENTS                                         */
/* ==================================================== */

scratchCanvas.addEventListener(
    "touchstart",
    beginScratch,
    {
        passive: false
    }
);

scratchCanvas.addEventListener(
    "touchmove",
    continueScratch,
    {
        passive: false
    }
);

document.addEventListener(
    "touchend",
    stopScratch
);


/* ==================================================== */
/* BACK TO MENU                                         */
/* ==================================================== */

scratchMenuButton.addEventListener(
    "click",

    function () {

        hideAllScratchScreens();

        const menuScreen =
            document.getElementById(
                "menu-screen"
            );

        menuScreen.classList.remove(
            "hidden"
        );

    }
);


/* ==================================================== */
/* CONTINUE TO REWARD WHEEL                             */
/* ==================================================== */

scratchNextButton.addEventListener(
    "click",

    function () {

        hideAllScratchScreens();

        scratchRewardWheelScreen.classList.remove(
            "hidden"
        );

        /*
            Show the reward-wheel introduction.
        */

        const rewardWheelIntro =
            document.getElementById(
                "reward-wheel-intro"
            );

        const rewardWheelGame =
            document.getElementById(
                "reward-wheel-game"
            );

        const rewardWheelResult =
            document.getElementById(
                "reward-wheel-result"
            );

        const buildFuturePlaceholder =
            document.getElementById(
                "build-future-placeholder"
            );

        rewardWheelIntro.classList.remove(
            "hidden"
        );

        rewardWheelGame.classList.add(
            "hidden"
        );

        rewardWheelResult.classList.add(
            "hidden"
        );

        buildFuturePlaceholder.classList.add(
            "hidden"
        );

    }
);


/* ==================================================== */
/* RESIZE                                               */
/* ==================================================== */

window.addEventListener(
    "resize",

    function () {

        if (
            !scratchCardScreen.classList.contains(
                "hidden"
            )
            && !scratchRevealed
        ) {

            resetScratchCard();

        }

    }
);