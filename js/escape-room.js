(() => {

    /* ==================================================== */
    /* ELEMENTS                                             */
    /* ==================================================== */

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

    const finalSurprisePlaceholder =
        document.getElementById(
            "final-surprise-placeholder"
        );

    const levelThreeButton =
        document.getElementById(
            "level-3-button"
        );

    const startEscapeRoomButton =
        document.getElementById(
            "start-escape-room-button"
        );

    const escapeIntroMenuButton =
        document.getElementById(
            "escape-intro-menu-button"
        );

    const escapeGameMenuButton =
        document.getElementById(
            "escape-game-menu-button"
        );

    const escapeFinishMenuButton =
        document.getElementById(
            "escape-finish-menu-button"
        );

    const replayEscapeRoomButton =
        document.getElementById(
            "replay-escape-room-button"
        );

    const escapeFinalSurpriseButton =
        document.getElementById(
            "escape-final-surprise-button"
        );

    const finalSurpriseMenuButton =
        document.getElementById(
            "final-surprise-menu-button"
        );

    const escapeProgressText =
        document.getElementById(
            "escape-progress-text"
        );

    const escapeCluesSolved =
        document.getElementById(
            "escape-clues-solved"
        );

    const escapeProgressFill =
        document.getElementById(
            "escape-progress-fill"
        );

    const escapeCluePoem =
        document.getElementById(
            "escape-clue-poem"
        );

    const escapeFeedback =
        document.getElementById(
            "escape-feedback"
        );

    const roomObjects =
        document.querySelectorAll(
            ".room-object"
        );

    const roomRug =
        document.querySelector(
            '.room-object[data-object="rug"]'
        );

    const hiddenKeyCompartment =
        document.getElementById(
            "hidden-key-compartment"
        );


    /* ==================================================== */
    /* CLUE CHAIN                                           */
    /* ==================================================== */

    const escapeClues = [

        {
            answer:
                "bookshelf",

            poem: [
                "I stand quite still against the wall,",
                "Yet hold more worlds than one could call.",
                "My rows are filled with tales that sleep,",
                "Find me where quiet stories keep."
            ],

            correctMessage:
                "The quiet stories have spoken! A folded pink note slips out from between the books. 📚✨"
        },


        {
            answer:
                "pink-box",

            poem: [
                "Among the colours, one feels right,",
                "Soft and sweet and warm and bright.",
                "With ribbon tied and secrets locked,",
                "Find the little treasure box."
            ],

            correctMessage:
                "The ribbon loosens and the little box opens. Something inside has been watching your memories. 🎀"
        },


        {
            answer:
                "camera",

            poem: [
                "I have one eye but cannot see,",
                "I freeze a smile for you and me.",
                "I keep a moment safe from time,",
                "Find the thing that captures mine."
            ],

            correctMessage:
                "Click! The camera flashes and reveals a reflection hidden inside its photograph. 📷✨"
        },


        {
            answer:
                "mirror",

            poem: [
                "I copy every face I meet,",
                "But never move and never speak.",
                "I show you back what stands nearby,",
                "Find the glass that cannot lie."
            ],

            correctMessage:
                "A message slowly appears across the mirror: the final secret waits beneath your feet. 🪞"
        },


        {
            answer:
                "rug",

            poem: [
                "I rest beneath your walking feet,",
                "I make the cold floor warm and neat.",
                "Lift the place where footsteps stay,",
                "The final secret hides that way."
            ],

            correctMessage:
                "The rug slides aside. A hidden compartment begins to glow! 🗝️✨"
        }

    ];


    /* ==================================================== */
    /* WRONG CLICK MESSAGES                                 */
    /* ==================================================== */

    const generalWrongMessages = [

        "Cute guess, detective. Wrong object though 😭",

        "Random clicking detected. Girlfriend surveillance is watching 👀",

        "Creative choice. Completely wrong, but creative.",

        "That object has been questioned and claims complete innocence.",

        "The clue is judging this decision very quietly.",

        "Not there. Read the little poem one more time 💗"

    ];


    const objectWrongMessages = {
        teddy:
            "The teddy knows nothing. He is only here for emotional support. 🧸",

        plant:
            "The plant would like to be excluded from this investigation. 🪴",

        lamp:
            "The lamp offers light, not answers. 💡",

        clock:
            "The clock says it is time to read the clue again. 🕰️",

        drawer:
            "The drawer is innocent and slightly offended.",

        bed:
            "The bed is requesting that this investigation happen after a nap.",

        window:
            "The view is pretty, but the answer is still somewhere inside the room. 🌙",

        photo:
            "That photograph is only pretending to look suspicious."

};


    /* ==================================================== */
    /* STATE                                                */
    /* ==================================================== */

    let currentEscapeClueIndex =
        0;

    let escapeRoomLocked =
        false;

    let escapeRoomCompleted =
        false;


    /* ==================================================== */
    /* SCREEN HELPERS                                       */
    /* ==================================================== */

    function hideAllWebsiteScreens() {

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


    function hideEscapeCards() {

        escapeRoomIntro.classList.add(
            "hidden"
        );

        escapeRoomGame.classList.add(
            "hidden"
        );

        escapeRoomFinish.classList.add(
            "hidden"
        );

        finalSurprisePlaceholder.classList.add(
            "hidden"
        );

    }


    function returnToMainMenu() {

        hideAllWebsiteScreens();

        const menuScreen =
            document.getElementById(
                "menu-screen"
            );

        menuScreen.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* ==================================================== */
    /* OPEN ESCAPE ROOM                                     */
    /* ==================================================== */

    function openEscapeRoomIntro() {

        hideAllWebsiteScreens();

        escapeRoomScreen.classList.remove(
            "hidden"
        );

        hideEscapeCards();

        escapeRoomIntro.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    window.openEscapeRoom =
        openEscapeRoomIntro;


    /* ==================================================== */
    /* START / RESET                                        */
    /* ==================================================== */

    function startEscapeRoom() {

        currentEscapeClueIndex =
            0;

        escapeRoomLocked =
            false;

        escapeRoomCompleted =
            false;

        roomObjects.forEach(
            function (roomObject) {

                roomObject.classList.remove(
                    "object-solved"
                );

                roomObject.disabled =
                    false;

            }
        );

        hiddenKeyCompartment.classList.add(
            "hidden"
        );

        roomRug.style.transition =
            "";

        roomRug.style.transform =
            "";

        hideEscapeCards();

        escapeRoomGame.classList.remove(
            "hidden"
        );

        updateEscapeRoomDisplay();

        setEscapeFeedback(
            "Search the room and click the object described by the poem.",
            "normal"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* ==================================================== */
    /* RENDER CURRENT CLUE                                  */
    /* ==================================================== */

    function updateEscapeRoomDisplay() {

        const currentClue =
            escapeClues[
                currentEscapeClueIndex
            ];

        escapeProgressText.textContent =
            `Clue ${currentEscapeClueIndex + 1} of ${escapeClues.length}`;

        escapeCluesSolved.textContent =
            `${currentEscapeClueIndex} / ${escapeClues.length}`;

        const progressPercentage =
            (
                currentEscapeClueIndex
                / escapeClues.length
            ) * 100;

        escapeProgressFill.style.width =
            `${progressPercentage}%`;

        escapeCluePoem.innerHTML =
            "";

        currentClue.poem.forEach(
            function (line) {

                const poemLine =
                    document.createElement(
                        "span"
                    );

                poemLine.textContent =
                    line;

                escapeCluePoem.appendChild(
                    poemLine
                );

            }
        );

    }


    /* ==================================================== */
    /* FEEDBACK                                            */
    /* ==================================================== */

    function setEscapeFeedback(
        message,
        feedbackType
    ) {

        escapeFeedback.textContent =
            message;

        escapeFeedback.classList.remove(
            "correct-feedback",
            "wrong-feedback"
        );

        void escapeFeedback.offsetWidth;

        if (
            feedbackType === "correct"
        ) {

            escapeFeedback.classList.add(
                "correct-feedback"
            );

        } else if (
            feedbackType === "wrong"
        ) {

            escapeFeedback.classList.add(
                "wrong-feedback"
            );

        }

    }


    /* ==================================================== */
    /* HANDLE OBJECT CLICK                                  */
    /* ==================================================== */

    function handleRoomObjectClick(
        event
    ) {

        if (
            escapeRoomLocked
            || escapeRoomCompleted
        ) {
            return;
        }

        const clickedObject =
            event.currentTarget;

        const clickedObjectName =
            clickedObject.dataset.object;

        const currentClue =
            escapeClues[
                currentEscapeClueIndex
            ];

        if (
            clickedObjectName
            === currentClue.answer
        ) {

            handleCorrectObject(
                clickedObject,
                currentClue
            );

        } else {

            handleWrongObject(
                clickedObjectName
            );

        }

    }


    /* ==================================================== */
    /* CORRECT OBJECT                                       */
    /* ==================================================== */

    function handleCorrectObject(
        clickedObject,
        currentClue
    ) {

        escapeRoomLocked =
            true;

        clickedObject.classList.add(
            "object-solved"
        );

        clickedObject.disabled =
            true;

        setEscapeFeedback(
            currentClue.correctMessage,
            "correct"
        );

        currentEscapeClueIndex++;

        const progressPercentage =
            (
                currentEscapeClueIndex
                / escapeClues.length
            ) * 100;

        escapeProgressFill.style.width =
            `${progressPercentage}%`;

        escapeCluesSolved.textContent =
            `${currentEscapeClueIndex} / ${escapeClues.length}`;

        if (
            currentEscapeClueIndex
            >= escapeClues.length
        ) {

            setTimeout(
                revealHiddenKey,
                1250
            );

            return;

        }

        setTimeout(
            function () {

                updateEscapeRoomDisplay();

                setEscapeFeedback(
                    "A new riddle has appeared. Find the next object 🔍",
                    "normal"
                );

                escapeRoomLocked =
                    false;

            },
            1500
        );

    }


    /* ==================================================== */
    /* WRONG OBJECT                                         */
    /* ==================================================== */

    function handleWrongObject(
        objectName
    ) {

        let message =
            objectWrongMessages[
                objectName
            ];

        if (!message) {

            const randomIndex =
                Math.floor(
                    Math.random()
                    * generalWrongMessages.length
                );

            message =
                generalWrongMessages[
                    randomIndex
                ];

        }

        setEscapeFeedback(
            message,
            "wrong"
        );

    }


    /* ==================================================== */
    /* REVEAL FINAL KEY                                     */
    /* ==================================================== */

    function revealHiddenKey() {

        escapeRoomCompleted =
            true;

        escapeRoomLocked =
            true;

        escapeProgressText.textContent =
            "All clues solved!";

        escapeCluesSolved.textContent =
            "5 / 5";

        escapeProgressFill.style.width =
            "100%";

        escapeCluePoem.innerHTML =
            `
                <span>The room has surrendered its final secret.</span>
                <span>Look beneath the glowing rug. 🗝️</span>
            `;

        setEscapeFeedback(
            "The rug slides aside and Relationship Key No. 3 rises from the hidden compartment! ✨",
            "correct"
        );

        roomRug.style.transition =
            "transform 0.9s ease";

        roomRug.style.transform =
            "perspective(260px) rotateX(54deg) translateX(-70%) rotate(-8deg)";

        hiddenKeyCompartment.classList.remove(
            "hidden"
        );

        localStorage.setItem(
            "relationshipKey3Unlocked",
            "true"
        );

        setTimeout(
            showEscapeRoomFinish,
            2500
        );

    }


    /* ==================================================== */
    /* FINISH SCREEN                                        */
    /* ==================================================== */

    function showEscapeRoomFinish() {

        hideEscapeCards();

        escapeRoomFinish.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* ==================================================== */
    /* FINAL SURPRISE                                       */
    /* ==================================================== */

    function openFinalSurprise() {

        hideEscapeCards();

        finalSurprisePlaceholder.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* ==================================================== */
    /* EVENTS                                               */
    /* ==================================================== */

    if (levelThreeButton) {

        levelThreeButton.addEventListener(
            "click",
            openEscapeRoomIntro
        );

    }


    startEscapeRoomButton.addEventListener(
        "click",
        startEscapeRoom
    );


    escapeIntroMenuButton.addEventListener(
        "click",
        returnToMainMenu
    );


    escapeGameMenuButton.addEventListener(
        "click",
        returnToMainMenu
    );


    escapeFinishMenuButton.addEventListener(
        "click",
        returnToMainMenu
    );


    finalSurpriseMenuButton.addEventListener(
        "click",
        returnToMainMenu
    );


    replayEscapeRoomButton.addEventListener(
        "click",
        startEscapeRoom
    );


    escapeFinalSurpriseButton.addEventListener(
        "click",
        openFinalSurprise
    );


    roomObjects.forEach(
        function (roomObject) {

            roomObject.addEventListener(
                "click",
                handleRoomObjectClick
            );

        }
    );

})();