//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const hintContainer = document.getElementById("hint-container")

let options = {
  science: [
    { word: "Gravity", hint: "The force that attracts objects toward each other" },
    { word: "Force", hint: "A push or pull exerted on an object" },
    { word: "Planet", hint: "A celestial body that orbits around a star" },
    { word: "Velocity", hint: "The rate at which an object changes its position" },
    { word: "Pressure", hint: "The amount of force applied to an area" },
    { word: "Projectile", hint: "An object thrown into the air with an initial velocity that generally has a curved path" },
    { word: "Acid", hint: "A substance with a pH less than 7" },
    { word: "Water", hint: "A colorless and odorless liquid" },
    { word: "Atom", hint: "The basic unit of a chemical element" },
    { word: "Sodium", hint: "A highly reactive metal" },
    { word: "Reaction", hint: "A process that leads to the transformation of one set of chemical substances to another" },
    { word: "Molecule", hint: "A group of atoms bonded together" },
    { word: "Genes", hint: "Units of heredity" },
    { word: "Hybrid", hint: "Offspring of two different species" },
    { word: "Nucleus", hint: "The control center of a cell" },
    { word: "Chlorophyll", hint: "A green pigment found in plants" },
    { word: "Vertebrate", hint: "An animal with a backbone" },
    { word: "Respiration", hint: "The process of inhaling and exhaling" }
  ],
  mathematics: [
    { word: "Integer", hint: "A whole number that can be positive, negative, or zero" },
    { word: "Algebra", hint: "The branch of mathematics that deals with symbols and the rules for manipulating those symbols" },
    { word: "Proportion", hint: "An equation that states that two ratios are equal" },
    { word: "Pythagorean", hint: "A fundamental theorem/relationship in geometry: p^2 + b^2 = h^2 for a right triangle" },
    { word: "Quadratic", hint: "An equation of the form ax^2 + bx + c = 0, where a, b, and c are constants" },
    { word: "Slope", hint: "The measure of the steepness of a line; rise over run" },
    { word: "Coordinate", hint: "A plane formed by the intersection of a horizontal number line (x-axis) and a vertical number line (y-axis)" },
    { word: "Exponential", hint: "A function in the form f(x) = a^x, where a is a constant greater than 0" },
    { word: "Radical", hint: "The root symbol (√) used to indicate the square root or other roots of a number" },
    { word: "Ratio", hint: "A comparison between two or more quantities" },
    { word: "Circle", hint: "A shape that has a equidistant center from all its circumference" },
    { word: "Linear", hint: "An equation of the form y = mx + b, where m represents the slope and b represents the y-intercept" },
    { word: "Volume", hint: "The amount of space occupied by a three-dimensional object" },
    { word: "Probability", hint: "The likelihood of an event occurring, usually expressed as a number between 0 and 1" },
    { word: "Statistics", hint: "The branch of mathematics that deals with the collection, analysis, interpretation, and presentation of data" },
    { word: "Circumference", hint: "The distance around the edge of a circle" },
    { word: "Percent", hint: "A fraction expressed as a part of 100; per one hundred" },
    { word: "Arithmetic", hint: "A sequence of numbers in which the difference between consecutive terms is constant" },
    { word: "Surface", hint: "The total area of the outer surfaces of a three-dimensional object" }
  ],

  technology: [
    { word: "Internet", hint: "A global network of interconnected computers and devices" },
    { word: "Robotics", hint: "The design, construction, and programming of robots to perform various tasks" },
    { word: "Encryption", hint: "The process of converting information into a code to secure it" },
    { word: "Algorithm", hint: "A step-by-step procedure for solving a problem or accomplishing a task" },
    { word: "Cloud", hint: "A network of remote servers used for storing and accessing data and applications" },
    { word: "Programming", hint: "The process of creating instructions for a computer to perform specific tasks" },
    { word: "Biometrics", hint: "The use of unique biological characteristics for identification and authentication" },
    { word: "Automation", hint: "The use of technology to perform tasks with minimal human intervention" },
    { word: "Wireless", hint: "The transmission of data or communication signals without the use of physical connections" },
    { word: "Hardware", hint: "The physical components of a computer system" },
    { word: "Software", hint: "The programs and operating systems that run on a computer" },
  ]
};
//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  // If optionValue matches the button innerText, then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  // Initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  // Choose a random word object
  let randomIndex = Math.floor(Math.random() * optionArray.length);
  let wordObject = optionArray[randomIndex];
  chosenWord = wordObject.word.toUpperCase();
  let hint = wordObject.hint;

  const hintContainer = document.getElementById("hint-container");
  hintContainer.innerText = `Hint: ${hint}`;


  // Replace every letter with a span containing a dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  // Display each element as a span
  userInputSection.innerHTML += displayItem;

};


//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;
  userInputSection.innerHTML = "";
  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  hintContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#F4A460";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;