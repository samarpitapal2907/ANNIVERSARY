document.addEventListener("DOMContentLoaded", function () {

    console.log("Final surprise JavaScript loaded successfully 💗");


    /* ================================================== */
    /* ELEMENTS                                           */
    /* ================================================== */

    const finalWrapper = document.getElementById(
        "final-surprise-placeholder"
    );

    const escapeRoomFinish = document.getElementById(
        "escape-room-finish"
    );

    const openFinalButton = document.getElementById(
        "escape-final-surprise-button"
    );


    const stageKeys = document.getElementById(
        "final-stage-keys"
    );

    const stageEnvelope = document.getElementById(
        "final-stage-envelope"
    );

    const stageLetter = document.getElementById(
        "final-stage-letter"
    );

    const stageStars = document.getElementById(
        "final-stage-stars"
    );

    const stageEnding = document.getElementById(
        "final-stage-ending"
    );


    const unlockButton = document.getElementById(
        "unlock-final-surprise-button"
    );

    const finalMenuButton = document.getElementById(
        "final-surprise-menu-button"
    );

    const openEnvelopeButton = document.getElementById(
        "open-envelope-button"
    );

    const openStarsButton = document.getElementById(
        "open-memory-stars-button"
    );

    const finalEndingButton = document.getElementById(
        "go-to-final-ending-button"
    );

    const readAgainButton = document.getElementById(
        "read-letter-again-button"
    );

    const returnMenuButton = document.getElementById(
        "return-to-menu-final-button"
    );


    const finalEnvelope = document.getElementById(
        "final-envelope"
    );

    const key1 = document.getElementById(
        "final-key-1"
    );

    const key2 = document.getElementById(
        "final-key-2"
    );

    const key3 = document.getElementById(
        "final-key-3"
    );


    const letterLines = document.querySelectorAll(
        ".final-letter-line"
    );

    const starButtons = document.querySelectorAll(
        ".memory-star-button"
    );

    const starMessageBox = document.getElementById(
        "memory-star-message-box"
    );


    if (!finalWrapper) {
        console.error(
            "Final surprise section was not found."
        );

        return;
    }


    let openedStars = 0;
    let letterTimeouts = [];
    let keyTimeouts = [];


    /* ================================================== */
    /* GENERAL FUNCTIONS                                  */
    /* ================================================== */

    function hideElement(element) {
        if (element) {
            element.classList.add("hidden");
        }
    }


    function showElement(element) {
        if (element) {
            element.classList.remove("hidden");
        }
    }


    function hideAllStages() {
        hideElement(stageKeys);
        hideElement(stageEnvelope);
        hideElement(stageLetter);
        hideElement(stageStars);
        hideElement(stageEnding);
    }


    function showStage(stage) {
        hideAllStages();
        showElement(stage);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function clearLetterTimeouts() {
        letterTimeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });

        letterTimeouts = [];
    }


    function clearKeyTimeouts() {
        keyTimeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });

        keyTimeouts = [];
    }


    function returnToMenu() {
        clearLetterTimeouts();
        clearKeyTimeouts();

        const allScreens = document.querySelectorAll(
            ".screen"
        );

        allScreens.forEach(function (screen) {
            screen.classList.add("hidden");
        });

        const menuScreen = document.getElementById(
            "menu-screen"
        );

        showElement(menuScreen);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* ================================================== */
    /* RESET FINAL SURPRISE                               */
    /* ================================================== */

    function resetKeys() {
        if (key1) {
            key1.classList.remove("active");
        }

        if (key2) {
            key2.classList.remove("active");
        }

        if (key3) {
            key3.classList.remove("active");
        }

        if (unlockButton) {
            unlockButton.disabled = false;
        }
    }


    function resetEnvelope() {
        if (finalEnvelope) {
            finalEnvelope.classList.remove("open");
        }

        if (openEnvelopeButton) {
            openEnvelopeButton.disabled = false;
        }
    }


    function resetLetter() {
        clearLetterTimeouts();

        letterLines.forEach(function (line) {
            line.classList.remove("show");
        });

        hideElement(openStarsButton);
    }


    function resetStars() {
        openedStars = 0;

        starButtons.forEach(function (button) {
            button.classList.remove("opened");
            button.disabled = false;
        });

        if (starMessageBox) {
            starMessageBox.textContent =
                "Click a star, baby ✨";

            starMessageBox.classList.remove(
                "message-changed"
            );
        }

        hideElement(finalEndingButton);
    }


    function resetFinalSurprise() {
        clearKeyTimeouts();
        clearLetterTimeouts();

        hideAllStages();
        showElement(stageKeys);

        resetKeys();
        resetEnvelope();
        resetLetter();
        resetStars();
    }


    /* ================================================== */
    /* OPEN FINAL SURPRISE                                */
    /* ================================================== */

    function openFinalSurprise() {
        hideElement(escapeRoomFinish);
        showElement(finalWrapper);

        resetFinalSurprise();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* ================================================== */
    /* KEY ANIMATION                                      */
    /* ================================================== */

    function unlockFinalSurprise() {
        clearKeyTimeouts();

        if (unlockButton) {
            unlockButton.disabled = true;
            unlockButton.textContent =
                "Unlocking the keys... ✨";
        }


        if (key1) {
            key1.classList.add("active");
        }


        const keyTwoTimer = setTimeout(function () {
            if (key2) {
                key2.classList.add("active");
            }
        }, 550);


        const keyThreeTimer = setTimeout(function () {
            if (key3) {
                key3.classList.add("active");
            }
        }, 1100);


        const envelopeTimer = setTimeout(function () {

            if (unlockButton) {
                unlockButton.disabled = false;

                unlockButton.textContent =
                    "Unlock the final surprise 💌";
            }

            showStage(stageEnvelope);

        }, 1900);


        keyTimeouts.push(
            keyTwoTimer,
            keyThreeTimer,
            envelopeTimer
        );
    }


    /* ================================================== */
    /* ENVELOPE                                           */
    /* ================================================== */

    function openLoveLetter() {
        if (openEnvelopeButton) {
            openEnvelopeButton.disabled = true;

            openEnvelopeButton.textContent =
                "Opening your letter... 💗";
        }


        if (finalEnvelope) {
            finalEnvelope.classList.add("open");
        }


        setTimeout(function () {
            showStage(stageLetter);
            revealLetter();

            if (openEnvelopeButton) {
                openEnvelopeButton.disabled = false;

                openEnvelopeButton.textContent =
                    "Open the letter 🥺";
            }
        }, 1000);
    }


    /* ================================================== */
    /* LETTER REVEAL                                      */
    /* ================================================== */

    function revealLetter() {
        resetLetter();

        letterLines.forEach(function (line, index) {

            const timeout = setTimeout(function () {
                line.classList.add("show");
            }, index * 550);

            letterTimeouts.push(timeout);

        });


        const showButtonTimeout = setTimeout(function () {
            showElement(openStarsButton);
        }, letterLines.length * 550 + 500);


        letterTimeouts.push(showButtonTimeout);
    }


    /* ================================================== */
    /* MEMORY STARS                                       */
    /* ================================================== */

    function showStarMessage(message) {
        if (!starMessageBox) {
            return;
        }

        starMessageBox.classList.remove(
            "message-changed"
        );

        starMessageBox.textContent = message;

        void starMessageBox.offsetWidth;

        starMessageBox.classList.add(
            "message-changed"
        );
    }


    function openMemoryStars() {
        resetStars();
        showStage(stageStars);
    }


    starButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.classList.contains("opened")) {
                return;
            }


            button.classList.add("opened");
            button.disabled = true;

            openedStars += 1;


            const message = button.getAttribute(
                "data-message"
            );

            showStarMessage(
                message ||
                "You are my favourite little miracle 💗"
            );


            if (openedStars >= starButtons.length) {

                setTimeout(function () {

                    showStarMessage(
                        "You opened every star, babyyyyy. One final message is waiting for you 💝"
                    );

                    showElement(finalEndingButton);

                }, 500);
            }

        });

    });


    /* ================================================== */
    /* BUTTON CONNECTIONS                                 */
    /* ================================================== */

    if (openFinalButton) {
        openFinalButton.addEventListener(
            "click",
            openFinalSurprise
        );
    }


    if (unlockButton) {
        unlockButton.addEventListener(
            "click",
            unlockFinalSurprise
        );
    } else {
        console.error(
            "Unlock final surprise button was not found."
        );
    }


    if (openEnvelopeButton) {
        openEnvelopeButton.addEventListener(
            "click",
            openLoveLetter
        );
    }


    if (openStarsButton) {
        openStarsButton.addEventListener(
            "click",
            openMemoryStars
        );
    }


    if (finalEndingButton) {
        finalEndingButton.addEventListener(
            "click",
            function () {
                showStage(stageEnding);
            }
        );
    }


    if (readAgainButton) {
        readAgainButton.addEventListener(
            "click",
            function () {
                showStage(stageLetter);
                revealLetter();
            }
        );
    }


    if (finalMenuButton) {
        finalMenuButton.addEventListener(
            "click",
            returnToMenu
        );
    }


    if (returnMenuButton) {
        returnMenuButton.addEventListener(
            "click",
            returnToMenu
        );
    }


    /* ================================================== */
    /* MAKE FUNCTION AVAILABLE TO ESCAPE ROOM             */
    /* ================================================== */

    window.openFinalSurprise = openFinalSurprise;

});