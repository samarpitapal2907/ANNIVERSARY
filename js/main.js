document.addEventListener("DOMContentLoaded", function () {

    /* ================================================== */
    /* MAIN ELEMENTS                                      */
    /* ================================================== */

    const passwordScreen =
        document.getElementById("password-screen");

    const welcomeScreen =
        document.getElementById("welcome-screen");

    const rulesScreen =
        document.getElementById("rules-screen");

    const menuScreen =
        document.getElementById("menu-screen");

    const albumScreen =
        document.getElementById("album-screen");


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


    /* ================================================== */
    /* PASSWORD SETTINGS                                  */
    /* ================================================== */

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


    /* ================================================== */
    /* GENERAL SCREEN FUNCTIONS                           */
    /* ================================================== */

    function hideAllScreens() {

        const allScreens =
            document.querySelectorAll(".screen");

        allScreens.forEach(function (screen) {

            screen.classList.add("hidden");

        });

    }


    function showScreen(screen) {

        hideAllScreens();

        if (screen) {

            screen.classList.remove("hidden");

        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    window.showAnniversaryScreen = showScreen;


    /* ================================================== */
    /* PASSWORD INPUT                                     */
    /* ================================================== */

    if (passwordInput) {

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

    }


    /* ================================================== */
    /* PASSWORD SUBMISSION                                */
    /* ================================================== */

    if (passwordForm) {

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

                            showScreen(
                                welcomeScreen
                            );

                        },
                        1000
                    );


                    return;

                }


                wrongAttempts += 1;


                checkDateParts(
                    enteredPassword
                );


                showCurrentHint();


                passwordInput.value = "";

                passwordInput.focus();

            }
        );

    }


    /* ================================================== */
    /* CHECK DATE PARTS                                   */
    /* ================================================== */

    function checkDateParts(
        enteredPassword
    ) {

        const enteredDay =
            enteredPassword.slice(
                0,
                2
            );


        const enteredMonth =
            enteredPassword.slice(
                2,
                4
            );


        const enteredYear =
            enteredPassword.slice(
                4,
                6
            );


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


    /* ================================================== */
    /* HINTS                                              */
    /* ================================================== */

    function showCurrentHint() {

        if (
            !hintBox ||
            !hintList
        ) {

            return;

        }


        hintBox.classList.remove(
            "hidden"
        );


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


        if (
            wrongAttempts >=
            hints.length
        ) {

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


    /* ================================================== */
    /* WELCOME TO RULES                                   */
    /* ================================================== */

    const welcomeNextButton =
        document.getElementById(
            "welcome-next-button"
        );


    if (welcomeNextButton) {

        welcomeNextButton.addEventListener(
            "click",

            function () {

                showScreen(
                    rulesScreen
                );

            }
        );

    }


    /* ================================================== */
    /* RULES TO MENU                                      */
    /* ================================================== */

    const acceptRulesButton =
        document.getElementById(
            "accept-rules-button"
        );


    if (acceptRulesButton) {

        acceptRulesButton.addEventListener(
            "click",

            function () {

                showScreen(
                    menuScreen
                );

            }
        );

    }


    /* ================================================== */
    /* DIGITAL ALBUM                                      */
    /* ================================================== */

    const albumButton =
        document.getElementById(
            "album-button"
        );


    if (albumButton) {

        albumButton.addEventListener(
            "click",

            function () {

                showScreen(
                    albumScreen
                );


                if (
                    typeof window.openAlbum ===
                    "function"
                ) {

                    window.openAlbum();

                }

            }
        );

    }


    const albumMenuButton =
        document.getElementById(
            "album-menu-button"
        );


    if (albumMenuButton) {

        albumMenuButton.addEventListener(
            "click",

            function () {

                showScreen(
                    menuScreen
                );

            }
        );

    }


    /* ================================================== */
    /* LEVEL 1: BOYFRIEND TEST                            */
    /* ================================================== */

    const boyfriendTestButton =
        document.getElementById(
            "boyfriend-test-button"
        );


    if (boyfriendTestButton) {

        boyfriendTestButton.addEventListener(
            "click",

            function () {

                if (
                    typeof window.openBoyfriendTest ===
                    "function"
                ) {

                    window.openBoyfriendTest();

                    return;

                }


                const boyfriendTestScreen =
                    document.getElementById(
                        "boyfriend-test-screen"
                    );


                showScreen(
                    boyfriendTestScreen
                );

            }
        );

    }


    /* ================================================== */
    /* LEVEL 2: CATCH MY HEART                            */
    /* ================================================== */

    const catchHeartButton =
        document.getElementById(
            "catch-heart-button"
        );


    if (catchHeartButton) {

        catchHeartButton.addEventListener(
            "click",

            function () {

                if (
                    typeof window.openCatchMyHeart ===
                    "function"
                ) {

                    window.openCatchMyHeart();

                    return;

                }


                const catchHeartScreen =
                    document.getElementById(
                        "catch-heart-screen"
                    );


                showScreen(
                    catchHeartScreen
                );

            }
        );

    }


    /* ================================================== */
    /* SCRATCH CARD                                       */
    /* ================================================== */

    const scratchCardMenuButton =
        document.getElementById(
            "scratch-card-menu-button"
        );


    if (scratchCardMenuButton) {

        scratchCardMenuButton.addEventListener(
            "click",

            function () {

                const scratchCardScreen =
                    document.getElementById(
                        "scratch-card-screen"
                    );


                showScreen(
                    scratchCardScreen
                );


                if (
                    typeof window.resetScratchCard ===
                    "function"
                ) {

                    window.resetScratchCard();

                }

            }
        );

    }


    /* ================================================== */
    /* REWARD WHEEL                                       */
    /* ================================================== */

    const rewardWheelMenuButton =
        document.getElementById(
            "reward-wheel-menu-button"
        );


    if (rewardWheelMenuButton) {

        rewardWheelMenuButton.addEventListener(
            "click",

            function () {

                if (
                    typeof window.openRewardWheel ===
                    "function"
                ) {

                    window.openRewardWheel();

                    return;

                }


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


                showScreen(
                    rewardWheelScreen
                );


                if (rewardWheelIntro) {

                    rewardWheelIntro.classList.remove(
                        "hidden"
                    );

                }


                if (rewardWheelGame) {

                    rewardWheelGame.classList.add(
                        "hidden"
                    );

                }


                if (rewardWheelResult) {

                    rewardWheelResult.classList.add(
                        "hidden"
                    );

                }

            }
        );

    }


    /* ================================================== */
    /* LEVEL 3: ESCAPE ROOM                               */
    /* ================================================== */

    const levelThreeButton =
        document.getElementById(
            "level-3-button"
        );


    if (levelThreeButton) {

        levelThreeButton.addEventListener(
            "click",

            function () {

                if (
                    typeof window.openEscapeRoom ===
                    "function"
                ) {

                    window.openEscapeRoom();

                    return;

                }


                const escapeRoomScreen =
                    document.getElementById(
                        "escape-room-screen"
                    );


                const escapeRoomIntro =
                    document.getElementById(
                        "escape-room-intro"
                    );


                const escapeRoomGame =
                    document.getElementById(
                        "escape-room-game"
                    );


                const escapeRoomFinish =
                    document.getElementById(
                        "escape-room-finish"
                    );


                const finalSurprise =
                    document.getElementById(
                        "final-surprise-placeholder"
                    );


                showScreen(
                    escapeRoomScreen
                );


                if (escapeRoomIntro) {

                    escapeRoomIntro.classList.remove(
                        "hidden"
                    );

                }


                if (escapeRoomGame) {

                    escapeRoomGame.classList.add(
                        "hidden"
                    );

                }


                if (escapeRoomFinish) {

                    escapeRoomFinish.classList.add(
                        "hidden"
                    );

                }


                if (finalSurprise) {

                    finalSurprise.classList.add(
                        "hidden"
                    );

                }

            }
        );

    }

});
