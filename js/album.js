const leftPageContent =
  document.getElementById("left-page-content");

const rightPageContent =
  document.getElementById("right-page-content");

const leftPageNumber =
  document.getElementById("left-page-number");

const rightPageNumber =
  document.getElementById("right-page-number");

const albumProgress =
  document.getElementById("album-progress");

const previousSpreadButton =
  document.getElementById("previous-spread-button");

const nextSpreadButton =
  document.getElementById("next-spread-button");

const book =
  document.getElementById("album-book") ||
  document.querySelector(".book");

const albumNextAdventureButton =
  document.getElementById(
    "album-next-adventure-button"
  );

let currentSpread = 0;

let isTurningPage = false;


const albumSpreads = [

  /* SPREAD 1 */

  {
    left: `
      <p class="page-kicker">
        Chapter one 💌
      </p>

      <h3 class="page-title">
        How it all started
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_01.jpeg"
          alt="Our first picture together"
          class="album-photo"
        >
      </div>

      <div class="caption-chip pink-chip">
        Our very first picture together,
        clicked by our friend in our first week
        of being us 🥹💗
      </div>
    `,

    right: `
      <p class="page-kicker">
        The beginning ✨
      </p>

      <h3 class="page-title">
        Our first outing
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_02.jpeg"
          alt="Our first outing together"
          class="album-photo"
        >
      </div>

      <div class="caption-chip yellow-chip">
        Dressed up, awkward talks, cute glances —
        and the day I first kissed your cheek 😚🌸
      </div>
    `
  },


  /* SPREAD 2 */

  {
    left: `
      <p class="page-kicker">
        Allen days 📚
      </p>

      <h3 class="page-title">
        Cute and unforgettable
      </h3>

      <div class="two-photo-grid">

        <div class="photo-card">
          <img
            src="images/album_03.jpeg"
            alt="Allen memory one"
            class="album-photo"
          >
        </div>

        <div class="photo-card">
          <img
            src="images/album_04.jpeg"
            alt="Allen memory two"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip mint-chip">
        Our last Allen days — cute, a little sexy,
        and very unforgettable 😌💘
      </div>
    `,

    right: `
      <p class="page-kicker">
        Allen days 🫶
      </p>

      <h3 class="page-title">
        My safest place
      </h3>

      <div class="two-photo-grid">

        <div class="photo-card">
          <img
            src="images/album_05.jpeg"
            alt="Allen memory three"
            class="album-photo"
          >
        </div>

        <div class="photo-card">
          <img
            src="images/album_06.jpeg"
            alt="Allen memory four"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip lilac-chip">
        Sweet, close, playful and completely ours 💞
      </div>
    `
  },


  /* SPREAD 3 */

  {
    left: `
      <p class="page-kicker">
        School days 🎀
      </p>

      <h3 class="page-title">
        Where everything began
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_07.jpeg"
          alt="Our last day at school"
          class="album-photo"
        >
      </div>

      <div class="caption-chip yellow-chip">
        Here we first met, first held hands,
        first kissed, and slowly fell for each other
        in our uniforms 🏫💗
      </div>
    `,

    right: `
      <p class="page-kicker">
        Farewell day 🌷
      </p>

      <h3 class="page-title">
        Dressed up together
      </h3>

      <div class="two-photo-grid">

        <div class="photo-card">
          <img
            src="images/album_09.jpeg"
            alt="School farewell picture one"
            class="album-photo"
          >
        </div>

        <div class="photo-card">
          <img
            src="images/album_10.jpeg"
            alt="School farewell picture two"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip pink-chip">
        Matching softness, tiny acts of care,
        and another day I never wanted to end 🌸
      </div>
    `
  },


  /* SPREAD 4 */

  {
    left: `
      <p class="page-kicker">
        One last walk 🥺
      </p>

      <h3 class="page-title">
        The stairs of our school
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_11.jpeg"
          alt="Our final walk down the school stairs"
          class="album-photo"
        >
      </div>

      <div class="caption-chip lilac-chip">
        For two years we held hands during dispersal.
        This was our final walk down those stairs 🤍
      </div>
    `,

    right: `
      <p class="page-kicker">
        First proper date 🍓
      </p>

      <h3 class="page-title">
        Cute clothes and good food
      </h3>

      <div class="two-photo-grid">

        <div class="photo-card">
          <img
            src="images/album_12.jpeg"
            alt="Our first proper date picture one"
            class="album-photo"
          >
        </div>

        <div class="photo-card">
          <img
            src="images/album_13.jpeg"
            alt="Our first proper date picture two"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip mint-chip">
        We dressed up, found a cute café,
        ate good food and took even cuter pictures ☕💗
      </div>
    `
  },


  /* SPREAD 5 */

  {
    left: `
      <p class="page-kicker">
        Pujo together 🪔
      </p>

      <h3 class="page-title">
        Kolkata heat and chaos
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_14.jpeg"
          alt="Our Pujo memory one"
          class="album-photo"
        >
      </div>

      <div class="caption-chip yellow-chip">
        Old Kolkata, endless crowds,
        too much sweating and wholesome memories 😭💛
      </div>
    `,

    right: `
      <p class="page-kicker">
        Pujo together 💫
      </p>

      <h3 class="page-title">
        Crowded but worth it
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_15.jpeg"
          alt="Our Pujo memory two"
          class="album-photo"
        >
      </div>

      <div class="caption-chip lilac-chip">
        Even inside the loudest crowd,
        being beside you still felt familiar 🥰
      </div>
    `
  },


  /* SPREAD 6 */

  {
    left: `
      <p class="page-kicker">
        Little date selfies 📸
      </p>

      <h3 class="page-title">
        Us, in every version
      </h3>

      <div class="top-wide-bottom-two">

        <div class="photo-card wide-top-card">
          <img
            src="images/album_16.jpeg"
            alt="Date selfie one"
            class="album-photo"
          >
        </div>

        <div class="bottom-two">

          <div class="photo-card">
            <img
              src="images/album_17.jpeg"
              alt="Date selfie two"
              class="album-photo"
            >
          </div>

          <div class="photo-card">
            <img
              src="images/album_18.jpeg"
              alt="Date selfie three"
              class="album-photo"
            >
          </div>

        </div>

      </div>

      <div class="caption-chip pink-chip">
        Different dates and outfits,
        but always our same two happy faces 😚💞
      </div>
    `,

    right: `
      <p class="page-kicker">
        A page for me 🌸
      </p>

      <h3 class="page-title">
        Little me moment
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_20.jpeg"
          alt="A cute picture of me"
          class="album-photo"
        >
      </div>

      <div class="caption-chip yellow-chip">
        A tiny page for the girl
        who loves you way too much 🥹💖🌼
      </div>
    `
  },


  /* SPREAD 7 */

  {
    left: `
      <p class="page-kicker">
        Tiny us 🧸
      </p>

      <h3 class="page-title">
        Baby page one
      </h3>

      <div class="stacked-landscape-grid">

        <div class="photo-card landscape-card">
          <img
            src="images/album_19.jpeg"
            alt="Baby picture one"
            class="album-photo"
          >
        </div>

        <div class="photo-card landscape-card">
          <img
            src="images/album_28.jpeg"
            alt="Baby picture two"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip mint-chip">
        Baby me energy on one page 😚🧁
      </div>
    `,

    right: `
      <p class="page-kicker">
        Tiny us 🍼
      </p>

      <h3 class="page-title">
        Baby page two
      </h3>

      <div class="stacked-landscape-grid">

        <div class="photo-card landscape-card">
          <img
            src="images/album_29.jpeg"
            alt="Baby picture on top"
            class="album-photo"
          >
        </div>

        <div class="photo-card landscape-card">
          <img
            src="images/album_31.jpeg"
            alt="Baby picture below"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip lilac-chip">
        Baby you was already serving
        attitude and cuteness 😌🕶️✨
      </div>
    `
  },


  /* SPREAD 8 */

  {
    left: `
      <p class="page-kicker">
        My handsome boy 💘
      </p>

      <h3 class="page-title">
        Favourite picture one
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_08.jpeg"
          alt="Favourite pink kurta picture"
          class="album-photo"
        >
      </div>

      <div class="caption-chip pink-chip">
        The pink kurta picture — your adorable
        downward smile, perfect hair and maximum
        pretty-boy energy 😭💗
      </div>
    `,

    right: `
      <p class="page-kicker">
        My handsome boy ✨
      </p>

      <h3 class="page-title">
        Favourite picture two
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_33.jpeg"
          alt="Favourite purple shirt picture"
          class="album-photo"
        >
      </div>

      <div class="caption-chip yellow-chip">
        One soft favourite and one super favourite.
        You are too pretty and it is a problem 😤💜
      </div>
    `
  },


  /* SPREAD 9 */

  {
    left: `
      <p class="page-kicker">
        Summer 2026 🌼
      </p>

      <h3 class="page-title">
        One of our last summer dates
      </h3>

      <div class="two-photo-grid">

        <div class="photo-card">
          <img
            src="images/album_21.jpeg"
            alt="Summer date picture one"
            class="album-photo"
          >
        </div>

        <div class="photo-card">
          <img
            src="images/album_22.jpeg"
            alt="Summer date picture two"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip mint-chip">
        Good food, hands across the table
        and a day I wanted to keep forever 🍽️💞
      </div>
    `,

    right: `
      <p class="page-kicker">
        Little details 🌷
      </p>

      <h3 class="page-title">
        The tiny things I loved
      </h3>

      <div class="two-photo-grid">

        <div class="photo-card">
          <img
            src="images/album_23.jpeg"
            alt="Summer detail one"
            class="album-photo"
          >
        </div>

        <div class="photo-card">
          <img
            src="images/album_24.jpeg"
            alt="Summer detail two"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip lilac-chip">
        Peace signs, funny reflections
        and all the tiny things that made it ours ✌️🪞💗
      </div>
    `
  },


  /* SPREAD 10 */

  {
    left: `
      <p class="page-kicker">
        Long distance 📱
      </p>

      <h3 class="page-title">
        Our video-call gallery
      </h3>

      <div class="single-photo photo-card">
        <img
          src="images/album_25.jpeg"
          alt="You laughing during our video call"
          class="album-photo"
        >
      </div>

      <div class="caption-chip pink-chip">
        You laughing like this
        automatically fixes my mood 😭💖
      </div>
    `,

    right: `
      <p class="page-kicker">
        Video-call memories 🌙
      </p>

      <h3 class="page-title">
        Sleepy and hot as usual
      </h3>

      <div class="two-photo-grid">

        <div class="photo-card">
          <img
            src="images/album_26.jpeg"
            alt="You sleeping during our video call"
            class="album-photo"
          >
        </div>

        <div class="photo-card">
          <img
            src="images/album_27.jpeg"
            alt="You flexing during our video call"
            class="album-photo"
          >
        </div>

      </div>

      <div class="caption-chip yellow-chip">
        Peaceful sleepy baby on one side,
        hot flexing menace on the other 😴🔥
      </div>
    `
  },


  /* SPREAD 11 — FINAL MESSAGE */

  {
    left: `
      <p class="page-kicker">
        The end… for now 💌
      </p>

      <h3 class="page-title">
        One album ends
      </h3>

      <div class="album-ending-decoration">
        <span>🌸</span>
        <span>💗</span>
        <span>✨</span>
        <span>🎀</span>
      </div>

      <div class="album-ending-note pink-chip">
        This is the end of this little album,
        but definitely not the end of our story 🥹💗
      </div>

      <div class="album-ending-hearts">
        ♡ ♡ ♡
      </div>
    `,

    right: `
      <p class="page-kicker">
        To be continued… 🌷
      </p>

      <h3 class="page-title">
        Many more pages await us
      </h3>

      <div class="album-ending-decoration">
        <span>📸</span>
        <span>💞</span>
        <span>🧸</span>
        <span>🌈</span>
      </div>

      <div class="album-ending-note yellow-chip">
        This may be the end of the album for now,
        but many more pages are waiting to be added.
        <br><br>
        There are still so many dates to go on,
        memories to make, pictures to take,
        and beautiful new chapters to fill together.
        <br><br>
        I cannot wait to add every new page with you 💗
      </div>

      <div class="album-ending-signature">
        To many more chapters of us ✨
      </div>
    `
  }

];


/* ==================================================== */
/* RENDER CURRENT SPREAD                                */
/* ==================================================== */

function renderAlbumSpread() {

  const spread =
    albumSpreads[currentSpread];

  leftPageContent.innerHTML =
    spread.left;

  rightPageContent.innerHTML =
    spread.right;

  leftPageNumber.textContent =
    currentSpread * 2 + 1;

  rightPageNumber.textContent =
    currentSpread * 2 + 2;

  albumProgress.textContent =
    `Spread ${currentSpread + 1} of ${albumSpreads.length}`;

  previousSpreadButton.disabled =
    currentSpread === 0
    || isTurningPage;

  nextSpreadButton.disabled =
    currentSpread
    === albumSpreads.length - 1
    || isTurningPage;

  if (albumNextAdventureButton) {

    albumNextAdventureButton.classList.toggle(
      "hidden",
      currentSpread
      !== albumSpreads.length - 1
    );

  }

}


/* ==================================================== */
/* OPEN ALBUM                                           */
/* ==================================================== */

window.openAlbum =
  function () {

    currentSpread = 0;

    isTurningPage = false;

    if (book) {

      book.classList.remove(
        "turning",
        "turn-next",
        "turn-prev"
      );

    }

    renderAlbumSpread();

  };


/* ==================================================== */
/* PAGE-TURN ANIMATION                                  */
/* ==================================================== */

function animateAlbumTurn(
  direction,
  callback
) {

  if (isTurningPage) {
    return;
  }

  isTurningPage = true;

  previousSpreadButton.disabled = true;

  nextSpreadButton.disabled = true;

  if (!book) {

    callback();

    isTurningPage = false;

    renderAlbumSpread();

    return;

  }

  book.classList.remove(
    "turning",
    "turn-next",
    "turn-prev"
  );

  void book.offsetWidth;

  if (direction === "next") {

    book.classList.add(
      "turn-next"
    );

  } else {

    book.classList.add(
      "turn-prev"
    );

  }

  setTimeout(
    function () {

      callback();

      renderAlbumSpread();

    },
    280
  );

  setTimeout(
    function () {

      book.classList.remove(
        "turn-next",
        "turn-prev"
      );

      isTurningPage = false;

      renderAlbumSpread();

    },
    760
  );

}


/* ==================================================== */
/* PREVIOUS BUTTON                                      */
/* ==================================================== */

previousSpreadButton.addEventListener(
  "click",

  function () {

    if (
      currentSpread <= 0
      || isTurningPage
    ) {
      return;
    }

    animateAlbumTurn(
      "previous",

      function () {

        currentSpread--;

      }
    );

  }
);


/* ==================================================== */
/* NEXT BUTTON                                          */
/* ==================================================== */

nextSpreadButton.addEventListener(
  "click",

  function () {

    if (
      currentSpread
      >= albumSpreads.length - 1
      || isTurningPage
    ) {
      return;
    }

    animateAlbumTurn(
      "next",

      function () {

        currentSpread++;

      }
    );

  }
);


/* ==================================================== */
/* KEYBOARD CONTROLS                                    */
/* ==================================================== */

document.addEventListener(
  "keydown",

  function (event) {

    const albumScreen =
      document.getElementById(
        "album-screen"
      );

    if (
      albumScreen.classList.contains(
        "hidden"
      )
    ) {
      return;
    }

    if (
      event.key === "ArrowRight"
      && currentSpread
      < albumSpreads.length - 1
      && !isTurningPage
    ) {

      animateAlbumTurn(
        "next",

        function () {

          currentSpread++;

        }
      );

    }

    if (
      event.key === "ArrowLeft"
      && currentSpread > 0
      && !isTurningPage
    ) {

      animateAlbumTurn(
        "previous",

        function () {

          currentSpread--;

        }
      );

    }

  }
);


/* ==================================================== */
/* CONTINUE TO LEVEL 1                                  */
/* ==================================================== */

if (albumNextAdventureButton) {

  albumNextAdventureButton.addEventListener(
    "click",

    function () {

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

      const boyfriendTestScreen =
        document.getElementById(
          "boyfriend-test-screen"
        );

      boyfriendTestScreen.classList.remove(
        "hidden"
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
  );

}


/* ==================================================== */
/* INITIAL RENDER                                       */
/* ==================================================== */

renderAlbumSpread();