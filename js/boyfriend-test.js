/* ==================================================== */
/* ELEMENTS                                             */
/* ==================================================== */

const boyfriendTestScreen =
    document.getElementById(
        "boyfriend-test-screen"
    );

const boyfriendTestButton =
    document.getElementById(
        "boyfriend-test-button"
    );

const quizIntro =
    document.getElementById(
        "quiz-intro"
    );

const quizQuestionCard =
    document.getElementById(
        "quiz-question-card"
    );

const quizFinish =
    document.getElementById(
        "quiz-finish"
    );

const startBoyfriendTestButton =
    document.getElementById(
        "start-boyfriend-test-button"
    );

const quizIntroMenuButton =
    document.getElementById(
        "quiz-intro-menu-button"
    );

const quizFinishMenuButton =
    document.getElementById(
        "quiz-finish-menu-button"
    );

const quizNextLevelButton =
    document.getElementById(
        "quiz-next-level-button"
    );

const replayQuizButton =
    document.getElementById(
        "replay-quiz-button"
    );

const quizQuestionProgress =
    document.getElementById(
        "quiz-question-progress"
    );

const quizQuestionNumber =
    document.getElementById(
        "quiz-question-number"
    );

const quizQuestionText =
    document.getElementById(
        "quiz-question-text"
    );

const quizOptions =
    document.getElementById(
        "quiz-options"
    );

const quizFeedback =
    document.getElementById(
        "quiz-feedback"
    );

const quizLives =
    document.getElementById(
        "quiz-lives"
    );

const quizProgressFill =
    document.getElementById(
        "quiz-progress-fill"
    );

const quizFinishTitle =
    document.getElementById(
        "quiz-finish-title"
    );

const quizFinishMessage =
    document.getElementById(
        "quiz-finish-message"
    );


/* ==================================================== */
/* QUESTIONS                                            */
/* ==================================================== */

const boyfriendTestQuestions = [

    {
        question:
            "What is my favourite colour? 🎨",

        options: [
            "Pink",
            "Lavender",
            "Blue",
            "Black"
        ],

        correctAnswer:
            "Pink"
    },

    {
        question:
            "Which café did we go to on our first date? ☕",

        options: [
            "Café De Rois",
            "Blue Mug",
            "Roastery Coffee House",
            "Café Mezzuna"
        ],

        correctAnswer:
            "Café De Rois"
    },

    {
        question:
            "What exactly did I say when I first confessed? 💌",

        options: [
            "I'm so in love.",
            "I think I'm falling in love with you.",
            "I am completely in love with you.",
            "I think I might really love you."
        ],

        correctAnswer:
            "I'm so in love."
    },

    {
        question:
            "Whose class was it after we first kissed? 💋",

        options: [
            "Rakesh Sir",
            "Joyrup Sir",
            "Suvro Sir",
            "Lab"
        ],

        correctAnswer:
            "Rakesh Sir"
    },

    {
        question:
            "What were my Class 10 and Class 12 board percentages? 📚",

        options: [
            "95% and 90%",
            "90% and 95%",
            "95% and 92%",
            "93% and 90%"
        ],

        correctAnswer:
            "95% and 90%"
    },

    {
        question:
            "Which eye-makeup product do I prefer the most? 👀",

        options: [
            "Mascara",
            "Kajal",
            "Eyeliner",
            "Eyeshadow"
        ],

        correctAnswer:
            "Mascara"
    },

    {
        question:
            "What was the first gift I ever gave you? 🎁",

        options: [
            "An origami pink heart",
            "A handwritten letter",
            "A chocolate",
            "A friendship bracelet"
        ],

        correctAnswer:
            "An origami pink heart"
    },

    {
        question:
            "What was the first gift I actually bought for you? 🛍️",

        options: [
            "Perfume",
            "A wallet",
            "A keychain",
            "Chocolate"
        ],

        correctAnswer:
            "Perfume"
    },

    {
        question:
            "What was my bra size then, and what is it now? 🤭",

        options: [
            "32B then, 36C now",
            "32C then, 36B now",
            "34B then, 36C now",
            "32B then, 34C now"
        ],

        correctAnswer:
            "32B then, 36C now"
    },

    {
        question:
            "Where did we hug for the first time? 🫂",

        options: [
            "Behind Durga Bari",
            "Near the school gate",
            "Near the bus stand",
            "Inside the classroom"
        ],

        correctAnswer:
            "Behind Durga Bari"
    },

    {
        question:
            "What colour was my school bag? 🎒",

        options: [
            "Black and blue",
            "Black and pink",
            "Blue and grey",
            "Only black"
        ],

        correctAnswer:
            "Black and blue"
    },

    {
        question:
            "What was my school-bus number? 🚌",

        options: [
            "7",
            "5",
            "9",
            "11"
        ],

        correctAnswer:
            "7"
    }

];


/* ==================================================== */
/* QUIZ STATE                                           */
/* ==================================================== */

let currentQuestionIndex = 0;

let remainingHalfLives = 6;

let attemptsOnCurrentQuestion = 0;

let totalWrongAnswers = 0;

let livesLostMessageShown = false;

let answerButtonsLocked = false;


/* ==================================================== */
/* SOFT FUNNY MESSAGES                                  */
/* ==================================================== */

const firstWrongMessages = [

    "Oopsie, not this one 😭💗 You still have one more try.",

    "Almosttt… think of our old memories 🥹✨",

    "Tiny mistake detected 🤏💖 Take another guess.",

    "Memory loading… please try once more ⏳🌸",

    "Not quite, baby 😌💗 You still get one retry.",

    "Nooo, but that answer was a cute attempt 😭💕"

];

const secondWrongMessages = [

    "That one was extra sneaky 😭 The correct answer was:",

    "This memory escaped for a moment 🥹 The answer was:",

    "Okay, girlfriend answer reveal activated ✨ The answer was:",

    "That question was being dramatic 💗 The correct answer was:"

];

const correctMessages = [

    "Correct! Memory officially approved 💗✨",

    "Yesss, you remembered! 🥹💕",

    "Exactly right, my love 🌸",

    "Correct answer detected! Boyfriend points increased 💘",

    "You got it! My heart is very pleased 😌💗",

    "Perfect! That memory is safely stored 🫶"

];


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


function openBoyfriendTest() {

    hideAllWebsiteScreens();

    boyfriendTestScreen.classList.remove(
        "hidden"
    );

    showQuizIntro();

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

}


/* ==================================================== */
/* INTRO AND RESET                                      */
/* ==================================================== */

function showQuizIntro() {

    quizIntro.classList.remove(
        "hidden"
    );

    quizQuestionCard.classList.add(
        "hidden"
    );

    quizFinish.classList.add(
        "hidden"
    );

}


function resetQuiz() {

    currentQuestionIndex = 0;

    remainingHalfLives = 6;

    attemptsOnCurrentQuestion = 0;

    totalWrongAnswers = 0;

    livesLostMessageShown = false;

    answerButtonsLocked = false;

    quizFeedback.className =
        "quiz-feedback hidden";

    quizFeedback.textContent =
        "";

    updateLivesDisplay();

}


/* ==================================================== */
/* START QUIZ                                           */
/* ==================================================== */

function startQuiz() {

    resetQuiz();

    quizIntro.classList.add(
        "hidden"
    );

    quizFinish.classList.add(
        "hidden"
    );

    quizQuestionCard.classList.remove(
        "hidden"
    );

    renderQuestion();

}


/* ==================================================== */
/* RENDER QUESTION                                      */
/* ==================================================== */

function renderQuestion() {

    answerButtonsLocked = false;

    attemptsOnCurrentQuestion = 0;

    quizFeedback.className =
        "quiz-feedback hidden";

    quizFeedback.textContent =
        "";

    const currentQuestion =
        boyfriendTestQuestions[
            currentQuestionIndex
        ];

    quizQuestionProgress.textContent =
        `${currentQuestionIndex + 1} of ${boyfriendTestQuestions.length}`;

    quizQuestionNumber.textContent =
        `Question ${currentQuestionIndex + 1}`;

    quizQuestionText.textContent =
        currentQuestion.question;

    const progressPercentage =
        (
            currentQuestionIndex
            / boyfriendTestQuestions.length
        ) * 100;

    quizProgressFill.style.width =
        `${progressPercentage}%`;

    quizOptions.innerHTML =
        "";

    const shuffledOptions =
        shuffleArray(
            currentQuestion.options
        );

    shuffledOptions.forEach(
        function (option) {

            const optionButton =
                document.createElement(
                    "button"
                );

            optionButton.type =
                "button";

            optionButton.className =
                "quiz-option-button";

            optionButton.textContent =
                option;

            optionButton.addEventListener(
                "click",

                function () {

                    checkAnswer(
                        option,
                        optionButton
                    );

                }
            );

            quizOptions.appendChild(
                optionButton
            );

        }
    );

    updateLivesDisplay();

}


/* ==================================================== */
/* CHECK ANSWER                                         */
/* ==================================================== */

function checkAnswer(
    selectedAnswer,
    selectedButton
) {

    if (answerButtonsLocked) {
        return;
    }

    const currentQuestion =
        boyfriendTestQuestions[
            currentQuestionIndex
        ];

    if (
        selectedAnswer
        === currentQuestion.correctAnswer
    ) {

        answerButtonsLocked = true;

        selectedButton.classList.add(
            "correct-answer"
        );

        disableAllOptionButtons();

        showFeedback(
            getRandomItem(
                correctMessages
            ),
            "correct-feedback"
        );

        setTimeout(
            moveToNextQuestion,
            1150
        );

        return;

    }


    /* Wrong answer */

    attemptsOnCurrentQuestion++;

    totalWrongAnswers++;

    selectedButton.classList.add(
        "wrong-answer"
    );

    selectedButton.disabled =
        true;

    loseHalfLife();


    /* First wrong attempt */

    if (
        attemptsOnCurrentQuestion === 1
    ) {

        showFeedback(
            getRandomItem(
                firstWrongMessages
            ),
            "cute-warning"
        );

        return;

    }


    /* Second wrong attempt */

    answerButtonsLocked = true;

    disableAllOptionButtons();

    highlightCorrectAnswer(
        currentQuestion.correctAnswer
    );

    showFeedback(
        `${getRandomItem(secondWrongMessages)}
        ${currentQuestion.correctAnswer} 💗`,
        "answer-reveal"
    );

    setTimeout(
        moveToNextQuestion,
        1800
    );

}


/* ==================================================== */
/* LIVES                                                */
/* ==================================================== */

function loseHalfLife() {

    if (
        remainingHalfLives > 0
    ) {

        remainingHalfLives--;

    }

    updateLivesDisplay();


    if (
        remainingHalfLives === 0
        && !livesLostMessageShown
    ) {

        livesLostMessageShown =
            true;

        setTimeout(
            function () {

                showFeedback(
                    "All three hearts have fainted dramatically 😭💗 But the mission continues—love is much bigger than quiz accuracy!",
                    "no-lives-message"
                );

            },
            350
        );

    }

}


function updateLivesDisplay() {

    let heartsDisplay =
        "";

    const fullHearts =
        Math.floor(
            remainingHalfLives / 2
        );

    const hasHalfHeart =
        remainingHalfLives % 2 === 1;

    for (
        let heartIndex = 0;
        heartIndex < fullHearts;
        heartIndex++
    ) {

        heartsDisplay +=
            "❤️ ";

    }

    if (hasHalfHeart) {

        heartsDisplay +=
            "💔 ";

    }

    const emptyHeartSlots =
        3
        - fullHearts
        - (hasHalfHeart ? 1 : 0);

    for (
        let emptyIndex = 0;
        emptyIndex < emptyHeartSlots;
        emptyIndex++
    ) {

        heartsDisplay +=
            "🤍 ";

    }

    quizLives.textContent =
        heartsDisplay.trim();

}


/* ==================================================== */
/* FEEDBACK HELPERS                                     */
/* ==================================================== */

function showFeedback(
    message,
    feedbackClass
) {

    quizFeedback.textContent =
        message;

    quizFeedback.className =
        `quiz-feedback ${feedbackClass}`;

}


function disableAllOptionButtons() {

    const optionButtons =
        quizOptions.querySelectorAll(
            ".quiz-option-button"
        );

    optionButtons.forEach(
        function (button) {

            button.disabled =
                true;

        }
    );

}


function highlightCorrectAnswer(
    correctAnswer
) {

    const optionButtons =
        quizOptions.querySelectorAll(
            ".quiz-option-button"
        );

    optionButtons.forEach(
        function (button) {

            if (
                button.textContent
                === correctAnswer
            ) {

                button.classList.add(
                    "correct-answer"
                );

            }

        }
    );

}


/* ==================================================== */
/* NEXT QUESTION                                        */
/* ==================================================== */

function moveToNextQuestion() {

    currentQuestionIndex++;

    if (
        currentQuestionIndex
        >= boyfriendTestQuestions.length
    ) {

        finishQuiz();

        return;

    }

    renderQuestion();

}


/* ==================================================== */
/* FINISH                                               */
/* ==================================================== */

function finishQuiz() {

    quizQuestionCard.classList.add(
        "hidden"
    );

    quizFinish.classList.remove(
        "hidden"
    );

    quizProgressFill.style.width =
        "100%";

    localStorage.setItem(
        "relationshipKey1Unlocked",
        "true"
    );


    if (
        remainingHalfLives > 0
    ) {

        quizFinishTitle.textContent =
            "Certified boyfriend unlocked! 💘";

        quizFinishMessage.textContent =
            "You survived my very serious relationship investigation and remembered so many tiny details. I am extremely impressed—and slightly smug that you know me this well 🥹💗";

    } else {

        quizFinishTitle.textContent =
            "Mission completed with dramatic hearts! 💗";

        quizFinishMessage.textContent =
            "The hearts may have fainted along the way, but you reached the end like a brave little boyfriend. You are still my favourite person, so the key is completely yours 😭✨";

    }

}


/* ==================================================== */
/* RANDOM HELPERS                                       */
/* ==================================================== */

function getRandomItem(array) {

    const randomIndex =
        Math.floor(
            Math.random()
            * array.length
        );

    return array[
        randomIndex
    ];

}


function shuffleArray(array) {

    const copiedArray =
        [...array];

    for (
        let currentIndex =
            copiedArray.length - 1;

        currentIndex > 0;

        currentIndex--
    ) {

        const randomIndex =
            Math.floor(
                Math.random()
                * (currentIndex + 1)
            );

        const temporaryValue =
            copiedArray[currentIndex];

        copiedArray[currentIndex] =
            copiedArray[randomIndex];

        copiedArray[randomIndex] =
            temporaryValue;

    }

    return copiedArray;

}


/* ==================================================== */
/* CONTINUE TO LEVEL 2                                  */
/* ==================================================== */

function continueToLevelTwo() {

    hideAllWebsiteScreens();

    const catchHeartScreen =
        document.getElementById(
            "catch-heart-screen"
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

    catchHeartScreen.classList.remove(
        "hidden"
    );

    heartGameIntro.classList.remove(
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


/* ==================================================== */
/* EVENT LISTENERS                                      */
/* ==================================================== */

boyfriendTestButton.addEventListener(
    "click",
    openBoyfriendTest
);


startBoyfriendTestButton.addEventListener(
    "click",
    startQuiz
);


quizIntroMenuButton.addEventListener(
    "click",
    returnToMainMenu
);


quizFinishMenuButton.addEventListener(
    "click",
    returnToMainMenu
);


quizNextLevelButton.addEventListener(
    "click",
    continueToLevelTwo
);


replayQuizButton.addEventListener(
    "click",
    startQuiz
);