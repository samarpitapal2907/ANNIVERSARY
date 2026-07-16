/* ==================================================== */
/* REWARD WHEEL ELEMENTS                                */
/* ==================================================== */

const rewardWheelScreen =
    document.getElementById(
        "reward-wheel-screen"
    );

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

const openRewardWheelButton =
    document.getElementById(
        "open-reward-wheel-button"
    );

const spinRewardWheelButton =
    document.getElementById(
        "spin-reward-wheel-button"
    );

const spinWheelAgainButton =
    document.getElementById(
        "spin-wheel-again-button"
    );

const rewardWheelNextButton =
    document.getElementById(
        "reward-wheel-next-button"
    );

const colourfulRewardWheel =
    document.getElementById(
        "colourful-reward-wheel"
    );

const wheelStatusMessage =
    document.getElementById(
        "wheel-status-message"
    );

const rewardResultEmoji =
    document.getElementById(
        "reward-result-emoji"
    );

const rewardResultTitle =
    document.getElementById(
        "reward-result-title"
    );

const rewardResultDescription =
    document.getElementById(
        "reward-result-description"
    );

const rewardWheelIntroMenuButton =
    document.getElementById(
        "reward-wheel-intro-menu-button"
    );

const rewardWheelGameMenuButton =
    document.getElementById(
        "reward-wheel-game-menu-button"
    );

const rewardWheelResultMenuButton =
    document.getElementById(
        "reward-wheel-result-menu-button"
    );

const futurePlaceholderMenuButton =
    document.getElementById(
        "future-placeholder-menu-button"
    );


/* ==================================================== */
/* REWARDS                                              */
/* ==================================================== */

const anniversaryRewards = [

    {
        emoji:
            "🫂",

        title:
            "One Extra-Long Hug",

        description:
            "A warm, tight, no-rushing hug that lasts for as long as you need it."
    },

    {
        emoji:
            "💋",

        title:
            "Five Bonus Kisses",

        description:
            "Five officially approved kisses, redeemable together or one at a time."
    },

    {
        emoji:
            "🌆",

        title:
            "Choose Our Next Date",

        description:
            "You choose where we go and what we do on one of our upcoming dates."
    },

    {
        emoji:
            "🍫",

        title:
            "Favourite Snack Treat",

        description:
            "One favourite snack or small food treat, lovingly provided by your girlfriend."
    },

    {
        emoji:
            "🎬",

        title:
            "Movie Night of Your Choice",

        description:
            "You choose the movie, and I promise not to complain about your selection."
    },

    {
        emoji:
            "🎵",

        title:
            "A Song Dedicated to You",

        description:
            "I will sing or record one special song chosen especially for you."
    },

    {
        emoji:
            "✨",

        title:
            "One Little Wish Granted",

        description:
            "One reasonable little wish approved under official anniversary rules."
    },

    {
        emoji:
            "🎁",

        title:
            "A Tiny Surprise Gift",

        description:
            "A cute little surprise chosen especially for you and delivered later."
    }

];


/* ==================================================== */
/* WHEEL STATE                                          */
/* ==================================================== */

let rewardWheelSpinning =
    false;

let currentWheelRotation =
    0;

let selectedRewardIndex =
    null;


/* ==================================================== */
/* SCREEN HELPERS                                       */
/* ==================================================== */

function hideRewardWheelCards() {

    rewardWheelIntro.classList.add(
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


function hideAllRewardWebsiteScreens() {

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


function returnFromRewardWheelToMenu() {

    hideAllRewardWebsiteScreens();

    const menuScreen =
        document.getElementById(
            "menu-screen"
        );

    menuScreen.classList.remove(
        "hidden"
    );

}


/* ==================================================== */
/* OPEN WHEEL                                           */
/* ==================================================== */

function showRewardWheelIntro() {

    hideRewardWheelCards();

    rewardWheelIntro.classList.remove(
        "hidden"
    );

}


function openWheelGame() {

    hideRewardWheelCards();

    rewardWheelGame.classList.remove(
        "hidden"
    );

    rewardWheelSpinning =
        false;

    selectedRewardIndex =
        null;

    currentWheelRotation =
        0;

    colourfulRewardWheel.style.transition =
        "none";

    colourfulRewardWheel.style.transform =
        "rotate(0deg)";

    spinRewardWheelButton.disabled =
        false;

    spinRewardWheelButton.textContent =
        "Spin my reward! 🎡";

    wheelStatusMessage.textContent =
        "The wheel is waiting for you 👀";

    wheelStatusMessage.className =
        "wheel-status-message";

}


/* ==================================================== */
/* SPIN                                                 */
/* ==================================================== */

function spinRewardWheel() {

    if (rewardWheelSpinning) {
        return;
    }

    rewardWheelSpinning =
        true;

    spinRewardWheelButton.disabled =
        true;

    spinRewardWheelButton.textContent =
        "Spinning… 🌈";

    wheelStatusMessage.textContent =
        "Round and round it goes… no girlfriend interference allowed 😌✨";

    wheelStatusMessage.className =
        "wheel-status-message spinning-message";


    selectedRewardIndex =
        Math.floor(
            Math.random()
            * anniversaryRewards.length
        );


    /*
        Each section is 45 degrees.

        The centre angles of the sections are:

        0 = 0 degrees
        1 = 45 degrees
        2 = 90 degrees
        etc.

        The extra negative rotation moves the selected
        reward underneath the pointer at the top.
    */

    const segmentAngle =
        360
        / anniversaryRewards.length;

    const selectedSegmentAngle =
        selectedRewardIndex
        * segmentAngle;

    const randomOffset =
        (
            Math.random()
            * 20
        ) - 10;

    const fullSpins =
        6
        + Math.floor(
            Math.random() * 3
        );

    currentWheelRotation =
        fullSpins * 360
        - selectedSegmentAngle
        - randomOffset;


    colourfulRewardWheel.style.transition =
        "transform 5.5s cubic-bezier(0.12, 0.72, 0.12, 1)";

    colourfulRewardWheel.style.transform =
        `rotate(${currentWheelRotation}deg)`;


    setTimeout(
        finishRewardWheelSpin,
        5750
    );

}


/* ==================================================== */
/* FINISH SPIN                                          */
/* ==================================================== */

function finishRewardWheelSpin() {

    rewardWheelSpinning =
        false;

    const selectedReward =
        anniversaryRewards[
            selectedRewardIndex
        ];

    wheelStatusMessage.textContent =
        `${selectedReward.emoji} The wheel has made its official decision!`;

    wheelStatusMessage.className =
        "wheel-status-message";


    localStorage.setItem(
        "anniversaryWheelReward",
        JSON.stringify(
            selectedReward
        )
    );


    setTimeout(
        function () {

            showRewardResult(
                selectedReward
            );

        },
        700
    );

}


/* ==================================================== */
/* SHOW RESULT                                          */
/* ==================================================== */

function showRewardResult(
    reward
) {

    hideRewardWheelCards();

    rewardResultEmoji.textContent =
        reward.emoji;

    rewardResultTitle.textContent =
        reward.title;

    rewardResultDescription.textContent =
        reward.description;

    rewardWheelResult.classList.remove(
        "hidden"
    );

}


/* ==================================================== */
/* WATCH WHEEL AGAIN                                    */
/* ==================================================== */

function watchWheelAgain() {

    hideRewardWheelCards();

    rewardWheelGame.classList.remove(
        "hidden"
    );

    spinRewardWheelButton.disabled =
        true;

    spinRewardWheelButton.textContent =
        "Official spin completed 💗";

    wheelStatusMessage.textContent =
        "Your official reward has already been selected ✨";

    wheelStatusMessage.className =
        "wheel-status-message";

}


/* ==================================================== */
/* CONTINUE                                             */
/* ==================================================== */

function continueToBuildFuture() {

    hideRewardWheelCards();

    buildFuturePlaceholder.classList.remove(
        "hidden"
    );

}


/* ==================================================== */
/* EVENT LISTENERS                                      */
/* ==================================================== */

openRewardWheelButton.addEventListener(
    "click",
    openWheelGame
);


spinRewardWheelButton.addEventListener(
    "click",
    spinRewardWheel
);


spinWheelAgainButton.addEventListener(
    "click",
    watchWheelAgain
);


rewardWheelNextButton.addEventListener(
    "click",
    continueToBuildFuture
);


rewardWheelIntroMenuButton.addEventListener(
    "click",
    returnFromRewardWheelToMenu
);


rewardWheelGameMenuButton.addEventListener(
    "click",
    returnFromRewardWheelToMenu
);


rewardWheelResultMenuButton.addEventListener(
    "click",
    returnFromRewardWheelToMenu
);


rewardWheelNextButton.addEventListener(
    "click",

    function () {

        if (
            typeof window.openEscapeRoom
            === "function"
        ) {

            window.openEscapeRoom();

        }

    }
);


/* ==================================================== */
/* INITIAL STATE                                        */
/* ==================================================== */

showRewardWheelIntro();