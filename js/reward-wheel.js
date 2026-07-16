(() => {

    /* ==================================================== */
    /* ELEMENTS                                             */
    /* ==================================================== */

    const rewardWheelScreen =
        document.getElementById("reward-wheel-screen");

    const rewardWheelIntro =
        document.getElementById("reward-wheel-intro");

    const rewardWheelGame =
        document.getElementById("reward-wheel-game");

    const rewardWheelResult =
        document.getElementById("reward-wheel-result");


    const openRewardWheelButton =
        document.getElementById("open-reward-wheel-button");

    const spinRewardWheelButton =
        document.getElementById("spin-reward-wheel-button");

    const spinWheelAgainButton =
        document.getElementById("spin-wheel-again-button");

    const rewardWheelNextButton =
        document.getElementById("reward-wheel-next-button");


    const colourfulRewardWheel =
        document.getElementById("colourful-reward-wheel");

    const wheelStatusMessage =
        document.getElementById("wheel-status-message");

    const rewardResultEmoji =
        document.getElementById("reward-result-emoji");

    const rewardResultTitle =
        document.getElementById("reward-result-title");

    const rewardResultDescription =
        document.getElementById("reward-result-description");


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


    if (
        !rewardWheelScreen ||
        !rewardWheelIntro ||
        !rewardWheelGame ||
        !rewardWheelResult
    ) {
        console.error(
            "Reward wheel HTML elements were not found."
        );

        return;
    }


    /* ==================================================== */
    /* REWARDS                                              */
    /* ==================================================== */

    const anniversaryRewards = [
        {
            emoji: "🫂",
            title: "One Extra-Long Hug",
            description:
                "A warm, tight, no-rushing hug that lasts for as long as you need it."
        },
        {
            emoji: "💋",
            title: "Five Bonus Kisses",
            description:
                "Five officially approved kisses, redeemable together or one at a time."
        },
        {
            emoji: "🌆",
            title: "Choose Our Next Date",
            description:
                "You choose where we go and what we do on one of our upcoming dates."
        },
        {
            emoji: "🍫",
            title: "Favourite Snack Treat",
            description:
                "One favourite snack or small food treat, lovingly provided by your girlfriend."
        },
        {
            emoji: "🎬",
            title: "Movie Night of Your Choice",
            description:
                "You choose the movie, and I promise not to complain about your selection."
        },
        {
            emoji: "🎵",
            title: "A Song Dedicated to You",
            description:
                "I will sing or record one special song chosen especially for you."
        },
        {
            emoji: "✨",
            title: "One Little Wish Granted",
            description:
                "One reasonable little wish approved under official anniversary rules."
        },
        {
            emoji: "🎁",
            title: "A Tiny Surprise Gift",
            description:
                "A cute little surprise chosen especially for you and delivered later."
        }
    ];


    /* ==================================================== */
    /* STATE                                                */
    /* ==================================================== */

    let rewardWheelSpinning = false;

    let currentWheelRotation = 0;

    let selectedRewardIndex = null;

    let spinFinishTimer = null;

    let resultTimer = null;


    /* ==================================================== */
    /* HELPERS                                              */
    /* ==================================================== */

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


    function hideRewardWheelCards() {
        hideElement(rewardWheelIntro);
        hideElement(rewardWheelGame);
        hideElement(rewardWheelResult);
    }


    function hideAllWebsiteScreens() {
        const allScreens =
            document.querySelectorAll(".screen");

        allScreens.forEach((screen) => {
            screen.classList.add("hidden");
        });
    }


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function clearWheelTimers() {
        if (spinFinishTimer) {
            clearTimeout(spinFinishTimer);
            spinFinishTimer = null;
        }

        if (resultTimer) {
            clearTimeout(resultTimer);
            resultTimer = null;
        }
    }


    /* ==================================================== */
    /* MAIN MENU                                            */
    /* ==================================================== */

    function returnToMenu() {
        clearWheelTimers();

        rewardWheelSpinning = false;

        hideAllWebsiteScreens();

        const menuScreen =
            document.getElementById("menu-screen");

        showElement(menuScreen);

        scrollToTop();
    }


    /* ==================================================== */
    /* SHOW INTRO                                           */
    /* ==================================================== */

    function showRewardWheelIntro() {
        hideRewardWheelCards();

        showElement(rewardWheelIntro);

        scrollToTop();
    }


    /* ==================================================== */
    /* OPEN REWARD WHEEL FROM OTHER SECTIONS                */
    /* ==================================================== */

    function openRewardWheel() {
        hideAllWebsiteScreens();

        showElement(rewardWheelScreen);

        showRewardWheelIntro();
    }


    /* ==================================================== */
    /* OPEN WHEEL GAME                                      */
    /* ==================================================== */

    function openWheelGame() {
        clearWheelTimers();

        hideRewardWheelCards();

        showElement(rewardWheelGame);

        rewardWheelSpinning = false;
        selectedRewardIndex = null;
        currentWheelRotation = 0;


        if (colourfulRewardWheel) {
            colourfulRewardWheel.style.transition =
                "none";

            colourfulRewardWheel.style.transform =
                "rotate(0deg)";
        }


        if (spinRewardWheelButton) {
            spinRewardWheelButton.disabled = false;

            spinRewardWheelButton.textContent =
                "Spin my reward! 🎡";
        }


        if (wheelStatusMessage) {
            wheelStatusMessage.textContent =
                "The wheel is waiting for you 👀";

            wheelStatusMessage.className =
                "wheel-status-message";
        }


        scrollToTop();
    }


    /* ==================================================== */
    /* SPIN WHEEL                                           */
    /* ==================================================== */

    function spinRewardWheel() {
        if (
            rewardWheelSpinning ||
            !colourfulRewardWheel
        ) {
            return;
        }


        rewardWheelSpinning = true;


        if (spinRewardWheelButton) {
            spinRewardWheelButton.disabled = true;

            spinRewardWheelButton.textContent =
                "Spinning… 🎡";
        }


        if (wheelStatusMessage) {
            wheelStatusMessage.textContent =
                "Round and round it goes… no girlfriend interference allowed ✨";

            wheelStatusMessage.className =
                "wheel-status-message spinning-message";
        }


        selectedRewardIndex =
            Math.floor(
                Math.random() *
                anniversaryRewards.length
            );


        const segmentAngle =
            360 / anniversaryRewards.length;

        const selectedSegmentAngle =
            selectedRewardIndex * segmentAngle;

        const randomOffset =
            Math.random() * 20 - 10;

        const fullSpins =
            6 + Math.floor(Math.random() * 3);


        currentWheelRotation =
            fullSpins * 360 -
            selectedSegmentAngle -
            randomOffset;


        colourfulRewardWheel.style.transition =
            "transform 5.5s cubic-bezier(0.12, 0.72, 0.12, 1)";

        colourfulRewardWheel.style.transform =
            `rotate(${currentWheelRotation}deg)`;


        spinFinishTimer =
            setTimeout(
                finishRewardWheelSpin,
                5750
            );
    }


    /* ==================================================== */
    /* FINISH SPIN                                          */
    /* ==================================================== */

    function finishRewardWheelSpin() {
        rewardWheelSpinning = false;


        if (
            selectedRewardIndex === null ||
            !anniversaryRewards[selectedRewardIndex]
        ) {
            return;
        }


        const selectedReward =
            anniversaryRewards[selectedRewardIndex];


        if (wheelStatusMessage) {
            wheelStatusMessage.textContent =
                `${selectedReward.emoji} The wheel has made its official decision!`;

            wheelStatusMessage.className =
                "wheel-status-message";
        }


        localStorage.setItem(
            "anniversaryWheelReward",
            JSON.stringify(selectedReward)
        );


        resultTimer =
            setTimeout(() => {
                showRewardResult(selectedReward);
            }, 700);
    }


    /* ==================================================== */
    /* RESULT                                               */
    /* ==================================================== */

    function showRewardResult(reward) {
        hideRewardWheelCards();


        if (rewardResultEmoji) {
            rewardResultEmoji.textContent =
                reward.emoji;
        }


        if (rewardResultTitle) {
            rewardResultTitle.textContent =
                reward.title;
        }


        if (rewardResultDescription) {
            rewardResultDescription.textContent =
                reward.description;
        }


        showElement(rewardWheelResult);

        scrollToTop();
    }


    /* ==================================================== */
    /* WATCH WHEEL AGAIN                                    */
    /* ==================================================== */

    function watchWheelAgain() {
        hideRewardWheelCards();

        showElement(rewardWheelGame);


        const savedRewardText =
            localStorage.getItem(
                "anniversaryWheelReward"
            );


        if (savedRewardText) {
            if (spinRewardWheelButton) {
                spinRewardWheelButton.disabled = true;

                spinRewardWheelButton.textContent =
                    "Official spin completed 💗";
            }


            if (wheelStatusMessage) {
                wheelStatusMessage.textContent =
                    "Your official reward has already been selected ✨";

                wheelStatusMessage.className =
                    "wheel-status-message";
            }
        } else {
            if (spinRewardWheelButton) {
                spinRewardWheelButton.disabled = false;

                spinRewardWheelButton.textContent =
                    "Spin my reward! 🎡";
            }
        }


        scrollToTop();
    }


    /* ==================================================== */
    /* CONTINUE TO ESCAPE ROOM                             */
    /* ==================================================== */

    function continueToEscapeRoom() {
        if (
            typeof window.openEscapeRoom ===
            "function"
        ) {
            window.openEscapeRoom();
            return;
        }


        hideAllWebsiteScreens();

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


        showElement(escapeRoomScreen);
        showElement(escapeRoomIntro);

        hideElement(escapeRoomGame);
        hideElement(escapeRoomFinish);
        hideElement(finalSurprise);

        scrollToTop();
    }


    /* ==================================================== */
    /* EVENT LISTENERS                                      */
    /* ==================================================== */

    if (openRewardWheelButton) {
        openRewardWheelButton.addEventListener(
            "click",
            openWheelGame
        );
    }


    if (spinRewardWheelButton) {
        spinRewardWheelButton.addEventListener(
            "click",
            spinRewardWheel
        );
    }


    if (spinWheelAgainButton) {
        spinWheelAgainButton.addEventListener(
            "click",
            watchWheelAgain
        );
    }


    if (rewardWheelNextButton) {
        rewardWheelNextButton.addEventListener(
            "click",
            continueToEscapeRoom
        );
    }


    if (rewardWheelIntroMenuButton) {
        rewardWheelIntroMenuButton.addEventListener(
            "click",
            returnToMenu
        );
    }


    if (rewardWheelGameMenuButton) {
        rewardWheelGameMenuButton.addEventListener(
            "click",
            returnToMenu
        );
    }


    if (rewardWheelResultMenuButton) {
        rewardWheelResultMenuButton.addEventListener(
            "click",
            returnToMenu
        );
    }


    /* ==================================================== */
    /* PUBLIC FUNCTION                                      */
    /* ==================================================== */

    window.openRewardWheel =
        openRewardWheel;


    /* ==================================================== */
    /* INITIAL STATE                                        */
    /* ==================================================== */

    showRewardWheelIntro();

})();
