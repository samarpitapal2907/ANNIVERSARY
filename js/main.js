const screens = {
    password: document.getElementById("password-screen"),
    welcome: document.getElementById("welcome-screen"),
    rules: document.getElementById("rules-screen"),
    menu: document.getElementById("menu-screen"),
    album: document.getElementById("album-screen")
};

const passwordForm =
    document.getElementById("password-form");

const passwordInput =
    document.getElementById("password-input");

const passwordMessage =
    document.getElementById("password-message");

const dateCheck =
    document.getElementById("date-check");

const hintBox =
    document.getElementById("hint-box");

const hintList =
    document.getElementById("hint-list");

const correctPassword = "090524";

const correctDay = "09";
const correctMonth = "05";
const correctYear = "24";

let wrongAttempts = 0;

const hints = [
    "Hint 1: We were at school.",

    "Hint 2: Something very special happened between us that day.",

    "Hint 3: It was a Thursday.",

    "Hint 4: It happened on a rainy day.",

    "Hint 5: We were sitting on the last bench.",

    "Hint 6: The year was 2024.",

    "Hint 7: The month was May.",

    "Hint 8: The date was the 9th.",

    "Hint 9: It was the day of our first kiss 💋",

    "Hint 10: The password is 090524. Do not be sad—I forgot it too and found the date in my old personal diary, hehe 💗"
];


/* SHOW ONLY ONE SCREEN */

function showScreen(screenName) {

    Object.values(screens).forEach(
        function (screen) {

            screen.classList.add("hidden");

        }
    );

    screens[screenName].classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ALLOW NUMBERS ONLY */

passwordInput.addEventListener(
    "input",

    function () {

        passwordInput.value =
            passwordInput.value.replace(
                /[^0-9]/g,
                ""
            );

    }
);


/* CHECK PASSWORD */

passwordForm.addEventListener(
    "submit",

    function (event) {

        event.preventDefault();

        const enteredPassword =
            passwordInput.value.trim();

        passwordMessage.textContent = "";

        dateCheck.innerHTML = "";

        if (enteredPassword.length !== 6) {

            passwordMessage.textContent =
                "Please enter exactly six numbers.";

            return;

        }

        if (enteredPassword === correctPassword) {

            passwordMessage.textContent =
                "Identity confirmed. Welcome, my favourite person 💗";

            dateCheck.innerHTML = `
                <p>
                    Day: correct ✅
                    <br>
                    Month: correct ✅
                    <br>
                    Year: correct ✅
                </p>
            `;

            setTimeout(
                function () {

                    showScreen("welcome");

                },
                1000
            );

            return;

        }

        wrongAttempts++;

        checkDateParts(enteredPassword);

        showCurrentHint();

        passwordInput.value = "";

        passwordInput.focus();

    }
);


/* CHECK DAY, MONTH AND YEAR */

function checkDateParts(enteredPassword) {

    const enteredDay =
        enteredPassword.slice(0, 2);

    const enteredMonth =
        enteredPassword.slice(2, 4);

    const enteredYear =
        enteredPassword.slice(4, 6);

    const dayResult =
        enteredDay === correctDay
            ? "correct ✅"
            : "wrong ❌";

    const monthResult =
        enteredMonth === correctMonth
            ? "correct ✅"
            : "wrong ❌";

    const yearResult =
        enteredYear === correctYear
            ? "correct ✅"
            : "wrong ❌";

    dateCheck.innerHTML = `
        <p>
            <strong>
                Your date check:
            </strong>
        </p>

        <p>
            Day (${enteredDay}): ${dayResult}
            <br>
            Month (${enteredMonth}): ${monthResult}
            <br>
            Year (${enteredYear}): ${yearResult}
        </p>
    `;

}


/* SHOW ONLY CURRENT HINT */

function showCurrentHint() {

    hintBox.classList.remove("hidden");

    const hintIndex =
        Math.min(
            wrongAttempts - 1,
            hints.length - 1
        );

    hintList.innerHTML = `
        <p>
            ${hints[hintIndex]}
        </p>
    `;

    if (wrongAttempts >= hints.length) {

        passwordMessage.textContent =
            "You used all ten hints. The password has now been revealed below 💗";

    } else {

        passwordMessage.textContent =
            "Wrong attempt "
            + wrongAttempts
            + ". Hint "
            + wrongAttempts
            + " unlocked.";

    }

}


/* WELCOME TO RULES */

document
    .getElementById("welcome-next-button")
    .addEventListener(
        "click",

        function () {

            showScreen("rules");

        }
    );


/* RULES TO MENU */

document
    .getElementById("accept-rules-button")
    .addEventListener(
        "click",

        function () {

            showScreen("menu");

        }
    );


/* MENU TO ALBUM */

document
    .getElementById("album-button")
    .addEventListener(
        "click",

        function () {

            showScreen("album");

            if (
                typeof window.openAlbum
                === "function"
            ) {

                window.openAlbum();

            }

        }
    );


/* ALBUM TO MENU */

document
    .getElementById("album-menu-button")
    .addEventListener(
        "click",

        function () {

            showScreen("menu");

        }
    );


    /* ==================================================== */
/* EXTRA MAIN MENU BUTTONS                              */
/* ==================================================== */

const scratchCardMenuButton =
    document.getElementById(
        "scratch-card-menu-button"
    );

const rewardWheelMenuButton =
    document.getElementById(
        "reward-wheel-menu-button"
    );

const makeHomeMenuButton =
    document.getElementById(
        "make-home-menu-button"
    );


function hideAllMainScreens() {

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


/* OPEN SCRATCH CARD */

scratchCardMenuButton.addEventListener(
    "click",

    function () {

        hideAllMainScreens();

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
);


/* OPEN REWARD WHEEL */

rewardWheelMenuButton.addEventListener(
    "click",

    function () {

        hideAllMainScreens();

        const rewardWheelPage =
            document.getElementById(
                "reward-wheel-screen"
            );

        rewardWheelPage.classList.remove(
            "hidden"
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

        rewardWheelIntro.classList.remove(
            "hidden"
        );

        rewardWheelGame.classList.add(
            "hidden"
        );

        rewardWheelResult.classList.add(
            "hidden"
        );

    }
);


/* OPEN LET'S MAKE OUR HOME */

makeHomeMenuButton.addEventListener(
    "click",

    function () {

        if (
            typeof window.openMakeOurHome
            === "function"
        ) {

            window.openMakeOurHome();

            return;

        }

        hideAllMainScreens();

        const makeHomeScreen =
            document.getElementById(
                "make-home-screen"
            );

        const makeHomeIntro =
            document.getElementById(
                "make-home-intro"
            );

        const makeHomeQuestionCard =
            document.getElementById(
                "make-home-question-card"
            );

        const makeHomeResult =
            document.getElementById(
                "make-home-result"
            );

        const levelThreePlaceholder =
            document.getElementById(
                "level-three-placeholder"
            );

        makeHomeScreen.classList.remove(
            "hidden"
        );

        makeHomeIntro.classList.remove(
            "hidden"
        );

        makeHomeQuestionCard.classList.add(
            "hidden"
        );

        makeHomeResult.classList.add(
            "hidden"
        );

        levelThreePlaceholder.classList.add(
            "hidden"
        );

    }
);