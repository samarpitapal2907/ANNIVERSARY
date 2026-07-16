/* ==================================================== */
/* ELEMENTS                                             */
/* ==================================================== */

const catchHeartScreen =
    document.getElementById(
        "catch-heart-screen"
    );

const catchHeartButton =
    document.getElementById(
        "catch-heart-button"
    );

const heartGameIntro =
    document.getElementById(
        "heart-game-intro"
    );

const heartGameCard =
    document.getElementById(
        "heart-game-card"
    );

const heartGameRetry =
    document.getElementById(
        "heart-game-retry"
    );

const heartGameWin =
    document.getElementById(
        "heart-game-win"
    );

const startHeartGameButton =
    document.getElementById(
        "start-heart-game-button"
    );

const retryHeartGameButton =
    document.getElementById(
        "retry-heart-game-button"
    );

const replayHeartGameButton =
    document.getElementById(
        "replay-heart-game-button"
    );

const heartIntroMenuButton =
    document.getElementById(
        "heart-intro-menu-button"
    );

const heartRetryMenuButton =
    document.getElementById(
        "heart-retry-menu-button"
    );

const heartWinMenuButton =
    document.getElementById(
        "heart-win-menu-button"
    );

const heartOpenScratchButton =
    document.getElementById(
        "heart-open-scratch-button"
    );

const leaveHeartGameButton =
    document.getElementById(
        "leave-heart-game-button"
    );

const heartGameScore =
    document.getElementById(
        "heart-game-score"
    );

const heartGameTime =
    document.getElementById(
        "heart-game-time"
    );

const heartGameProgressFill =
    document.getElementById(
        "heart-game-progress-fill"
    );

const heartGameMessage =
    document.getElementById(
        "heart-game-message"
    );

const heartPlayArea =
    document.getElementById(
        "heart-play-area"
    );

const heartBasket =
    document.getElementById(
        "heart-basket"
    );

const heartRetryMessage =
    document.getElementById(
        "heart-retry-message"
    );

const heartWinMessage =
    document.getElementById(
        "heart-win-message"
    );


/* ==================================================== */
/* GAME SETTINGS                                        */
/* ==================================================== */

const HEART_TARGET = 25;

const GAME_DURATION = 30;

const goodItems = [
    "❤️",
    "🩷",
    "🧡",
    "💛",
    "💚",
    "🩵",
    "💙",
    "💜"
];

const badItems = [
    "😡",
    "🌧️",
    "🕷️",
    "💣"
];

const positiveMessages = [

    "Love successfully collected 💗",

    "Another heart safely in the basket ✨",

    "Cute catch detected 🥹",

    "The basket is filling with love 🌸",

    "Perfect catch! 💞",

    "One more heart for us 🫶"

];

const negativeMessages = [

    "Oops, a tiny storm entered the basket 🌧️",

    "Sneaky negative item! Keep catching love 💗",

    "The basket caught a little drama 😭",

    "Oopsie! Avoid the grumpy objects ✨",

    "Tiny chaos detected, but you are doing great 🥹"

];


/* ==================================================== */
/* GAME STATE                                           */
/* ==================================================== */

let score = 0;

let timeLeft =
    GAME_DURATION;

let gameRunning =
    false;

let spawnInterval =
    null;

let timerInterval =
    null;

let animationFrameId =
    null;

let fallingItems =
    [];

let basketPositionX =
    0;


/* ==================================================== */
/* SCREEN HELPERS                                       */
/* ==================================================== */

function hideAllHeartGameCards() {

    heartGameIntro.classList.add(
        "hidden"
    );

    heartGameCard.classList.add(
        "hidden"
    );

    heartGameRetry.classList.add(
        "hidden"
    );

    heartGameWin.classList.add(
        "hidden"
    );

}


function hideAllWebsiteScreensForHeartGame() {

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


function openCatchHeartGame() {

    stopHeartGame();

    hideAllWebsiteScreensForHeartGame();

    catchHeartScreen.classList.remove(
        "hidden"
    );

    showHeartGameIntro();

}


function showHeartGameIntro() {

    hideAllHeartGameCards();

    heartGameIntro.classList.remove(
        "hidden"
    );

}


function returnToHeartGameMenu() {

    stopHeartGame();

    clearAllFallingItems();

    hideAllWebsiteScreensForHeartGame();

    const menuScreen =
        document.getElementById(
            "menu-screen"
        );

    menuScreen.classList.remove(
        "hidden"
    );

}


/* ==================================================== */
/* START AND RESET                                      */
/* ==================================================== */

function resetHeartGame() {

    stopHeartGame();

    clearAllFallingItems();

    score = 0;

    timeLeft =
        GAME_DURATION;

    basketPositionX =
        0;

    updateHeartGameDisplay();

    heartGameMessage.textContent =
        "Move your mouse anywhere to control the basket 💗";

    heartGameMessage.className =
        "heart-game-message";

}


function startHeartGame() {

    resetHeartGame();

    hideAllHeartGameCards();

    heartGameCard.classList.remove(
        "hidden"
    );

    gameRunning =
        true;

    centreBasket();

    spawnFallingItem();

    spawnInterval =
        setInterval(
            spawnFallingItem,
            540
        );

    timerInterval =
        setInterval(
            function () {

                timeLeft--;

                updateHeartGameDisplay();

                if (timeLeft <= 0) {

                    finishHeartGame();

                }

            },
            1000
        );

    animationFrameId =
        requestAnimationFrame(
            updateFallingItems
        );

}


/* ==================================================== */
/* BASKET MOVEMENT                                      */
/* ==================================================== */

function centreBasket() {

    const playAreaWidth =
        heartPlayArea.clientWidth;

    const basketWidth =
        heartBasket.offsetWidth;

    basketPositionX =
        (
            playAreaWidth
            - basketWidth
        ) / 2;

    heartBasket.style.left =
        `${basketPositionX}px`;

    heartBasket.style.transform =
        "none";

}


document.addEventListener(
    "mousemove",

    function (event) {

        if (!gameRunning) {
            return;
        }

        const playAreaRectangle =
            heartPlayArea.getBoundingClientRect();

        const basketWidth =
            heartBasket.offsetWidth;

        let newBasketX =
            event.clientX
            - playAreaRectangle.left
            - basketWidth / 2;

        const maximumBasketX =
            heartPlayArea.clientWidth
            - basketWidth;

        newBasketX =
            Math.max(
                0,
                Math.min(
                    newBasketX,
                    maximumBasketX
                )
            );

        basketPositionX =
            newBasketX;

        heartBasket.style.left =
            `${basketPositionX}px`;

        heartBasket.style.transform =
            "none";

    }
);


/* ==================================================== */
/* CREATE FALLING ITEM                                  */
/* ==================================================== */

function spawnFallingItem() {

    if (!gameRunning) {
        return;
    }

    const shouldCreateGoodItem =
        Math.random() < 0.76;

    const itemType =
        shouldCreateGoodItem
            ? "good"
            : "bad";

    const itemEmoji =
        shouldCreateGoodItem
            ? getRandomHeartGameItem(
                goodItems
            )
            : getRandomHeartGameItem(
                badItems
            );

    const itemElement =
        document.createElement(
            "div"
        );

    itemElement.className =
        `falling-game-item ${itemType}-item`;

    itemElement.textContent =
        itemEmoji;

    const itemSize =
        52;

    const maximumLeft =
        heartPlayArea.clientWidth
        - itemSize;

    const randomLeft =
        Math.random()
        * Math.max(
            maximumLeft,
            0
        );

    itemElement.style.left =
        `${randomLeft}px`;

    heartPlayArea.appendChild(
        itemElement
    );

    const elapsedTime =
        GAME_DURATION
        - timeLeft;

    const speedIncrease =
        elapsedTime
        * 1.15;

    const fallingSpeed =
        135
        + speedIncrease
        + Math.random() * 50;

    fallingItems.push(
        {

            element:
                itemElement,

            type:
                itemType,

            emoji:
                itemEmoji,

            x:
                randomLeft,

            y:
                -60,

            speed:
                fallingSpeed,

            caught:
                false,

            previousTimestamp:
                null

        }
    );

}


/* ==================================================== */
/* ANIMATION LOOP                                       */
/* ==================================================== */

function updateFallingItems(timestamp) {

    if (!gameRunning) {
        return;
    }

    const playAreaHeight =
        heartPlayArea.clientHeight;

    const basketRectangle =
        heartBasket.getBoundingClientRect();

    const playAreaRectangle =
        heartPlayArea.getBoundingClientRect();

    for (
        let itemIndex =
            fallingItems.length - 1;

        itemIndex >= 0;

        itemIndex--
    ) {

        const item =
            fallingItems[
                itemIndex
            ];

        if (!item.previousTimestamp) {

            item.previousTimestamp =
                timestamp;

        }

        const deltaTime =
            (
                timestamp
                - item.previousTimestamp
            ) / 1000;

        item.previousTimestamp =
            timestamp;

        item.y +=
            item.speed
            * deltaTime;

        item.element.style.top =
            `${item.y}px`;

        const itemRectangle =
            item.element.getBoundingClientRect();

        const itemCentreX =
            itemRectangle.left
            + itemRectangle.width / 2;

        const itemBottom =
            itemRectangle.bottom;

        const basketTop =
            basketRectangle.top
            + 18;

        const basketLeft =
            basketRectangle.left
            + 9;

        const basketRight =
            basketRectangle.right
            - 9;

        const caughtHorizontally =
            itemCentreX >= basketLeft
            && itemCentreX <= basketRight;

        const caughtVertically =
            itemBottom >= basketTop
            && itemRectangle.top
            <= basketRectangle.bottom;

        if (
            !item.caught
            && caughtHorizontally
            && caughtVertically
        ) {

            item.caught =
                true;

            catchFallingItem(
                item,
                playAreaRectangle
            );

            removeFallingItem(
                itemIndex
            );

            continue;

        }

        if (
            item.y
            > playAreaHeight + 70
        ) {

            removeFallingItem(
                itemIndex
            );

        }

    }

    animationFrameId =
        requestAnimationFrame(
            updateFallingItems
        );

}


/* ==================================================== */
/* CATCH ITEM                                           */
/* ==================================================== */

function catchFallingItem(
    item,
    playAreaRectangle
) {

    const itemRectangle =
        item.element.getBoundingClientRect();

    const popX =
        itemRectangle.left
        - playAreaRectangle.left;

    const popY =
        itemRectangle.top
        - playAreaRectangle.top;

    if (
        item.type === "good"
    ) {

        score++;

        showCatchPop(
            "+1 💗",
            popX,
            popY,
            false
        );

        heartGameMessage.textContent =
            getRandomHeartGameItem(
                positiveMessages
            );

    } else {

        score =
            Math.max(
                0,
                score - 1
            );

        showCatchPop(
            "-1",
            popX,
            popY,
            true
        );

        heartGameMessage.textContent =
            getRandomHeartGameItem(
                negativeMessages
            );

    }

    updateHeartGameDisplay();

}


/* ==================================================== */
/* CATCH POP                                            */
/* ==================================================== */

function showCatchPop(
    text,
    x,
    y,
    negative
) {

    const pop =
        document.createElement(
            "div"
        );

    pop.className =
        negative
            ? "catch-pop negative-pop"
            : "catch-pop";

    pop.textContent =
        text;

    pop.style.left =
        `${x}px`;

    pop.style.top =
        `${y}px`;

    heartPlayArea.appendChild(
        pop
    );

    setTimeout(
        function () {

            pop.remove();

        },
        700
    );

}


/* ==================================================== */
/* REMOVE ITEMS                                         */
/* ==================================================== */

function removeFallingItem(
    itemIndex
) {

    const item =
        fallingItems[
            itemIndex
        ];

    if (
        item
        && item.element
    ) {

        item.element.remove();

    }

    fallingItems.splice(
        itemIndex,
        1
    );

}


function clearAllFallingItems() {

    fallingItems.forEach(
        function (item) {

            if (
                item
                && item.element
            ) {

                item.element.remove();

            }

        }
    );

    fallingItems =
        [];

    const remainingPops =
        heartPlayArea.querySelectorAll(
            ".catch-pop"
        );

    remainingPops.forEach(
        function (pop) {

            pop.remove();

        }
    );

}


/* ==================================================== */
/* DISPLAY                                              */
/* ==================================================== */

function updateHeartGameDisplay() {

    heartGameScore.textContent =
        `${score} / ${HEART_TARGET}`;

    heartGameTime.textContent =
        `${timeLeft}s`;

    const progressPercentage =
        Math.min(
            (
                score
                / HEART_TARGET
            ) * 100,
            100
        );

    heartGameProgressFill.style.width =
        `${progressPercentage}%`;

}


/* ==================================================== */
/* FINISH GAME                                          */
/* ==================================================== */

function finishHeartGame() {

    if (!gameRunning) {
        return;
    }

    stopHeartGame();

    clearAllFallingItems();

    hideAllHeartGameCards();

    if (
        score >= HEART_TARGET
    ) {

        localStorage.setItem(
            "relationshipKey2Unlocked",
            "true"
        );

        heartWinMessage.textContent =
            `You caught ${score} hearts in 30 seconds and filled my entire basket with love. Relationship Key No. 2 is officially yours 💗`;

        heartGameWin.classList.remove(
            "hidden"
        );

    } else {

        const heartsNeeded =
            HEART_TARGET
            - score;

        heartRetryMessage.textContent =
            `You caught ${score} hearts! Only ${heartsNeeded} more were needed. The hearts were being dramatic today, so let us catch them again 🥹💗`;

        heartGameRetry.classList.remove(
            "hidden"
        );

    }

}


/* ==================================================== */
/* STOP GAME                                            */
/* ==================================================== */

function stopHeartGame() {

    gameRunning =
        false;

    if (spawnInterval) {

        clearInterval(
            spawnInterval
        );

        spawnInterval =
            null;

    }

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval =
            null;

    }

    if (animationFrameId) {

        cancelAnimationFrame(
            animationFrameId
        );

        animationFrameId =
            null;

    }

}


/* ==================================================== */
/* RANDOM HELPER                                        */
/* ==================================================== */

function getRandomHeartGameItem(
    array
) {

    const randomIndex =
        Math.floor(
            Math.random()
            * array.length
        );

    return array[
        randomIndex
    ];

}


/* ==================================================== */
/* OPEN SPECIAL SCRATCH CARD                            */
/* ==================================================== */

function openSpecialScratchCard() {

    stopHeartGame();

    clearAllFallingItems();

    hideAllWebsiteScreensForHeartGame();

    const scratchCardScreen =
        document.getElementById(
            "scratch-card-screen"
        );

    scratchCardScreen.classList.remove(
        "hidden"
    );

    if (
        typeof window.resetScratchCard
        === "function"
    ) {

        window.resetScratchCard();

    }

}


/* ==================================================== */
/* EVENT LISTENERS                                      */
/* ==================================================== */

catchHeartButton.addEventListener(
    "click",
    openCatchHeartGame
);


startHeartGameButton.addEventListener(
    "click",
    startHeartGame
);


retryHeartGameButton.addEventListener(
    "click",
    startHeartGame
);


replayHeartGameButton.addEventListener(
    "click",
    startHeartGame
);


heartIntroMenuButton.addEventListener(
    "click",
    returnToHeartGameMenu
);


heartRetryMenuButton.addEventListener(
    "click",
    returnToHeartGameMenu
);


heartWinMenuButton.addEventListener(
    "click",
    returnToHeartGameMenu
);


heartOpenScratchButton.addEventListener(
    "click",
    openSpecialScratchCard
);


leaveHeartGameButton.addEventListener(
    "click",
    returnToHeartGameMenu
);


window.addEventListener(
    "resize",

    function () {

        if (gameRunning) {

            centreBasket();

        }

    }
);