//let clickSound;
let bgMusic;

let gameState = "disclaimer";

let screen4ChoicePage;

let legend1;
let legend2;
let currentLegend = 1;

let disclaimer;
let startVideo;
let choose;
let dark;
let screen1;
let darkText;
let screen1Pages = [];
let currentScreen1Page = 0;

let screen1ButtonX = 750;
let screen1ButtonY = 550;
let screen1ButtonSize = 45;

let screen12ButtonX = 570;
let screen12ButtonY = 230;
let screen12ButtonWidth = 50;
let screen12ButtonHeight = 30
let screen12;

let screen2;
let screen2Pages = [];
let currentScreen2Page = 0;

let screen2ButtonX = 750;
let screen2ButtonY = 550;
let screen2ButtonSize = 45;

let screen2TextPages = [];
let currentScreen2TextPage = 0;
let screen2TextActive = false;

// LEWY przycisk
let screen2TextButtonX = 220;
let screen2TextButtonY = 420;
let screen2TextButtonWidth = 50;
let screen2TextButtonHeight = 30;

// PRAWY przycisk
let screen3ButtonX = 490;
let screen3ButtonY = 310;
let screen3ButtonWidth = 50;
let screen3ButtonHeight = 30;

let screen3;

let screen3Pages = [];
let currentScreen3Page = 0;

let screen3NextButtonX = 750;
let screen3NextButtonY = 550;
let screen3NextButtonSize = 45;

// Pierwszy biały przycisk
let screen3TextButtonX = 140;
let screen3TextButtonY = 330;
let screen3TextButtonWidth = 50;
let screen3TextButtonHeight = 30;

// Drugi biały przycisk
let screen3ChoiceButtonX = 420;
let screen3ChoiceButtonY = 170;
let screen3ChoiceButtonWidth = 50;
let screen3ChoiceButtonHeight = 30;

// 3.4–3.6
let screen3TextPages = [];
let currentScreen3TextPage = 0;
let screen3TextActive = false;

// 3.7–3.9
let screen3ChoicePages = [];
let currentScreen3ChoicePage = 0;
let screen3ChoiceActive = false;

// Wybór gracza
let playerChoice = null;

// TAK / NIE
let yesButtonX = 270;
let yesButtonY = 560;
let yesButtonWidth = 80;
let yesButtonHeight = 30;

let noButtonX = 530;
let noButtonY = 560;
let noButtonWidth = 80;
let noButtonHeight = 30;

// ====================
// SCREEN 4
// ====================

let screen4;

let screen4Pages = [];
let currentScreen4Page = 0;

// Główny przycisk / strzałka
let screen4NextButtonX = 750;
let screen4NextButtonY = 550;
let screen4NextButtonSize = 45;

// Lewy biały przycisk
let screen4TextButtonX = 135;
let screen4TextButtonY = 415;
let screen4TextButtonWidth = 50;
let screen4TextButtonHeight = 30;

// Prawy biały przycisk
let screen4ChoiceButtonX = 435;
let screen4ChoiceButtonY = 230;
let screen4ChoiceButtonWidth = 50;
let screen4ChoiceButtonHeight = 30;

// 4.4 → 4.5
let screen4TextPages = [];
let currentScreen4TextPage = 0;
let screen4TextActive = false;

// Odpowiedź gracza
let screen4Choice = null;

// 4.6 + TAK / NIE
let screen4ChoiceActive = false;

let screen4YesButtonX = 253;
let screen4YesButtonY = 558;
let screen4YesButtonWidth = 80;
let screen4YesButtonHeight = 30;

let screen4NoButtonX = 545;
let screen4NoButtonY = 555;
let screen4NoButtonWidth = 80;
let screen4NoButtonHeight = 30;

// ====================
// SCREEN 5
// ====================

let screen5;

let screen5Pages = [];
let currentScreen5Page = 0;

let screen5NextButtonX = 750;
let screen5NextButtonY = 550;
let screen5NextButtonSize = 45;

// Przycisk odkrywający zakończenie
let endingButtonX = 400;
let endingButtonY = 530;
let endingButtonWidth = 220;
let endingButtonHeight = 60;

let endingActive = false;

let unicornImage;
let showUnicorn = false;

// ====================
// PNG ZAKOŃCZEŃ
// ====================

let ending1Pages = [];
let ending2Pages = [];
let ending3Pages = [];

let currentEndingPage = 0;

let congratulations;
let endingPopup = false;

let endingStartButtonX = 400;
let endingStartButtonY = 370
let endingStartButtonWidth = 170;
let endingStartButtonHeight = 50;

let darkFade = 255;
let fadingToScreen1 = false;

let leftPopup;
let rightPopup;

let showLeftPopup = false;
let showRightPopup = false;

let leftPopupAlpha = 0;
let rightPopupAlpha = 0;

let leftPopupFadingIn = false;
let leftPopupFadingOut = false;

let rightPopupFadingIn = false;
let rightPopupFadingOut = false;

// ====================
// STAŁE PRZYCISKI
// ====================

let leftButtonX = 330;
let leftButtonY = 35;
let buttonSize = 40;

let rightButtonX = 475;
let rightButtonY = 35;

// ====================
// PRZYCISK DISCLAIMER
// ====================

let disclaimerButtonX = 618;
let disclaimerButtonY = 178;
let disclaimerButtonSize = 40;
let disclaimerButtonAlpha = 255;

// ====================
// PRZYCISK START
// ====================

let startButtonX = 580;
let startButtonY = 412;
let startButtonWidth = 160;
let startButtonHeight = 50;

// ====================
// PRZYCISK KSIĄŻKI
// ====================

let bookButtonX = 580;
let bookButtonY = 485;
let bookButtonWidth = 160;
let bookButtonHeight = 50;

// ====================
// PRZYCISK POWROTU Z KSIĄŻKI
// ====================

let bookBackButtonX = 755;
let bookBackButtonY = 45;
let bookBackButtonSize = 40;

// ====================
// KSIĄŻKA
// ====================

let bookBackground;

let bookPages = [];
let currentBookPage = 0;

// Rozmiar całej otwartej książki
let bookX = 100;
let bookY = 75;
let bookWidth = 600;
let bookHeight = 450;

let pageWidth = 300;

// Animacja przewracania
let pageTurning = false;
let pageTurnProgress = 0;
let pageTurnDirection = 1;

// 1 = do przodu
// -1 = do tyłu

let lock1;
let lock2;
let lock3;
let lock4;

let locks = [];
let currentLock = 0;

// ====================
// STRZAŁKI
// ====================

let arrowY = 300;
let arrowWidth = 30;
let arrowHeight = 15;

let leftArrowX = 260;
let rightArrowX = 540;

let enterKey;

// ====================
// PRZYCISK ENTER KEY
// ====================

let enterButtonX = 400;
let enterButtonY = 477;
let enterButtonWidth = 150;
let enterButtonHeight = 50;

let passwordInput;
let correctPassword = "1234";

// ====================
// PRZYCISK POTWIERDZENIA
// ====================

let confirmButtonX = 400;
let confirmButtonY = 400;
let confirmButtonSize = 50;

// ====================
// PRZYCISK NA DARK
// ====================

let darkButtonX = 150;
let darkButtonY = 110;
let darkButtonWidth = 65;
let darkButtonHeight = 90;

// ====================
// PRZYCISK POWROTU Z RIGHT
// ====================

let rightBackButtonX = 330;
let rightBackButtonY = 365;
let rightBackButtonWidth = 100;
let rightBackButtonHeight = 50;

function preload() {
  
  //clickSound = new Audio("Click.mp3");
  
  disclaimer = loadImage("Disclaimer.jpg");
  choose = loadImage("Choose.jpg");

  lock1 = loadImage("Lock1.png");
  lock2 = loadImage("Lock2.png");
  lock3 = loadImage("Lock3.png");
  lock4 = loadImage("Lock4.png");
  
  locks = [lock1, lock2, lock3, lock4];
  
enterKey = loadImage("Enter_key.jpg");

dark = loadImage("Dark.jpg");
darkText = loadImage("1.0.png");
  
screen1 = loadImage("1.jpg");
  screen1Pages = [
  loadImage("1.1.png"),
  loadImage("1.2.png"),
  loadImage("1.3.png"),
  loadImage("1.4.png"),
  loadImage("1.5.png")
];

  screen2 = loadImage("Screen2.jpg");

  screen2Pages = [
  loadImage("2.1.png"),
  loadImage("2.2.png"),
  loadImage("2.3.png")
];

  screen2TextPages = [
  loadImage("2.4.png"),
  loadImage("2.5.png"),
  loadImage("2.6.png")
];

screen3 = loadImage("Screen3.jpg");
  screen3Pages = [
  loadImage("3.1.png"),
  loadImage("3.2.png"),
  loadImage("3.3.png")
];

screen3TextPages = [
  loadImage("3.4.png"),
  loadImage("3.5.png"),
  loadImage("3.6.png")
];

screen3ChoicePages = [
  loadImage("3.7.png"),
  loadImage("3.8.png"),
  loadImage("3.9.png")
];

  screen4 = loadImage("Screen4.jpg");

screen4Pages = [
  loadImage("4.1.png"),
  loadImage("4.2.png"),
  loadImage("4.3.png")
];

screen4TextPages = [
  loadImage("4.4.png"),
  loadImage("4.5.png")
];

screen4ChoicePage = loadImage("4.6.png");

  screen5 = loadImage("Screen5.jpg");

screen5Pages = [
  loadImage("5.1.png"),
  loadImage("5.2.png")
];

unicornImage = loadImage("Unicorn.jpg");
  
  ending1Pages = [
  loadImage("8.1.png"),
  loadImage("8.2.png"),
  loadImage("8.3.png"),
  loadImage("8.4.png")
];

ending2Pages = [
  loadImage("7.1.png"),
  loadImage("7.2.png"),
  loadImage("7.3.png")
];

ending3Pages = [
  loadImage("6.1.png"),
  loadImage("6.2.png"),
  loadImage("6.3.png")
];

congratulations = loadImage("Congratulations.jpg");
  
  leftPopup = loadImage("Left.jpg");
rightPopup = loadImage("Right.jpg");

  bookBackground = loadImage("Book.jpg");

  bookPages = [
  loadImage("Page0.png"),
  loadImage("Page1.jpg"),
  loadImage("Page2.jpg"),
  loadImage("Page3.jpg"),
  loadImage("Page4.jpg"),
  loadImage("Page5.jpg"),
  loadImage("Page6.jpg"),
  loadImage("Page7.jpg"),
  loadImage("Page8.jpg"),
  loadImage("Page9.jpg"),
  loadImage("Page10.jpg"),
  loadImage("Page11.jpg"),
  loadImage("Page12.jpg"),
  loadImage("Page13.jpg"),
  loadImage("Page14.jpg"),
  loadImage("Page15.jpg"),
  loadImage("Page16.jpg"),
  loadImage("Page17.jpg"),
  loadImage("Page18.jpg"),
  loadImage("Page19.jpg"),
  loadImage("Page20.jpg"),
  loadImage("Page21.jpg")
];
}

function setup() {
  //createCanvas(800, 600);

  bgMusic = new Audio("bg_music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.5;

  let canvas = createCanvas(800, 600);

canvas.style("position", "absolute");
canvas.style("left", "50%");
canvas.style("top", "50%");
canvas.style("transform", "translate(-50%, -50%)");

resizeGame();

  startVideo = createVideo("Start.mp4");
  startVideo.hide();
  startVideo.elt.playsInline = true;
  startVideo.elt.loop = false;

  legend1 = createVideo("Legend1.mp4");
  legend2 = createVideo("Legend2.mp4");

legend1.hide();
legend2.hide();

legend1.elt.playsInline = true;
legend2.elt.playsInline = true;

  //bgMusic.play().catch(() => {});

  // Pole hasła
  passwordInput = createInput();
  passwordInput.attribute("type", "password");
  passwordInput.attribute("autocomplete", "off");

  // Styl pola
  passwordInput.style("background", "transparent");
passwordInput.style("border", "none");
passwordInput.style("outline", "none");
passwordInput.style("color", "#737A7B");
passwordInput.style("font-size", "24px");
passwordInput.style("text-align", "center");
passwordInput.style("z-index", "1000");

passwordInput.position(265, 285);
passwordInput.size(250, 40);
passwordInput.hide();

  resizePasswordInput();
  
}

function draw() {
  background(0);

  if (gameState === "disclaimer") {
    drawDisclaimer();
  }

  if (gameState === "start") {
    drawStart();
  }

  if (gameState === "choose") {
    drawChoose();
  }

  if (gameState === "enterKey") {
    drawEnterKey();
  }

  if (gameState === "legends") {
  drawLegends();
}

  if (gameState === "dark") {
  drawDark();
}

  if (gameState === "screen1") {
  drawScreen1();
}

  if (gameState === "book") {
  drawBook();
}

  if (gameState === "screen2") {
  drawScreen2();
}

  if (gameState === "screen3") {
  drawScreen3();
}

  if (gameState === "screen4") {
  drawScreen4();
}

  if (gameState === "screen5") {
  drawScreen5();
}

    if (
  gameState !== "disclaimer" &&
  gameState !== "start" &&
  gameState !== "choose" &&
  gameState !== "enterKey" &&
  gameState !== "dark" &&
  gameState !== "legends" &&
  gameState !== "book"
) {
  drawPermanentButtons();
}

  if (showLeftPopup) {
    drawLeftPopup();
  }

  if (showRightPopup) {
    drawRightPopup();
  }
  if (showUnicorn) {
  image(unicornImage, 0, 0, 800, 600);
}
}

// ====================
// DISCLAIMER
// ====================

function drawDisclaimer() {
  image(disclaimer, 0, 0, 800, 600);

  noStroke();
noFill();

  circle(
    disclaimerButtonX,
    disclaimerButtonY,
    disclaimerButtonSize
  );
}

// ====================
// START SCREEN
// ====================

function drawStart() {

  image(startVideo, 0, 0, 800, 600);

  noStroke();
  noFill();

  // START
  rect(
    startButtonX - startButtonWidth / 2,
    startButtonY - startButtonHeight / 2,
    startButtonWidth,
    startButtonHeight
  );

  // KSIĄŻKA
  rect(
    bookButtonX - bookButtonWidth / 2,
    bookButtonY - bookButtonHeight / 2,
    bookButtonWidth,
    bookButtonHeight
  );
}

// ====================
// CHOOSE SCREEN
// ====================

function drawChoose() {
  image(choose, 0, 0, 800, 600);

          let img = locks[currentLock];

  // Zachowanie oryginalnych proporcji

  let lockHeight = 300;

  let lockWidth = img.width * (lockHeight / img.height);

  // Wyśrodkowanie obrazka

  let lockX = (800 - lockWidth) / 2;

  let lockY = (600 - lockHeight) / 2;

  image(img, lockX, lockY, lockWidth, lockHeight);

 // Lewa strzałka
noStroke();
noFill();

triangle(
  leftArrowX - arrowWidth / 2,
  arrowY,
  leftArrowX + arrowWidth / 2,
  arrowY - arrowHeight,
  leftArrowX + arrowWidth / 2,
  arrowY + arrowHeight
);

// Prawa strzałka
triangle(
  rightArrowX + arrowWidth / 2,
  arrowY,
  rightArrowX - arrowWidth / 2,
  arrowY - arrowHeight,
  rightArrowX - arrowWidth / 2,
  arrowY + arrowHeight
);

  // Przycisk pojawia się tylko przy Lock1
if (currentLock === 0) {

  noStroke();
  noFill();

  rect(
    enterButtonX - enterButtonWidth / 2,
    enterButtonY - enterButtonHeight / 2,
    enterButtonWidth,
    enterButtonHeight
  );
}
}

// ====================
// MYSZKA
// ====================

function mousePressed() {

  if (bgMusic.paused) {
    bgMusic.play();
  }

  checkButton(mouseX, mouseY);
}


// ====================
// DOTYK
// ====================

function touchStarted() {

  if (bgMusic.paused) {
    bgMusic.play();
  }

  checkButton(mouseX, mouseY);

  return false;
}




// ====================
// SPRAWDZANIE PRZYCISKÓW
// ====================
function checkButton(x, y) {

  // =========================
  // UNICORN.JPG
  // =========================

  if (showUnicorn) {
    showUnicorn = false;
    return;
  }

  // =========================
  // STARTOWANIE MUZYKI
  // =========================

  if (bgMusic.paused) {
    bgMusic.play();
  }

   if (showLeftPopup || showRightPopup) {

  if (showLeftPopup) {
    leftPopupFadingOut = true;
    leftPopupFadingIn = false;
  }

  if (showRightPopup) {
    rightPopupFadingOut = true;
    rightPopupFadingIn = false;
  }

  return;
}

  // =========================
  // DISCLAIMER → START
  // =========================

  if (gameState === "disclaimer") {

    let distance = dist(
      x,
      y,
      disclaimerButtonX,
      disclaimerButtonY
    );

    if (distance < disclaimerButtonSize / 2) {

      gameState = "start";
      startVideo.play();

    }

    return;
  }

  // =========================
  // START
  // =========================

  if (gameState === "start") {

    // START

    let insideStartButton =
      x > startButtonX - startButtonWidth / 2 &&
      x < startButtonX + startButtonWidth / 2 &&
      y > startButtonY - startButtonHeight / 2 &&
      y < startButtonY + startButtonHeight / 2;

    if (insideStartButton) {

      playClick();

      gameState = "choose";

      return;
    }

    // BOOK

    let insideBookButton =
      x > bookButtonX - bookButtonWidth / 2 &&
      x < bookButtonX + bookButtonWidth / 2 &&
      y > bookButtonY - bookButtonHeight / 2 &&
      y < bookButtonY + bookButtonHeight / 2;

    if (insideBookButton) {

      playClick();

      gameState = "book";

      currentBookPage = 0;
      pageTurning = false;
      pageTurnProgress = 0;

      return;
    }

    return;
  }

  // =========================
  // BOOK → START
  // =========================

  if (gameState === "book") {

    let distance = dist(
      x,
      y,
      bookBackButtonX,
      bookBackButtonY
    );

    if (
      distance < bookBackButtonSize / 2 &&
      !pageTurning
    ) {

      playClick();

      gameState = "start";

      return;
    }

    if (!pageTurning) {

      // PRAWA STRONA → DALEJ

      if (
        x >= bookX + pageWidth &&
        x <= bookX + pageWidth * 2 &&
        y >= bookY &&
        y <= bookY + bookHeight
      ) {

        if (currentBookPage + 3 < bookPages.length) {

          playClick();

          pageTurning = true;
          pageTurnDirection = 1;
          pageTurnProgress = 0;

        }

        return;
      }

      // LEWA STRONA → WSTECZ

      if (
        x >= bookX &&
        x < bookX + pageWidth &&
        y >= bookY &&
        y <= bookY + bookHeight
      ) {

        if (currentBookPage >= 2) {

          playClick();

          pageTurning = true;
          pageTurnDirection = -1;
          pageTurnProgress = 0;

        }

        return;
      }
    }

    return;
  }

  // =========================
  // CHOOSE
  // =========================

  if (gameState === "choose") {

    // LEWA STRZAŁKA

    let leftArrowDistance = dist(
      x,
      y,
      leftArrowX,
      arrowY
    );

    if (leftArrowDistance < 30) {

      if (currentLock > 0) {

        playClick();

        currentLock--;

      }

      return;
    }

    // PRAWA STRZAŁKA

    let rightArrowDistance = dist(
      x,
      y,
      rightArrowX,
      arrowY
    );

    if (rightArrowDistance < 30) {

      if (currentLock < locks.length - 1) {

        playClick();

        currentLock++;

      }

      return;
    }

    // ENTER — tylko przy Lock1

    if (currentLock === 0) {

      let insideEnterButton =
        x > enterButtonX - enterButtonWidth / 2 &&
        x < enterButtonX + enterButtonWidth / 2 &&
        y > enterButtonY - enterButtonHeight / 2 &&
        y < enterButtonY + enterButtonHeight / 2;

      if (insideEnterButton) {

  playClick();

  gameState = "enterKey";

  passwordInput.show();

  return;
}    }

    return;
  }

  // =========================
  // ENTER KEY
  // =========================

  if (gameState === "enterKey") {

    let insideConfirmButton =
      dist(
        x,
        y,
        confirmButtonX,
        confirmButtonY
      ) < confirmButtonSize / 2;

    if (insideConfirmButton) {

      playClick();

      if (passwordInput.value() === correctPassword) {

  passwordInput.hide();

  currentLegend = 1;

  darkFade = 255;
  fadingToScreen1 = false;

  gameState = "legends";

  legend1.play();

} else {

        passwordInput.value("");

      }

      return;
    }

    return;
  }

   // =========================
  // STAŁE PRZYCISKI
  // =========================

  if (
    gameState !== "disclaimer" &&
    gameState !== "start" &&
    gameState !== "choose" &&
    gameState !== "enterKey" &&
    gameState !== "dark" &&
    gameState !== "legends" &&
    gameState !== "book"
  ) {

    // LEWY PRZYCISK

    let leftDistance = dist(
      x,
      y,
      leftButtonX,
      leftButtonY
    );

    if (
      leftDistance < buttonSize / 2 &&
      leftPopupAlpha <= 0
    ) {

      playClick();

      showLeftPopup = true;
      leftPopupFadingIn = true;
      leftPopupFadingOut = false;

      return;
    }

    // PRAWY PRZYCISK

    let rightDistance = dist(
      x,
      y,
      rightButtonX,
      rightButtonY
    );

    if (
      rightDistance < buttonSize / 2 &&
      rightPopupAlpha <= 0
    ) {

      playClick();

      showRightPopup = true;
      rightPopupFadingIn = true;
      rightPopupFadingOut = false;

      return;
    }
  }

  // =========================
  // DARK → SCREEN 1
  // =========================

  if (gameState === "dark") {

    let distance = dist(
      x,
      y,
      darkButtonX,
      darkButtonY
    );

    if (
      distance <
      darkButtonWidth / 2
    ) {

      playClick();

      fadingToScreen1 = true;

    }

    return;
  }

  // =========================
  // SCREEN 1
  // =========================

  if (gameState === "screen1") {

    // STRZAŁKA

    let distance = dist(
      x,
      y,
      screen1ButtonX,
      screen1ButtonY
    );

    if (
      distance < screen1ButtonSize / 2 &&
      currentScreen1Page < screen1Pages.length - 1
    ) {

      playClick();

      currentScreen1Page++;

      return;
    }

    // → SCREEN 2

    let insideScreen12Button =
      x > screen12ButtonX - screen12ButtonWidth / 2 &&
      x < screen12ButtonX + screen12ButtonWidth / 2 &&
      y > screen12ButtonY - screen12ButtonHeight / 2 &&
      y < screen12ButtonY + screen12ButtonHeight / 2;

    if (insideScreen12Button) {

      playClick();

      gameState = "screen2";

      return;
    }

    return;
  }

  // =========================
  // SCREEN 2
  // =========================

  if (gameState === "screen2") {

    // STRZAŁKA

    let distance = dist(
      x,
      y,
      screen2ButtonX,
      screen2ButtonY
    );

    if (distance < screen2ButtonSize / 2) {

      if (!screen2TextActive) {

        if (
          currentScreen2Page <
          screen2Pages.length - 1
        ) {

          playClick();

          currentScreen2Page++;

        }

      } else {

        if (
          currentScreen2TextPage <
          screen2TextPages.length - 1
        ) {

          playClick();

          currentScreen2TextPage++;

        }
      }

      return;
    }

    // LEWY BIAŁY PRZYCISK

    let insideScreen2TextButton =
      x > screen2TextButtonX - screen2TextButtonWidth / 2 &&
      x < screen2TextButtonX + screen2TextButtonWidth / 2 &&
      y > screen2TextButtonY - screen2TextButtonHeight / 2 &&
      y < screen2TextButtonY + screen2TextButtonHeight / 2;

    if (insideScreen2TextButton) {

      playClick();

      screen2TextActive = true;
      currentScreen2TextPage = 0;

      return;
    }

    // → SCREEN 3

    let insideScreen3Button =
      x > screen3ButtonX - screen3ButtonWidth / 2 &&
      x < screen3ButtonX + screen3ButtonWidth / 2 &&
      y > screen3ButtonY - screen3ButtonHeight / 2 &&
      y < screen3ButtonY + screen3ButtonHeight / 2;

    if (
      insideScreen3Button &&
      screen2TextActive &&
      currentScreen2TextPage ===
      screen2TextPages.length - 1
    ) {

      playClick();

      gameState = "screen3";

      return;
    }

    return;
  }

// =========================
// SCREEN 3
// =========================
if (gameState === "screen3") {

  // LEFT — otwiera tekst 3.4–3.6
  if (
    x > screen3TextButtonX - screen3TextButtonWidth / 2 &&
    x < screen3TextButtonX + screen3TextButtonWidth / 2 &&
    y > screen3TextButtonY - screen3TextButtonHeight / 2 &&
    y < screen3TextButtonY + screen3TextButtonHeight / 2
  ) {
    screen3TextActive = true;
    currentScreen3TextPage = 0;
    return;
  }

  // RIGHT — otwiera tekst 3.7–3.9
  if (
    x > screen3ChoiceButtonX - screen3ChoiceButtonWidth / 2 &&
    x < screen3ChoiceButtonX + screen3ChoiceButtonWidth / 2 &&
    y > screen3ChoiceButtonY - screen3ChoiceButtonHeight / 2 &&
    y < screen3ChoiceButtonY + screen3ChoiceButtonHeight / 2
  ) {
    screen3ChoiceActive = true;
    currentScreen3ChoicePage = 0;
    return;
  }

  // =========================
  // TAK
  // =========================
  if (
    x > yesButtonX - yesButtonWidth / 2 &&
    x < yesButtonX + yesButtonWidth / 2 &&
    y > yesButtonY - yesButtonHeight / 2 &&
    y < yesButtonY + yesButtonHeight / 2
  ) {
    playerChoice = "yes";
    screen3ChoiceActive = false;
    gameState = "screen4";
    currentScreen4Page = 0;
    return;
  }

  // =========================
  // NIE
  // =========================
  if (
    x > noButtonX - noButtonWidth / 2 &&
    x < noButtonX + noButtonWidth / 2 &&
    y > noButtonY - noButtonHeight / 2 &&
    y < noButtonY + noButtonHeight / 2
  ) {
    playerChoice = "no";
    screen3ChoiceActive = false;
    gameState = "screen4";
    currentScreen4Page = 0;
    return;
  }

  // =========================
  // TEKST 3.4–3.6
  // =========================
  if (screen3TextActive) {
    if (currentScreen3TextPage < screen3TextPages.length - 1) {
      currentScreen3TextPage++;
    } else {
      screen3TextActive = false;
    }
    return;
  }

  // =========================
  // TEKST 3.7–3.9
  // =========================
  if (screen3ChoiceActive) {
    if (currentScreen3ChoicePage < screen3ChoicePages.length - 1) {
      currentScreen3ChoicePage++;
    } else {
      screen3ChoiceActive = false;
    }
    return;
  }

  // =========================
  // GŁÓWNA STRZAŁKA
  // =========================
  if (
    dist(x, y, screen2ButtonX, screen2ButtonY) <
    screen2ButtonSize / 2 + 15
  ) {
    if (currentScreen3Page < screen3Pages.length - 1) {
      currentScreen3Page++;
    }
    return;
  }
}

  // =========================
  // SCREEN 4
  // =========================

  if (gameState === "screen4") {

    // STRZAŁKA

    let distance = dist(
      x,
      y,
      screen4NextButtonX,
      screen4NextButtonY
    );

    if (distance < screen4NextButtonSize / 2) {

      if (!screen4TextActive) {

        if (
          currentScreen4Page <
          screen4Pages.length - 1
        ) {

          playClick();
          currentScreen4Page++;

        }

      } else if (!screen4ChoiceActive) {

        if (
          currentScreen4TextPage <
          screen4TextPages.length - 1
        ) {

          playClick();
          currentScreen4TextPage++;

        }
      }

      return;
    }

    // 4.4

    let insideScreen4TextButton =
      x > screen4TextButtonX - screen4TextButtonWidth / 2 &&
      x < screen4TextButtonX + screen4TextButtonWidth / 2 &&
      y > screen4TextButtonY - screen4TextButtonHeight / 2 &&
      y < screen4TextButtonY + screen4TextButtonHeight / 2;

    if (insideScreen4TextButton) {

      playClick();

      screen4TextActive = true;
      currentScreen4TextPage = 0;

      return;
    }

    // 4.6

    let insideScreen4ChoiceButton =
      x > screen4ChoiceButtonX - screen4ChoiceButtonWidth / 2 &&
      x < screen4ChoiceButtonX + screen4ChoiceButtonWidth / 2 &&
      y > screen4ChoiceButtonY - screen4ChoiceButtonHeight / 2 &&
      y < screen4ChoiceButtonY + screen4ChoiceButtonHeight / 2;

    if (
      insideScreen4ChoiceButton &&
      screen4TextActive &&
      currentScreen4TextPage ===
      screen4TextPages.length - 1
    ) {

      playClick();

      screen4ChoiceActive = true;

      return;
    }

    // TAK

    let insideScreen4YesButton =
      x > screen4YesButtonX - screen4YesButtonWidth / 2 &&
      x < screen4YesButtonX + screen4YesButtonWidth / 2 &&
      y > screen4YesButtonY - screen4YesButtonHeight / 2 &&
      y < screen4YesButtonY + screen4YesButtonHeight / 2;

    if (
      insideScreen4YesButton &&
      screen4ChoiceActive
    ) {

      playClick();

      screen4Choice = "yes";
      gameState = "screen5";

      return;
    }

    // NIE

    let insideScreen4NoButton =
      x > screen4NoButtonX - screen4NoButtonWidth / 2 &&
      x < screen4NoButtonX + screen4NoButtonWidth / 2 &&
      y > screen4NoButtonY - screen4NoButtonHeight / 2 &&
      y < screen4NoButtonY + screen4NoButtonHeight / 2;

    if (
      insideScreen4NoButton &&
      screen4ChoiceActive
    ) {

      playClick();

      screen4Choice = "no";
      gameState = "screen5";

      return;
    }

    return;
  }

  // =========================
  // SCREEN 5
  // =========================
if (gameState === "screen5") {

  // =========================
  // POPUP ZAKOŃCZENIA
  // =========================

  if (endingPopup) {

    // START
    let insideStartButton =
      x > endingStartButtonX - endingStartButtonWidth / 2 &&
      x < endingStartButtonX + endingStartButtonWidth / 2 &&
      y > endingStartButtonY - endingStartButtonHeight / 2 &&
      y < endingStartButtonY + endingStartButtonHeight / 2;

    if (insideStartButton) {
      playClick();

      endingPopup = false;
      endingActive = false;

      currentEndingPage = 0;
      currentScreen5Page = 0;

      playerChoice = null;
      screen4Choice = null;

      gameState = "start";

      return;
    }

    // kliknięcie gdziekolwiek indziej zamyka popup
    endingPopup = false;
    return;
  }

  // =========================
  // STRZAŁKA ZAKOŃCZENIA
  // =========================

  if (endingActive) {

    let distance = dist(
      x,
      y,
      screen5NextButtonX,
      screen5NextButtonY
    );

    let currentEndingPages;

    if (
      playerChoice === "yes" &&
      screen4Choice === "no"
    ) {
      currentEndingPages = ending1Pages;

    } else if (
      playerChoice === "no" &&
      screen4Choice === "no"
    ) {
      currentEndingPages = ending2Pages;

    } else {
      currentEndingPages = ending3Pages;
    }

   if (distance < screen5NextButtonSize / 2) {

  if (
    currentEndingPage <
    currentEndingPages.length - 1
  ) {
    playClick();
    currentEndingPage++;
  }

  else {
  playClick();

  if (
    (playerChoice === "yes" && screen4Choice === "no") ||
    (playerChoice === "no" && screen4Choice === "no")
  ) {
    showUnicorn = true;
  } else {
    endingPopup = true;
  }
}

  return;
}

    return;
  }

  // =========================
  // PRZYCISK DO ZAKOŃCZENIA
  // =========================

  if (
    currentScreen5Page ===
    screen5Pages.length - 1
  ) {

    let insideEndingButton =
      x > endingButtonX - endingButtonWidth / 2 &&
      x < endingButtonX + endingButtonWidth / 2 &&
      y > endingButtonY - endingButtonHeight / 2 &&
      y < endingButtonY + endingButtonHeight / 2;

    if (insideEndingButton) {

      playClick();

      endingActive = true;
      endingPopup = false;
      currentEndingPage = 0;

      return;
    }
  }

  // =========================
  // ZWYKŁA STRZAŁKA SCREEN 5
  // =========================

  let distance = dist(
    x,
    y,
    screen5NextButtonX,
    screen5NextButtonY
  );

  if (
    distance < screen5NextButtonSize / 2
  ) {

    if (
      currentScreen5Page <
      screen5Pages.length - 1
    ) {
      playClick();
      currentScreen5Page++;
    }

    return;
  }
}
}

function drawEnterKey() {
  image(enterKey, 0, 0, 800, 600);

  noStroke();
  noFill();

  circle(
    confirmButtonX,
    confirmButtonY,
    confirmButtonSize
  );

  passwordInput.show();
}

function playClick() {
  // dźwięk wyłączony
}

function drawDark() {

  // Tło pod spodem
  image(screen1, 0, 0, 800, 600);

  // Dark.jpg
  tint(255, darkFade);
  image(dark, 0, 0, 800, 600);

  // Tekst nad Dark, ale pod przyciskami
  image(darkText, 0, 0, 800, 600);

  noTint();

  // ====================
  // PRZYCISK
  // ====================

  if (!fadingToScreen1) {

    noFill();
    noStroke();

    ellipse(
      darkButtonX,
      darkButtonY,
      darkButtonWidth,
      darkButtonHeight
    );
  }

  // ====================
  // FADE
  // ====================

  if (fadingToScreen1) {

    darkFade -= 2;

    if (darkFade <= 0) {

      darkFade = 0;
      fadingToScreen1 = false;
      gameState = "screen1";
    }
  }
}

 
function drawScreen1() {

  // Tło
  image(screen1, 0, 0, 800, 600);

  // Aktualny tekst / PNG
  if (screen1Pages[currentScreen1Page]) {
    image(
      screen1Pages[currentScreen1Page],
      0,
      0,
      800,
      600
    );
  }

 // Okrągły przycisk
noStroke();
noFill();
circle(
  screen1ButtonX,
  screen1ButtonY,
  screen1ButtonSize
);

  // Biały owalny przycisk
noStroke();
noFill();
ellipse(
  screen12ButtonX,
  screen12ButtonY,
  screen12ButtonWidth,
  screen12ButtonHeight
);
}

function drawScreen2() {

  // Tło
  image(screen2, 0, 0, 800, 600);

  // Główny tekst 2.1 → 2.3
  if (!screen2TextActive) {

    if (screen2Pages[currentScreen2Page]) {
      image(
        screen2Pages[currentScreen2Page],
        0,
        0,
        800,
        600
      );
    }

  } else {

    // Dodatkowy tekst 2.4 → 2.6
    if (screen2TextPages[currentScreen2TextPage]) {
      image(
        screen2TextPages[currentScreen2TextPage],
        0,
        0,
        800,
        600
      );
    }
  }

  // Przezroczysty przycisk przewijania
  noFill();
  noStroke();

  circle(
    screen2ButtonX,
    screen2ButtonY,
    screen2ButtonSize
  );

  // Biały przycisk uruchamiający tekst 2.4
  noStroke();
  noFill();

  ellipse(
    screen2TextButtonX,
    screen2TextButtonY,
    screen2TextButtonWidth,
    screen2TextButtonHeight
  );

  // Biały przycisk przejścia do Screen3
  ellipse(
    screen3ButtonX,
    screen3ButtonY,
    screen3ButtonWidth,
    screen3ButtonHeight
  );
}

function drawScreen3() {
  image(screen3, 0, 0, 800, 600);

  // 3.1–3.3
  if (!screen3TextActive && !screen3ChoiceActive) {
    if (screen3Pages[currentScreen3Page]) {
      image(screen3Pages[currentScreen3Page], 0, 0, 800, 600);
    }
  }

  // 3.4–3.6
  if (screen3TextActive && !screen3ChoiceActive) {
    if (screen3TextPages[currentScreen3TextPage]) {
      image(screen3TextPages[currentScreen3TextPage], 0, 0, 800, 600);
    }
  }

  // 3.7–3.9
  if (screen3ChoiceActive) {
    if (screen3ChoicePages[currentScreen3ChoicePage]) {
      image(screen3ChoicePages[currentScreen3ChoicePage], 0, 0, 800, 600);
    }

    // TAK / NIE pojawiają się dopiero na 3.9
    if (currentScreen3ChoicePage === screen3ChoicePages.length - 1) {

      noStroke();
      noFill();

      rect(
        yesButtonX - yesButtonWidth / 2,
        yesButtonY - yesButtonHeight / 2,
        yesButtonWidth,
        yesButtonHeight
      );

      rect(
        noButtonX - noButtonWidth / 2,
        noButtonY - noButtonHeight / 2,
        noButtonWidth,
        noButtonHeight
      );
    }
  }

  // istniejąca strzałka
  noFill();
  noStroke();

  circle(
    screen2ButtonX,
    screen2ButtonY,
    screen2ButtonSize
  );

  // pierwszy biały przycisk
  noFill();

  ellipse(
    screen3TextButtonX,
    screen3TextButtonY,
    screen3TextButtonWidth,
    screen3TextButtonHeight
  );

  // drugi biały przycisk
  ellipse(
    screen3ChoiceButtonX,
    screen3ChoiceButtonY,
    screen3ChoiceButtonWidth,
    screen3ChoiceButtonHeight
  );
}

function drawScreen4() {
  image(screen4, 0, 0, 800, 600);

  // 4.1 → 4.3
  if (!screen4TextActive && !screen4ChoiceActive) {
    if (screen4Pages[currentScreen4Page]) {
      image(
        screen4Pages[currentScreen4Page],
        0,
        0,
        800,
        600
      );
    }
  }

  // 4.4 → 4.5
  if (screen4TextActive && !screen4ChoiceActive) {
    if (screen4TextPages[currentScreen4TextPage]) {
      image(
        screen4TextPages[currentScreen4TextPage],
        0,
        0,
        800,
        600
      );
    }
  }

  // 4.6
  if (screen4ChoiceActive) {
    image(
      screen4ChoicePage,
      0,
      0,
      800,
      600
    );

    // TAK / NIE pojawiają się na 4.6
    noStroke();
    noFill();

    rect(
      screen4YesButtonX - screen4YesButtonWidth / 2,
      screen4YesButtonY - screen4YesButtonHeight / 2,
      screen4YesButtonWidth,
      screen4YesButtonHeight
    );

    rect(
      screen4NoButtonX - screen4NoButtonWidth / 2,
      screen4NoButtonY - screen4NoButtonHeight / 2,
      screen4NoButtonWidth,
      screen4NoButtonHeight
    );
  }

  // Główna strzałka
  noFill();
  noStroke();

  circle(
    screen4NextButtonX,
    screen4NextButtonY,
    screen4NextButtonSize
  );

  // Biały przycisk → 4.4
  noFill();

  ellipse(
    screen4TextButtonX,
    screen4TextButtonY,
    screen4TextButtonWidth,
    screen4TextButtonHeight
  );

  // Biały przycisk → 4.6
  ellipse(
    screen4ChoiceButtonX,
    screen4ChoiceButtonY,
    screen4ChoiceButtonWidth,
    screen4ChoiceButtonHeight
  );
}

function drawScreen5() {
  image(screen5, 0, 0, 800, 600);

  if (!endingActive) {

    if (screen5Pages[currentScreen5Page]) {
      image(screen5Pages[currentScreen5Page], 0, 0, 800, 600);
    }

    noFill();
    noStroke();

    circle(
      screen5NextButtonX,
      screen5NextButtonY,
      screen5NextButtonSize
    );

    if (currentScreen5Page === screen5Pages.length - 1) {

      noFill();
      noStroke();

      rect(
        endingButtonX - endingButtonWidth / 2,
        endingButtonY - endingButtonHeight / 2,
        endingButtonWidth,
        endingButtonHeight
      );
    }

  } else {

    let pages = [];

    if (
      playerChoice === "yes" &&
      screen4Choice === "no"
    ) {
      pages = ending1Pages;

    } else if (
      playerChoice === "no" &&
      screen4Choice === "no"
    ) {
      pages = ending2Pages;

    } else if (
      screen4Choice === "yes"
    ) {
      pages = ending3Pages;
    }

    // PNG zakończenia
    if (pages[currentEndingPage]) {
      image(
        pages[currentEndingPage],
        0,
        0,
        800,
        600
      );
    }

    // STRZAŁKA
    noFill();
    noStroke();

    circle(
      screen5NextButtonX,
      screen5NextButtonY,
      screen5NextButtonSize
    );

    // POPUP
    if (endingPopup) {

      image(
        congratulations,
        0,
        0,
        800,
        600
      );

      // niewidzialny przycisk START
      noFill();
      noStroke();

      rect(
        endingStartButtonX - endingStartButtonWidth / 2,
        endingStartButtonY - endingStartButtonHeight / 2,
        endingStartButtonWidth,
        endingStartButtonHeight
      );
    }
  }
}

  
function drawPermanentButtons() {

  // LEWY
  noFill();
  noStroke();

  circle(
    leftButtonX,
    leftButtonY,
    buttonSize
  );

  // PRAWY
  circle(
    rightButtonX,
    rightButtonY,
    buttonSize
  );
}

function drawLeftPopup() {

  if (leftPopupFadingIn) {
    leftPopupAlpha += 5;

    if (leftPopupAlpha >= 255) {
      leftPopupAlpha = 255;
      leftPopupFadingIn = false;
    }
  }

  if (leftPopupFadingOut) {
    leftPopupAlpha -= 5;

    if (leftPopupAlpha <= 0) {
      leftPopupAlpha = 0;
      leftPopupFadingOut = false;
      showLeftPopup = false;
    }
  }

  tint(255, leftPopupAlpha);
  image(leftPopup, 0, 0, 800, 600);
  noTint();
}

function drawRightPopup() {

  if (rightPopupFadingIn) {
    rightPopupAlpha += 5;

    if (rightPopupAlpha >= 255) {
      rightPopupAlpha = 255;
      rightPopupFadingIn = false;
    }
  }

  if (rightPopupFadingOut) {
    rightPopupAlpha -= 5;

    if (rightPopupAlpha <= 0) {
      rightPopupAlpha = 0;
      rightPopupFadingOut = false;
      showRightPopup = false;
    }
  }

  tint(255, rightPopupAlpha);
  image(rightPopup, 0, 0, 800, 600);
  noTint();

  // Czarny prostokątny przycisk powrotu
if (rightPopupAlpha > 0) {

  noStroke();
  noFill();

  rect(
    rightBackButtonX - rightBackButtonWidth / 2,
    rightBackButtonY - rightBackButtonHeight / 2,
    rightBackButtonWidth,
    rightBackButtonHeight
  );
}
}

// ====================
// KSIĄŻKA
// ====================

function drawBook() {

  image(
    bookBackground,
    0,
    0,
    800,
    600
  );

  // Czarny okrągły przycisk powrotu
noStroke();
noFill();

circle(
  bookBackButtonX,
  bookBackButtonY,
  bookBackButtonSize
);

  if (bookPages.length < 2) {
    return;
  }

  if (pageTurning) {
    drawBookFlip();
  } else {
    drawNormalSpread();
  }
  
}

function drawNormalSpread() {

  let leftPage = bookPages[currentBookPage];
  let rightPage = bookPages[currentBookPage + 1];

  if (!leftPage || !rightPage) {
    return;
  }

  // Cień całej książki
  drawingContext.save();

  drawingContext.shadowColor = "rgba(0, 0, 0, 0.45)";
  drawingContext.shadowBlur = 25;
  drawingContext.shadowOffsetY = 10;

  // LEWA STRONA
  image(
    leftPage,
    bookX,
    bookY,
    pageWidth,
    bookHeight
  );

  // PRAWA STRONA
  image(
    rightPage,
    bookX + pageWidth,
    bookY,
    pageWidth,
    bookHeight
  );

  drawingContext.restore();

  // Delikatny cień przy grzbiecie
  noStroke();

  for (let i = 0; i < 16; i++) {

    let alpha = map(i, 0, 15, 50, 0);

    fill(0, 0, 0, alpha);

    rect(
      bookX + pageWidth - 8 + i,
      bookY,
      1,
      bookHeight
    );
  }
}

// ====================
// NORMALNA KSIĄŻKA
// ====================

function drawBookSpread() {

  let leftPage = bookPages[currentBookPage];
  let rightPage = bookPages[currentBookPage + 1];

  if (!leftPage || !rightPage) {
    return;
  }

  // Cień książki na głównym canvasie
  drawingContext.save();

  drawingContext.shadowColor =
    "rgba(0,0,0,0.45)";

  drawingContext.shadowBlur = 25;
  drawingContext.shadowOffsetY = 10;

  image(
    leftPage,
    bookX,
    bookY,
    pageWidth,
    bookHeight
  );

  image(
    rightPage,
    bookX + pageWidth,
    bookY,
    pageWidth,
    bookHeight
  );

  drawingContext.restore();

  drawSpineShadow();
}

// ====================
// CIEŃ GRZBIETU
// ====================

function drawSpineShadow() {

  noStroke();

  for (let i = 0; i < 16; i++) {

    let alpha =
      map(i, 0, 15, 50, 0);

    fill(0, 0, 0, alpha);

    rect(
      bookX + pageWidth - 8 + i,
      bookY,
      1,
      bookHeight
    );
  }
}

// ====================
// ANIMACJA KSIĄŻKI
// ====================

function drawBookFlip() {

  let t = constrain(pageTurnProgress, 0, 1);

  // płynne przyspieszenie i zwalnianie
  let eased = 0.5 - 0.5 * cos(t * PI);

  // ==================================================
  // PRZEWRACANIE W PRAWO →
  // ==================================================

  if (pageTurnDirection === 1) {

    let oldLeft =
      bookPages[currentBookPage];

    let turningPage =
      bookPages[currentBookPage + 1];

    let backPage =
      bookPages[currentBookPage + 2];

    let newRight =
      bookPages[currentBookPage + 3];

    // LEWA STRONA — nieruchoma
    drawStaticPage(
      oldLeft,
      bookX
    );

    // PRAWA STRONA — nowa strona pod spodem
    drawStaticPage(
      newRight,
      bookX + pageWidth
    );

    // PRZEWRACANA KARTKA
    drawFlippingPage2D(
      turningPage,
      backPage,
      spineXForBook(),
      eased,
      "right"
    );
  }

  // ==================================================
  // PRZEWRACANIE W LEWO ←
  // ==================================================

  else {

    let backPage =
      bookPages[currentBookPage - 1];

    let turningPage =
      bookPages[currentBookPage];

    let newLeft =
      bookPages[currentBookPage - 2];

    let oldRight =
      bookPages[currentBookPage + 1];

    // LEWA STRONA — nowa strona pod spodem
    drawStaticPage(
      newLeft,
      bookX
    );

    // PRAWA STRONA — nieruchoma
    drawStaticPage(
      oldRight,
      bookX + pageWidth
    );

    // PRZEWRACANA KARTKA
    drawFlippingPage2D(
      turningPage,
      backPage,
      spineXForBook(),
      eased,
      "left"
    );
  }

  // ==================================================
  // POSTĘP
  // ==================================================

  pageTurnProgress += 0.018;

  if (pageTurnProgress >= 1) {

    pageTurnProgress = 1;
    pageTurning = false;

    if (pageTurnDirection === 1) {

      currentBookPage += 2;

    } else {

      currentBookPage -= 2;
    }
  }
}

function spineXForBook() {
  return bookX + pageWidth;
}

// ====================
// NIERUCHOMA STRONA
// ====================

function drawStaticPage(img, x) {

  if (!img) return;

  image(
    img,
    x,
    bookY,
    pageWidth,
    bookHeight
  );
}

// ====================
// PRZEWRACANA KARTKA 2D
// ====================

function drawFlippingPage2D(
  frontImg,
  backImg,
  spineX,
  progress,
  direction
) {

  if (!frontImg || !backImg) {
    return;
  }

  // ==================================================
  // PRAWA KARTKA →
  // ==================================================

  if (direction === "right") {

    // ------------------------------------------
    // PIERWSZA POŁOWA
    // Page 1 zamyka się w kierunku grzbietu
    // ------------------------------------------

    if (progress < 0.5) {

      let p = progress * 2;

      let smooth =
        0.5 - 0.5 * cos(p * PI);

      let width =
        pageWidth * (1 - smooth);

      drawingContext.save();

      drawingContext.shadowColor =
        "rgba(0,0,0,0.30)";

      drawingContext.shadowBlur = 12;

      image(
        frontImg,
        spineX,
        bookY,
        width,
        bookHeight
      );

      drawingContext.restore();
    }

    // ------------------------------------------
    // DRUGA POŁOWA
    // Page 2 otwiera się po lewej
    // ------------------------------------------

    else {

      let p =
        (progress - 0.5) * 2;

      let smooth =
        0.5 - 0.5 * cos(p * PI);

      let width =
        pageWidth * smooth;

      let x =
        spineX - width;

      drawingContext.save();

      drawingContext.shadowColor =
        "rgba(0,0,0,0.30)";

      drawingContext.shadowBlur = 12;

      image(
        backImg,
        x,
        bookY,
        width,
        bookHeight
      );

      drawingContext.restore();
    }
  }

  // ==================================================
  // LEWA KARTKA ←
  // ==================================================

  else {

    // ------------------------------------------
    // PIERWSZA POŁOWA
    // Page 2 zamyka się w kierunku grzbietu
    // ------------------------------------------

    if (progress < 0.5) {

      let p =
        progress * 2;

      let smooth =
        0.5 - 0.5 * cos(p * PI);

      let width =
        pageWidth * (1 - smooth);

      let x =
        spineX - width;

      drawingContext.save();

      drawingContext.shadowColor =
        "rgba(0,0,0,0.30)";

      drawingContext.shadowBlur = 12;

      image(
        frontImg,
        x,
        bookY,
        width,
        bookHeight
      );

      drawingContext.restore();
    }

    // ------------------------------------------
    // DRUGA POŁOWA
    // Page 1 otwiera się po prawej
    // ------------------------------------------

    else {

      let p =
        (progress - 0.5) * 2;

      let smooth =
        0.5 - 0.5 * cos(p * PI);

      let width =
        pageWidth * smooth;

      drawingContext.save();

      drawingContext.shadowColor =
        "rgba(0,0,0,0.30)";

      drawingContext.shadowBlur = 12;

      image(
        backImg,
        spineX,
        bookY,
        width,
        bookHeight
      );

      drawingContext.restore();
    }
  }

  // ==================================================
  // CIEŃ GRZBIETU
  // ==================================================

  let shadow =
    sin(progress * PI) * 35;

  noStroke();

  fill(
    0,
    0,
    0,
    shadow
  );

  rect(
    spineX - 2,
    bookY,
    4,
    bookHeight
  );
}

function drawLegends() {
  background(0);

  let video = currentLegend === 1 ? legend1 : legend2;

  image(video, 0, 0, 800, 600);

  if (currentLegend === 1 && legend1.elt.ended) {
    currentLegend = 2;
    legend2.play();
  }

  if (currentLegend === 2 && legend2.elt.ended) {
    legend2.stop();
    gameState = "dark";
    
    darkFade = 255;
    fadingToScreen1 = false;
  }
}

function resizeGame() {
  let scale = min(
    windowWidth / 800,
    windowHeight / 600
  );

  let canvas = document.querySelector("canvas");

  canvas.style.width = (800 * scale) + "px";
  canvas.style.height = (600 * scale) + "px";
}

function windowResized() {

  let scale = min(
    windowWidth / 800,
    windowHeight / 600
  );

  let canvas = document.querySelector("canvas");

  canvas.style.width = (800 * scale) + "px";
  canvas.style.height = (600 * scale) + "px";

  resizePasswordInput();
}

function resizePasswordInput() {

  let scale = min(
    windowWidth / 800,
    windowHeight / 600
  );

  let inputX = (windowWidth - 800 * scale) / 2 + 265 * scale;
  let inputY = (windowHeight - 600 * scale) / 2 + 285 * scale;

  passwordInput.position(inputX, inputY);
  passwordInput.size(250 * scale, 40 * scale);

  passwordInput.style("font-size", (24 * scale) + "px");
}
